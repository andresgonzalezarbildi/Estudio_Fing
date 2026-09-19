import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const source = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const data = context.window.PLAN_DATA;

assert.ok(data);
assert.equal(data.version, "2026.09.18-19");
assert.ok(Array.isArray(data.items));
const ids = data.items.map((item) => item.id);
assert.equal(new Set(ids).size, ids.length, "Los IDs deben ser únicos");
assert.ok(data.items.every((item) => data.subjects[item.subject]), "Todas las materias deben existir");
assert.ok(data.items.every((item) => !item.week || /^\d{4}-\d{2}-\d{2}$/.test(item.week)), "Semanas inválidas");
assert.ok(data.items.every((item) => !Object.hasOwn(item, "minutes")), "No debe haber duraciones sugeridas");

const daily = data.items.filter((item) => /Plan diario de parciales/.test(item.source || ""));
assert.ok(daily.length >= 25, "Debe existir el plan diario detallado");
for (const day of ["2026-09-18","2026-09-19","2026-09-20","2026-09-21","2026-09-22","2026-09-23"]) {
  assert.ok(daily.some((i) => i.subject === "fuaa" && i.eventDate === day), `Falta FuAA ${day}`);
  assert.ok(daily.some((i) => i.subject === "redes" && i.eventDate === day), `Falta Redes ${day}`);
}
assert.ok(daily.some((i) => i.id === "plan-fuaa-dia-20260919" && /2\.1, 2\.2 y 2\.3/.test(i.details)));
assert.ok(daily.some((i) => i.id === "plan-fuaa-dia-20260920" && /4\.1 y 4\.2/.test(i.details)));
assert.ok(daily.some((i) => i.id === "plan-redes-dia-20260918" && /OpenFing 8/.test(i.title)));
assert.ok(daily.some((i) => i.id === "plan-redes-dia-20260921" && /OpenFing 11/.test(i.title)));
assert.ok(daily.some((i) => i.id === "plan-fbd-entregable-20260918"));
assert.ok(daily.some((i) => i.id === "plan-fbd-entregable-20260919"));
assert.ok(data.items.some((i) => i.id === "plan-fbd-entregable-20260920" && i.eventDate === "2026-09-20"));
for (const day of ["2026-09-24","2026-09-25","2026-09-26","2026-09-27","2026-09-28"]) assert.ok(daily.some((i)=>i.subject==="fbd" && i.eventDate===day), `Falta FBD ${day}`);
for (const day of ["2026-09-24","2026-09-25","2026-09-26","2026-09-27","2026-09-28","2026-09-29"]) assert.ok(daily.some((i)=>i.subject==="pln" && i.eventDate===day), `Falta PLN ${day}`);
assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260924" && /capítulo 2/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260926" && /18 y 19/.test(i.details) && /19 y 20/.test(i.details)));

// Parciales y cronogramas futuros siguen presentes.
assert.ok(data.items.some((i)=>i.id==="fuaa-20260921-02" && i.eventDate==="2026-09-23"));
assert.ok(data.items.some((i)=>i.id==="redes-primer-parcial-20260923" && i.eventDate==="2026-09-23"));
assert.ok(data.items.some((i)=>i.id==="fbd-20260921-01" && i.eventDate==="2026-09-28"));
assert.ok(data.items.some((i)=>i.id==="pln-prueba-1" && i.eventDate==="2026-09-29"));
assert.ok(data.items.some((i)=>i.id==="fuaa-20260914-01" && i.week==="2026-09-28"), "Validación debe seguir después del parcial");
assert.ok(data.items.some((i)=>i.id==="redes-20261012-02"), "Las clases futuras de Redes deben mantenerse");
assert.ok(data.items.some((i)=>i.id==="pln-openfing-09" && i.type==="course-class"), "Las clases presenciales futuras de PLN deben mantenerse");
assert.equal(data.subjects.fbd.scheduleUrl, "https://eva.fing.edu.uy/course/view.php?id=330&section=3#tabs-tree-start");
assert.equal(data.subjects.pln.scheduleUrl, "https://eva.fing.edu.uy/mod/page/view.php?id=84886");
assert.ok(!/Creative Commons/i.test(source));

console.log(`OK: ${data.items.length} elementos validados`);
