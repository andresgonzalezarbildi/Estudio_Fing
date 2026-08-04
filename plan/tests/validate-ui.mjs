import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const app = readFileSync(resolve(root, "app.js"), "utf8");
const css = readFileSync(resolve(root, "style.css"), "utf8");

assert.match(html, /data-filter="all"/);
assert.match(html, /data-filter="deliverables"/);
assert.doesNotMatch(html, /data-filter="upcoming"/);
assert.doesNotMatch(html, /Base inicial/);
assert.match(app, /Completadas/);
assert.match(app, /installCardDragging/);
assert.match(app, /important/);
assert.match(css, /\.task-card\.is-important/);
assert.match(css, /--max-width: 1860px/);

console.log("UI validada correctamente.");
