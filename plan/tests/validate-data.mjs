import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const source = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const data = context.window.PLAN_DATA;

assert.ok(data);
assert.equal(data.version, "2026.09.18-18");
assert.ok(Array.isArray(data.items));
assert.ok(data.items.length > 90);

const ids = data.items.map((item) => item.id);
assert.equal(new Set(ids).size, ids.length, "Los IDs deben ser únicos");
assert.ok(data.items.every((item) => data.subjects[item.subject]), "Todas las materias deben existir");
assert.ok(data.items.every((item) => !item.week || /^\d{4}-\d{2}-\d{2}$/.test(item.week)), "Semanas inválidas");
assert.ok(data.items.every((item) => !Object.hasOwn(item, "minutes")), "No debe haber duraciones sugeridas");


const cutoff = "2026-09-14";
assert.ok(!data.items.some((item) => item.fixed === true && item.week && item.week < cutoff), "No deben quedar tarjetas oficiales anteriores a la semana actual");

const redes = data.items.filter((item) => item.subject === "redes");
assert.equal(redes.filter((item) => item.fixed && item.type === "reading").length, 0, "Redes no debe mostrar capítulos del libro");
assert.ok(redes.filter((item) => item.fixed).every((item) => ["practical", "openfing"].includes(item.type)), "Redes oficial debe quedar limitado a prácticos y clases OpenFing");
for (const n of [8, 9, 10, 11]) {
  assert.ok(redes.some((item) => item.week === "2026-09-14" && item.type === "openfing" && item.title.startsWith(`Clase OpenFing ${n}`)), `Falta OpenFing ${n} en la semana de preparación`);
}
assert.ok(redes.some((item) => item.id === "redes-20261012-02" && item.title === "Clase OpenFing 12"));
assert.ok(redes.some((item) => item.id === "redes-20261116-03" && item.title === "Clase OpenFing 23"));
assert.ok(!redes.some((item) => item.type === "monitoring"));
assert.ok(data.items.some((item) => item.id === "plan-redes-transporte-p1" && /OpenFing 8–11/.test(item.title)));

const fuaa = data.items.filter((item) => item.subject === "fuaa");
assert.equal(fuaa.filter((item) => item.type === "openfing").length, 0, "FuAA sigue por libro");
assert.ok(fuaa.some((item) => item.id === "fuaa-20260914-01" && item.week === "2026-09-28" && /Validación/.test(item.title)), "Validación debe quedar después del primer parcial");
assert.ok(data.items.some((item) => item.id === "fuaa-20260921-02" && item.eventDate === "2026-09-23"));

const fbd = data.items.filter((item) => item.subject === "fbd");
assert.ok(fbd.some((item) => item.id === "plan-fbd-entregable-20260920" && item.eventDate === "2026-09-20"));
assert.ok(fbd.some((item) => item.id === "fbd-20260921-01" && item.type === "partial" && item.eventDate === "2026-09-28"));

const pln = data.items.filter((item) => item.subject === "pln");
assert.equal(pln.filter((item) => item.type === "openfing").length, 0, "PLN no debe mostrar OpenFing porque se sigue presencial");
assert.ok(pln.some((item) => item.id === "pln-openfing-13" && item.type === "course-class" && item.title === "Semántica" && item.week === "2026-09-14"));
assert.ok(pln.some((item) => item.id === "pln-openfing-09" && item.type === "course-class" && /Aprendizaje Automático/.test(item.title) && item.week === "2026-10-05"));
assert.ok(pln.some((item) => item.id === "pln-openfing-20" && /Recuperación y Extracción/.test(item.title)));
assert.ok(pln.some((item) => item.id === "pln-prueba-1" && item.type === "partial" && item.eventDate === "2026-09-29"));
assert.ok(data.items.some((item) => item.id === "plan-pln-libro-cap2-p1"));
assert.ok(data.items.some((item) => item.id === "plan-pln-libro-sintaxis-p1"));
assert.ok(!/Creative Commons/i.test(source));

assert.equal(data.subjects.fbd.scheduleUrl, "https://eva.fing.edu.uy/course/view.php?id=330&section=3#tabs-tree-start");
assert.equal(data.subjects.pln.scheduleUrl, "https://eva.fing.edu.uy/mod/page/view.php?id=84886");

const planParciales = data.items.filter((item) => /Plan de parciales|plan de parciales/.test(item.source));
assert.ok(planParciales.length >= 16, "Debe mantenerse el bloque manual de preparación de parciales");

console.log(`OK: ${data.items.length} elementos validados`);
