import fs from "node:fs";
import assert from "node:assert/strict";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const js = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");

assert.match(html, /Cronograma del semestre/);
assert.doesNotMatch(html, /bloques sugeridos|Plan de estudio|Temarios/i);
assert.match(html, /Todas juntas/);
assert.match(html, /Entregas, prácticos y laboratorios/);
assert.match(html, /Semana actual/);
assert.match(html, /completedJumpButton/);
assert.match(html, /topButton/);
assert.doesNotMatch(html, /Contenido de los cronogramas agrupado por semana/i);
assert.doesNotMatch(html, /Exportar|Importar|Restaurar cronograma/i);
assert.match(js, /defaultWeekOpen/);
assert.match(js, /weekOpenOverrides/);
assert.match(js, /completedZoneOpen = false/);
assert.match(css, /\.collapse-sign/);
assert.match(css, /details\[open\]/);
assert.match(js, /semester_schedule_2026_v3/);
assert.match(js, /periodLabel/);
assert.match(js, /headingLabel/);
assert.match(js, /COMPLETION_DELAY_MS/);
assert.match(js, /pendingCompletionIds/);
assert.match(js, /current-week/);
assert.match(js, /scrollIntoView/);
assert.doesNotMatch(js, /remainingTime|formatDuration|syllabus/i);
assert.match(css, /--max-width:\s*1920px/);
assert.match(css, /\.task-kind/);
assert.match(css, /\.drag-ghost/);
assert.match(css, /\.completion-delay/);
assert.match(css, /\.quick-nav/);
assert.match(css, /width:\s*168px/);

console.log("OK: interfaz validada");
