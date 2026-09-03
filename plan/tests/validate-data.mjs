import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const source = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const data = context.window.PLAN_DATA;

assert.ok(data);
assert.equal(data.version, "2026.09.03-15");
assert.ok(Array.isArray(data.items));
assert.ok(data.items.length > 160);

const ids = data.items.map((item) => item.id);
assert.equal(new Set(ids).size, ids.length, "Los IDs deben ser únicos");
assert.ok(data.items.every((item) => data.subjects[item.subject]), "Todas las materias deben existir");
assert.ok(data.items.every((item) => !item.week || /^\d{4}-\d{2}-\d{2}$/.test(item.week)), "Semanas inválidas");
assert.ok(data.items.every((item) => !/sugerencia|preparar|repaso para/i.test(`${item.source} ${item.title}`)), "No debe haber bloques de estudio inventados");
assert.ok(data.items.every((item) => !Object.hasOwn(item, "minutes")), "No debe haber duraciones sugeridas");

const redes = data.items.filter((item) => item.subject === "redes");
const redesW1 = redes.filter((item) => item.week === "2026-08-03");
assert.equal(redes.length, 28, "Redes debe quedar reducido a prácticos y lecturas del libro");
assert.equal(redes.filter((item) => item.type === "practical").length, 14, "Deben mantenerse los 14 prácticos de Redes");
assert.equal(redes.filter((item) => item.type === "reading").length, 14, "Deben mantenerse las 14 lecturas/capítulos de Redes");
assert.ok(redes.every((item) => ["practical", "reading"].includes(item.type)), "Redes no debe mostrar monitoreos, OpenFing, parciales, obligatorios ni otras tarjetas oficiales");
assert.ok(!redes.some((item) => item.type === "monitoring"), "Redes no debe mostrar monitoreos");
assert.ok(redesW1.some((item) => item.id === "redes-20260803-05" && item.type === "reading" && item.title === "Capítulo 1"));
assert.ok(redesW1.some((item) => item.id === "redes-20260803-06" && item.type === "practical" && item.title === "P1 · Retardos"));
assert.equal(redesW1.length, 2, "La semana 1 de Redes debe tener únicamente capítulo y práctico");

assert.ok(!data.items.some((item) => item.type === "discussion"), "No deben quedar tarjetas de discusión");
assert.ok(!data.items.some((item) => item.type === "consultation"), "No deben quedar tarjetas de consulta");
assert.ok(!data.items.some((item) => ["holiday", "no-class", "notice"].includes(item.type)), "No deben quedar avisos administrativos de poco valor");
assert.ok(!data.items.some((item) => item.subject === "redes" && item.type === "course-class" && item.details === "Actividad de clase indicada en el cronograma"), "No deben quedar actividades de clase redundantes en Redes");

const fbd = data.items.filter((item) => item.subject === "fbd");
assert.ok(fbd.length > 40);
assert.ok(fbd.every((item) => item.week));
assert.ok(fbd.every((item) => item.periodLabel));
assert.ok(!fbd.some((item) => item.id.startsWith("fbd-undated")));

const fbdW1 = fbd.filter((item) => item.week === "2026-08-03");
assert.ok(fbdW1.some((item) => item.title === "Introducción"));
assert.ok(fbdW1.some((item) => item.title === "Diseño Conceptual"));
assert.ok(fbdW1.some((item) => item.title === "Video OpenFing 1" && /16:43/.test(item.details)));
assert.ok(fbdW1.some((item) => item.title === "Video OpenFing 2"));
assert.ok(!fbdW1.some((item) => item.title === "Presentación del curso"));

const partials = fbd.filter((item) => item.title === "Parciales");
assert.equal(partials.length, 1, "El período conjunto no debe separarse artificialmente");
assert.equal(partials[0].periodLabel, "Semanas 8 y 9 · 19/09–03/10");

const repeatedVideos = fbd.filter((item) => ["Video OpenFing 13", "Video OpenFing 14"].includes(item.title));
assert.equal(repeatedVideos.length, 4, "Los videos 13 y 14 deben figurar en semanas 7 y 10");

const pln = data.items.filter((item) => item.subject === "pln");
assert.equal(pln.filter((item) => item.type === "openfing").length, 20, "Deben mantenerse las 20 clases OpenFing de IntroPLN");
assert.ok(pln.filter((item) => item.type === "openfing").every((item) => item.week), "Las clases OpenFing de PLN deben quedar ubicadas según el cronograma tentativo");
assert.ok(pln.some((item) => item.id === "pln-openfing-01" && item.week === "2026-08-03" && item.eventDate === "2026-08-04"));
assert.ok(pln.some((item) => item.id === "pln-openfing-02" && item.week === "2026-08-17"));
assert.ok(pln.some((item) => item.id === "pln-openfing-20" && item.week === "2026-10-26"));
assert.ok(pln.some((item) => item.title === "No está en OpenFing · Extracción de Información"));
assert.ok(pln.some((item) => item.title === "No está en OpenFing · Narrativa interactiva"));
assert.equal(pln.filter((item) => /Suspendida por paro/i.test(item.title)).length, 0, "La semana suspendida no debe generar una tarjeta vacía");
assert.ok(pln.some((item) => item.id === "pln-prueba-1" && !item.week));
assert.ok(pln.some((item) => item.id === "pln-prueba-2" && !item.week));
assert.equal(pln.filter((item) => /Presentaciones de artículos/.test(item.title)).length, 2);
assert.ok(!/Creative Commons/i.test(source));


assert.equal(data.subjects.fbd.scheduleUrl, "https://eva.fing.edu.uy/course/view.php?id=330&section=3#tabs-tree-start");
assert.equal(data.subjects.fbd.scheduleLabel, "Cronograma oficial");
assert.equal(data.subjects.fbd.scheduleOriginal, true);
assert.equal(data.subjects.pln.scheduleUrl, "https://eva.fing.edu.uy/mod/page/view.php?id=84886");
assert.equal(data.subjects.pln.scheduleLabel, "Cronograma oficial");
assert.equal(data.subjects.pln.scheduleOriginal, true);

console.log(`OK: ${data.items.length} elementos validados`);
