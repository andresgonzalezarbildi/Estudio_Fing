import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const source = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const data = context.window.PLAN_DATA;

assert.ok(data);
assert.equal(data.version, "2026.08.04-3");
assert.ok(Array.isArray(data.items));
assert.ok(data.items.length > 200);

const ids = data.items.map((item) => item.id);
assert.equal(new Set(ids).size, ids.length, "Los IDs deben ser únicos");
assert.ok(data.items.every((item) => data.subjects[item.subject]), "Todas las materias deben existir");
assert.ok(data.items.every((item) => !item.week || /^\d{4}-\d{2}-\d{2}$/.test(item.week)), "Semanas inválidas");
assert.ok(data.items.every((item) => !/sugerencia|preparar|repaso para/i.test(`${item.source} ${item.title}`)), "No debe haber bloques de estudio inventados");
assert.ok(data.items.every((item) => !Object.hasOwn(item, "minutes")), "No debe haber duraciones sugeridas");

const redesW1 = data.items.filter((item) => item.subject === "redes" && item.week === "2026-08-03");
for (const n of [1, 2, 3]) {
  assert.ok(redesW1.some((item) => item.type === "openfing" && item.title === `Clase OpenFing ${n}`));
}
assert.ok(redesW1.some((item) => item.type === "reading" && item.title === "Capítulo 1"));
assert.ok(redesW1.some((item) => item.type === "practical" && item.title === "P1 · Retardos"));
assert.ok(redesW1.some((item) => item.title === "Presentación del curso y repaso de introducción"));
assert.ok(redesW1.some((item) => item.title === "Práctico 1"));

const fbd = data.items.filter((item) => item.subject === "fbd");
assert.equal(fbd.length, 21);
assert.ok(fbd.every((item) => !item.week && item.type === "openfing"));

console.log(`OK: ${data.items.length} elementos validados`);
