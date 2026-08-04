import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);
const data = sandbox.window.PLAN_DATA;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(data && Array.isArray(data.items), "PLAN_DATA.items no existe");
assert(Object.keys(data.subjects).length === 4, "Deben existir cuatro materias");

const ids = data.items.map((item) => item.id);
assert(new Set(ids).size === ids.length, "Hay IDs duplicados en el cronograma");

for (const item of data.items) {
  assert(data.subjects[item.subject], `Materia inválida en ${item.id}`);
  assert(/^2026-\d{2}-\d{2}$/.test(item.date), `Fecha inválida en ${item.id}`);
  assert(item.title.trim(), `Título vacío en ${item.id}`);
  assert(Number.isFinite(item.minutes) && item.minutes >= 0, `Duración inválida en ${item.id}`);
}

assert(data.syllabus.fuaa.length === 20, "FuAA debe tener 20 temas");
assert(data.syllabus.fbd.length === 21, "FBD debe tener 21 clases OpenFing");
assert(data.items.some((item) => item.id === "redes-ob1-due" && item.date === "2026-09-11"), "Falta entrega Ob1");
assert(data.items.some((item) => item.id === "redes-ob2-due" && item.date === "2026-11-13"), "Falta entrega Ob2");
assert(data.items.some((item) => item.subject === "fuaa" && item.type === "partial" && item.date === "2026-09-23"), "Falta primer parcial FuAA");
assert(data.items.some((item) => item.subject === "fuaa" && item.type === "partial" && item.date === "2026-11-23"), "Falta segundo parcial FuAA");

console.log(`OK: ${data.items.length} bloques, ${ids.length} IDs únicos y cuatro materias.`);
