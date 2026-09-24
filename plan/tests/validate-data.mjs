import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const source = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const data = context.window.PLAN_DATA;

assert.ok(data);
assert.equal(data.version, "2026.09.24-21");
assert.ok(data.focus?.active, "Debe estar activa la vista de foco");
assert.deepEqual(Array.from(data.focus.subjects), ["fbd", "pln"]);
assert.equal(data.focus.start, "2026-09-24");
assert.equal(data.focus.end, "2026-09-29");

assert.ok(Array.isArray(data.items));
const ids = data.items.map((item) => item.id);
assert.equal(new Set(ids).size, ids.length, "Los IDs deben ser únicos");
assert.ok(data.items.every((item) => data.subjects[item.subject]), "Todas las materias deben existir");
assert.ok(data.items.every((item) => !item.week || /^\d{4}-\d{2}-\d{2}$/.test(item.week)), "Semanas inválidas");
assert.ok(data.items.every((item) => !Object.hasOwn(item, "minutes")), "No debe haber duraciones sugeridas");

const daily = data.items.filter((item) => /Plan de parciales · FBD \+ IntroPLN/.test(item.source || ""));
assert.equal(daily.filter((i) => i.subject === "fbd").length, 5, "Debe haber una tarjeta FBD por día 24–28");
assert.equal(daily.filter((i) => i.subject === "pln").length, 6, "Debe haber una tarjeta IntroPLN por día 24–29");

for (const day of ["2026-09-24","2026-09-25","2026-09-26","2026-09-27","2026-09-28"]) {
  assert.ok(daily.some((i)=>i.subject==="fbd" && i.eventDate===day && i.focus), `Falta FBD ${day}`);
}
for (const day of ["2026-09-24","2026-09-25","2026-09-26","2026-09-27","2026-09-28","2026-09-29"]) {
  assert.ok(daily.some((i)=>i.subject==="pln" && i.eventDate===day && i.focus), `Falta PLN ${day}`);
}

assert.ok(daily.some((i)=>i.id==="plan-fbd-dia-20260924" && /P1/.test(i.details) && /P8/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-fbd-dia-20260925" && /P2/.test(i.details) && /P3/.test(i.details) && /P4/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-fbd-dia-20260926" && /P5/.test(i.details) && /P6/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-fbd-dia-20260927" && /parcial viejo/.test(i.details) && /No agregar contenido nuevo/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-fbd-dia-20260928" && /Nada nuevo/.test(i.details)));

assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260924" && /P1/.test(i.details) && /Gramática/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260925" && /capítulo 2/.test(i.details) && /P2/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260926" && /18 y 19/.test(i.details) && /19 y 20/.test(i.details) && /P2/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260927" && /P3/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260928" && /Semántica/.test(i.details) && /P3/.test(i.details)));
assert.ok(daily.some((i)=>i.id==="plan-pln-dia-20260929" && /Nada nuevo/.test(i.details)));
assert.ok(!daily.some((i)=>i.type==="openfing"), "El plan de IntroPLN no debe crear tarjetas OpenFing");

const fbdPartial = data.items.find((i)=>i.id==="fbd-20260921-01");
const plnPartial = data.items.find((i)=>i.id==="pln-prueba-1");
assert.ok(fbdPartial?.focus && fbdPartial.eventDate==="2026-09-28");
assert.ok(plnPartial?.focus && plnPartial.eventDate==="2026-09-29");

// Los elementos previos siguen en el dataset para no perder IDs/progreso, pero no forman parte del foco pendiente.
assert.ok(data.items.some((i)=>i.id==="plan-fbd-entregable-20260920" && !i.focus));
assert.ok(data.items.some((i)=>i.id==="fuaa-20260921-02"));
assert.ok(data.items.some((i)=>i.id==="redes-primer-parcial-20260923"));
assert.ok(data.items.some((i)=>i.id==="redes-20261012-02"));
assert.ok(data.items.some((i)=>i.id==="pln-openfing-09" && !i.focus));

assert.equal(data.subjects.fbd.scheduleUrl, "https://eva.fing.edu.uy/course/view.php?id=330&section=3#tabs-tree-start");
assert.equal(data.subjects.pln.scheduleUrl, "https://eva.fing.edu.uy/mod/page/view.php?id=84886");
assert.ok(!/Creative Commons/i.test(source));

console.log(`OK: ${data.items.length} elementos validados · foco ${data.focus.start}–${data.focus.end}`);
