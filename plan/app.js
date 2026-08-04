(() => {
  "use strict";

  const DATA = window.PLAN_DATA;
  if (!DATA) throw new Error("No se pudo cargar data.js");

  const STORAGE_KEY = "semester_schedule_2026_v3";
  const SUBJECT_FILTERS = new Set(Object.keys(DATA.subjects));
  const DELIVERABLE_TYPES = new Set([
    "practical",
    "questionnaire",
    "workshop",
    "assignment-published",
    "deadline",
    "monitoring",
    "defense"
  ]);
  const IMPORTANT_TYPES = new Set(["control", "partial", "deadline", "defense", "assignment-published"]);
  const INFORMATIONAL_TYPES = new Set(["holiday", "no-class", "partial-window", "notice"]);

  const elements = {
    subjectOverview: document.querySelector("#subjectOverview"),
    completedCount: document.querySelector("#completedCount"),
    pendingCount: document.querySelector("#pendingCount"),
    weekCount: document.querySelector("#weekCount"),
    nextDeadline: document.querySelector("#nextDeadline"),
    progressBar: document.querySelector("#progressBar"),
    timeline: document.querySelector("#timeline"),
    undatedSection: document.querySelector("#undatedSection"),
    undatedList: document.querySelector("#undatedList"),
    undatedCount: document.querySelector("#undatedCount"),
    emptyState: document.querySelector("#emptyState"),
    filters: document.querySelector("#filters"),
    searchInput: document.querySelector("#searchInput"),
    addButton: document.querySelector("#addButton"),
    exportButton: document.querySelector("#exportButton"),
    importButton: document.querySelector("#importButton"),
    importInput: document.querySelector("#importInput"),
    taskDialog: document.querySelector("#taskDialog"),
    taskForm: document.querySelector("#taskForm"),
    taskDialogTitle: document.querySelector("#taskDialogTitle"),
    taskId: document.querySelector("#taskId"),
    taskTitle: document.querySelector("#taskTitle"),
    taskSubject: document.querySelector("#taskSubject"),
    taskType: document.querySelector("#taskType"),
    taskWeek: document.querySelector("#taskWeek"),
    taskEventDate: document.querySelector("#taskEventDate"),
    taskDetails: document.querySelector("#taskDetails"),
    deleteButton: document.querySelector("#deleteButton"),
    cancelDialogButton: document.querySelector("#cancelDialogButton"),
    resetDialog: document.querySelector("#resetDialog"),
    confirmResetButton: document.querySelector("#confirmResetButton"),
    toast: document.querySelector("#toast")
  };

  let activeFilter = "all";
  let state = loadState();
  let activeDrag = null;
  let toastTimer = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function finiteOrder(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function validISO(value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(value || "");
  }

  function parseISO(iso) {
    const [year, month, day] = String(iso).split("-").map(Number);
    return new Date(year, month - 1, day, 12, 0, 0);
  }

  function isoFromDate(date) {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }

  function startOfWeekISO(iso) {
    if (!validISO(iso)) return "";
    const date = parseISO(iso);
    const day = date.getDay();
    date.setDate(date.getDate() + (day === 0 ? -6 : 1 - day));
    return isoFromDate(date);
  }

  function todayISO() {
    return isoFromDate(new Date());
  }

  function dateLabel(iso, includeYear = false) {
    if (!validISO(iso)) return "";
    return parseISO(iso).toLocaleDateString("es-UY", {
      day: "2-digit",
      month: "2-digit",
      ...(includeYear ? { year: "numeric" } : {})
    });
  }

  function weekLabel(week) {
    return `Semana del ${dateLabel(week)}`;
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function typeLabel(type) {
    return DATA.typeLabels[type] || type;
  }

  function typeMark(type) {
    return DATA.typeMarks[type] || "•";
  }

  function sanitizeItem(item, fallbackId, fallbackOrder = 0) {
    const subject = DATA.subjects[item.subject] ? item.subject : "fuaa";
    const week = validISO(item.week) ? startOfWeekISO(item.week) : "";
    const eventDate = validISO(item.eventDate) ? item.eventDate : "";
    return {
      id: String(item.id || fallbackId),
      week,
      eventDate,
      subject,
      type: String(item.type || "course-class"),
      title: String(item.title || "Elemento sin título").slice(0, 140),
      details: String(item.details || "").slice(0, 500),
      periodLabel: String(item.periodLabel || "").slice(0, 100),
      source: String(item.source || "Agregado manualmente").slice(0, 120),
      fixed: Boolean(item.fixed),
      important: Boolean(item.important),
      priority: ["normal", "high", "critical"].includes(item.priority) ? item.priority : "normal",
      order: finiteOrder(item.order, fallbackOrder)
    };
  }

  function seedItems() {
    return DATA.items.map((item, index) => ({
      ...sanitizeItem(item, item.id, index * 10),
      done: false,
      deleted: false,
      edited: false,
      manual: false
    }));
  }

  function initialState() {
    return {
      dataVersion: DATA.version,
      items: seedItems(),
      savedAt: new Date().toISOString()
    };
  }

  function loadState() {
    const fresh = initialState();
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    } catch {
      saved = null;
    }
    if (!saved || !Array.isArray(saved.items)) return fresh;

    const savedById = new Map(saved.items.map((item) => [item.id, item]));
    fresh.items = fresh.items.map((item) => {
      const previous = savedById.get(item.id);
      if (!previous) return item;
      const merged = {
        ...item,
        done: Boolean(previous.done),
        deleted: Boolean(previous.deleted),
        important: Boolean(previous.important),
        order: finiteOrder(previous.order, item.order)
      };
      if (previous.edited) {
        Object.assign(merged, sanitizeItem(previous, item.id, item.order), {
          edited: true,
          manual: false
        });
      }
      return merged;
    });

    const manualItems = saved.items
      .filter((item) => item.manual && item.id)
      .map((item, index) => ({
        ...sanitizeItem(item, item.id, DATA.items.length * 10 + index * 10),
        done: Boolean(item.done),
        deleted: Boolean(item.deleted),
        edited: true,
        manual: true
      }));
    fresh.items.push(...manualItems);
    saveState(fresh);
    return fresh;
  }

  function saveState(nextState = state) {
    nextState.savedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch {
      // Mantiene el estado en memoria cuando el navegador bloquea localStorage.
    }
  }

  function isActionable(item) {
    return !INFORMATIONAL_TYPES.has(item.type);
  }

  function itemDateForSorting(item) {
    return item.eventDate || item.week || "9999-12-31";
  }

  function compareItems(a, b) {
    return (a.week || "9999-12-31").localeCompare(b.week || "9999-12-31")
      || finiteOrder(a.order) - finiteOrder(b.order)
      || itemDateForSorting(a).localeCompare(itemDateForSorting(b))
      || a.id.localeCompare(b.id);
  }

  function itemMatchesSearch(item, query) {
    if (!query) return true;
    const subject = DATA.subjects[item.subject]?.name || "";
    const haystack = `${item.title} ${item.details} ${item.periodLabel} ${item.source} ${subject} ${typeLabel(item.type)}`.toLocaleLowerCase("es");
    return haystack.includes(query);
  }

  function itemMatchesFilter(item) {
    if (item.deleted) return false;
    if (activeFilter === "all") return true;
    if (activeFilter === "deliverables") return DELIVERABLE_TYPES.has(item.type);
    return item.subject === activeFilter;
  }

  function visibleItems() {
    const query = elements.searchInput.value.trim().toLocaleLowerCase("es");
    return state.items.filter(itemMatchesFilter).filter((item) => itemMatchesSearch(item, query)).sort(compareItems);
  }

  function render() {
    renderSubjectOverview();
    renderSummary();
    renderTimeline();
    renderUndated();
    updateControls();
  }

  function renderSubjectOverview() {
    elements.subjectOverview.replaceChildren();
    Object.entries(DATA.subjects).forEach(([key, subject]) => {
      const subjectItems = state.items.filter((item) => item.subject === key && !item.deleted);
      const actionable = subjectItems.filter(isActionable);
      const pending = actionable.filter((item) => !item.done);
      const deliverables = pending.filter((item) => DELIVERABLE_TYPES.has(item.type));
      const datedWeeks = new Set(subjectItems.filter((item) => item.week).map((item) => item.week));
      const today = todayISO();
      const next = subjectItems
        .filter((item) => !item.done && itemDateForSorting(item) >= today && (item.important || IMPORTANT_TYPES.has(item.type)))
        .sort((a, b) => itemDateForSorting(a).localeCompare(itemDateForSorting(b)))[0];

      const card = document.createElement("button");
      card.type = "button";
      card.className = `subject-card ${activeFilter === key ? "active" : ""}`;
      card.style.setProperty("--subject", subject.color);
      card.innerHTML = `
        <span class="subject-card__short">${escapeHtml(subject.short)}</span>
        <strong>${escapeHtml(subject.name)}</strong>
        <small>${escapeHtml(subject.status)}</small>
        <div class="subject-card__meta">
          <span>${pending.length} pendientes</span>
          <span>${deliverables.length} entregas/lab.</span>
          <span>${datedWeeks.size} semanas</span>
        </div>
        <p>${next ? `${dateLabel(itemDateForSorting(next))} · ${escapeHtml(next.title)}` : "Sin próxima fecha publicada"}</p>
      `;
      card.addEventListener("click", () => {
        activeFilter = key;
        render();
      });
      elements.subjectOverview.append(card);
    });
  }

  function renderSummary() {
    const actionable = state.items.filter((item) => !item.deleted && isActionable(item));
    const completed = actionable.filter((item) => item.done);
    const pending = actionable.filter((item) => !item.done);
    const currentWeek = startOfWeekISO(todayISO());
    const weekItems = pending.filter((item) => item.week === currentWeek);
    const today = todayISO();
    const nextImportant = pending
      .filter((item) => (item.eventDate || item.week) >= today && (item.important || IMPORTANT_TYPES.has(item.type)))
      .sort((a, b) => itemDateForSorting(a).localeCompare(itemDateForSorting(b)) || finiteOrder(a.order) - finiteOrder(b.order))[0];

    elements.completedCount.textContent = `${completed.length}/${actionable.length}`;
    elements.pendingCount.textContent = String(pending.length);
    elements.weekCount.textContent = String(weekItems.length);
    elements.nextDeadline.textContent = nextImportant
      ? `${dateLabel(itemDateForSorting(nextImportant))} · ${nextImportant.title}`
      : "—";
    elements.progressBar.style.width = `${actionable.length ? Math.round(completed.length / actionable.length * 100) : 0}%`;
  }

  function renderTimeline() {
    const dated = visibleItems().filter((item) => item.week);
    const pending = dated.filter((item) => !item.done);
    const completed = dated.filter((item) => item.done);
    elements.timeline.replaceChildren();

    if (pending.length) elements.timeline.append(createTimelineZone(pending, false));
    if (completed.length) elements.timeline.append(createTimelineZone(completed, true));
  }

  function createTimelineZone(items, completed) {
    const zone = document.createElement("section");
    zone.className = `timeline-zone ${completed ? "timeline-zone--completed" : "timeline-zone--pending"}`;
    zone.innerHTML = `
      <header class="timeline-zone__heading">
        <div>
          <p>${completed ? "Historial" : "Cronogramas"}</p>
          <h2>${completed ? "Completadas" : "Pendientes"}</h2>
        </div>
        <span>${items.length} ${items.length === 1 ? "elemento" : "elementos"}</span>
      </header>
      <div class="timeline-zone__weeks"></div>
    `;

    const weeksNode = zone.querySelector(".timeline-zone__weeks");
    const groups = new Map();
    items.forEach((item) => {
      if (!groups.has(item.week)) groups.set(item.week, []);
      groups.get(item.week).push(item);
    });

    for (const [week, weekItems] of groups) {
      const subjects = new Set(weekItems.map((item) => item.subject));
      const labels = [...new Set(weekItems.map((item) => item.periodLabel).filter(Boolean))];
      const headingLabel = labels.length === 1 && weekItems.every((item) => item.periodLabel === labels[0])
        ? labels[0]
        : weekLabel(week);
      const section = document.createElement("section");
      section.className = "week-section";
      section.innerHTML = `
        <header class="week-heading">
          <div><p>${escapeHtml(headingLabel)}</p><h3>${weekItems.length} ${weekItems.length === 1 ? "elemento" : "elementos"}</h3></div>
          <span>${subjects.size} ${subjects.size === 1 ? "materia" : "materias"}</span>
        </header>
        <div class="week-items" data-group="${completed ? "completed" : "pending"}|${week}" data-week="${week}" data-completed="${completed ? "true" : "false"}"></div>
      `;
      const container = section.querySelector(".week-items");
      weekItems.forEach((item) => container.append(createItemCard(item, true)));
      weeksNode.append(section);
    }
    return zone;
  }

  function createItemCard(item, draggable) {
    const subject = DATA.subjects[item.subject];
    const article = document.createElement("article");
    article.className = `task-card ${item.done ? "done" : ""} ${item.important ? "is-important" : ""} priority-${item.priority}`;
    article.style.setProperty("--subject", subject.color);
    article.dataset.id = item.id;

    const checkDisabled = INFORMATIONAL_TYPES.has(item.type);
    article.innerHTML = `
      <div class="task-kind" aria-hidden="true" title="${escapeHtml(subject.name)}">
        <strong>${escapeHtml(subject.short)}</strong>
        <small>${escapeHtml(subject.name)}</small>
      </div>
      <label class="task-check ${checkDisabled ? "task-check--disabled" : ""}" title="${checkDisabled ? "Elemento informativo" : "Marcar como completado"}">
        <input type="checkbox" ${item.done ? "checked" : ""} ${checkDisabled ? "disabled" : ""}>
        <span></span>
      </label>
      <div class="task-content">
        <div class="task-meta">
          <span class="subject-badge">${escapeHtml(subject.short)}</span>
          <span>${escapeHtml(typeLabel(item.type))}</span>
          <span>${item.fixed ? "cronograma oficial" : "agregado manualmente"}</span>
          ${item.eventDate ? `<span class="exact-date">fecha ${dateLabel(item.eventDate)}</span>` : ""}
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        ${item.details ? `<p>${escapeHtml(item.details)}</p>` : ""}
        ${item.source ? `<small class="task-source">${escapeHtml(item.source)}</small>` : ""}
      </div>
      <div class="task-actions">
        <button class="task-important" type="button" aria-pressed="${item.important}" aria-label="${item.important ? "Quitar importancia" : "Marcar como importante"}" title="${item.important ? "Quitar importancia" : "Marcar como importante"}">★</button>
        <button class="task-edit" type="button" aria-label="Editar ${escapeHtml(item.title)}">Editar</button>
        ${draggable ? `<button class="task-drag-handle" type="button" aria-label="Reordenar ${escapeHtml(item.title)}" title="Mantener presionado y arrastrar">⋮⋮</button>` : ""}
      </div>
    `;

    const checkbox = article.querySelector("input[type=checkbox]");
    if (!checkDisabled) {
      checkbox.addEventListener("change", () => {
        item.done = checkbox.checked;
        saveState();
        render();
      });
    }

    article.querySelector(".task-important").addEventListener("click", () => {
      item.important = !item.important;
      saveState();
      render();
      showToast(item.important ? "Marcado como importante" : "Importancia quitada");
    });
    article.querySelector(".task-edit").addEventListener("click", () => openTaskDialog(item.id));
    if (draggable) installCardDragging(article);
    return article;
  }

  function installCardDragging(card) {
    const handle = card.querySelector(".task-drag-handle");
    handle.addEventListener("pointerdown", (event) => prepareCardDrag(card, event, true));
    card.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse") return;
      if (event.target.closest("button, input, label, a, textarea, select")) return;
      prepareCardDrag(card, event, false);
    });
  }

  function prepareCardDrag(card, event, forceHandle) {
    if (activeDrag || event.button !== 0) return;
    if (forceHandle) event.preventDefault();
    const sourceContainer = card.closest(".week-items");
    if (!sourceContainer) return;

    const pointerId = event.pointerId;
    const startX = event.clientX;
    const startY = event.clientY;
    let started = false;
    let ghost = null;
    let timer = null;

    const clearListeners = () => {
      clearTimeout(timer);
      window.removeEventListener("pointermove", onMove, { capture: true });
      window.removeEventListener("pointerup", onEnd, { capture: true });
      window.removeEventListener("pointercancel", onEnd, { capture: true });
    };

    const begin = (currentEvent) => {
      if (started || activeDrag) return;
      started = true;
      const rect = card.getBoundingClientRect();
      ghost = card.cloneNode(true);
      ghost.classList.add("drag-ghost");
      ghost.style.width = `${rect.width}px`;
      ghost.style.height = `${rect.height}px`;
      document.body.append(ghost);
      activeDrag = {
        card,
        ghost,
        sourceContainer,
        group: sourceContainer.dataset.group,
        offsetX: Math.min(Math.max(startX - rect.left, 20), rect.width - 20),
        offsetY: Math.min(Math.max(startY - rect.top, 20), rect.height - 20)
      };
      card.classList.add("is-dragging");
      document.body.classList.add("dragging-card");
      updateDragGhost(currentEvent || event);
    };

    const onMove = (moveEvent) => {
      if (moveEvent.pointerId !== pointerId) return;
      const distance = Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY);
      if (!started) {
        if (distance <= (forceHandle ? 8 : 10)) return;
        begin(moveEvent);
      }
      moveEvent.preventDefault();
      updateDragGhost(moveEvent);
      reorderCardAtPoint(moveEvent.clientX, moveEvent.clientY);
    };

    const onEnd = (endEvent) => {
      if (endEvent.pointerId !== pointerId) return;
      clearListeners();
      if (!started) return;
      endEvent.preventDefault();
      persistRenderedOrder(card.closest(".week-items"));
      cleanupDrag();
      saveState();
      render();
      showToast("Orden actualizado");
    };

    timer = setTimeout(() => begin(event), forceHandle ? 120 : 190);
    window.addEventListener("pointermove", onMove, { capture: true, passive: false });
    window.addEventListener("pointerup", onEnd, { capture: true, passive: false });
    window.addEventListener("pointercancel", onEnd, { capture: true, passive: false });
  }

  function updateDragGhost(event) {
    if (!activeDrag) return;
    activeDrag.ghost.style.transform = `translate3d(${event.clientX - activeDrag.offsetX}px, ${event.clientY - activeDrag.offsetY}px, 0)`;
  }

  function reorderCardAtPoint(clientX, clientY) {
    if (!activeDrag) return;
    const target = document.elementFromPoint(clientX, clientY);
    const container = target?.closest(".week-items");
    if (!container || container.dataset.group !== activeDrag.group) return;
    const candidates = [...container.querySelectorAll(".task-card:not(.is-dragging)")];
    const next = candidates.find((candidate) => {
      const rect = candidate.getBoundingClientRect();
      return clientY < rect.top + rect.height / 2;
    });
    if (next) container.insertBefore(activeDrag.card, next);
    else container.append(activeDrag.card);
  }

  function cleanupDrag() {
    if (!activeDrag) return;
    activeDrag.card.classList.remove("is-dragging");
    activeDrag.ghost.remove();
    document.body.classList.remove("dragging-card");
    activeDrag = null;
  }

  function persistRenderedOrder(container) {
    if (!container) return;
    const week = container.dataset.week;
    const completed = container.dataset.completed === "true";
    const displayedIds = [...container.querySelectorAll(".task-card")].map((card) => card.dataset.id);
    const displayedSet = new Set(displayedIds);
    const fullGroup = state.items
      .filter((item) => !item.deleted && item.week === week && Boolean(item.done) === completed)
      .sort(compareItems);
    const slots = fullGroup.map((item, index) => displayedSet.has(item.id) ? index : -1).filter((index) => index >= 0);
    if (slots.length !== displayedIds.length) return;
    const byId = new Map(fullGroup.map((item) => [item.id, item]));
    const reordered = [...fullGroup];
    slots.forEach((slot, index) => { reordered[slot] = byId.get(displayedIds[index]); });
    reordered.forEach((item, index) => { item.order = index * 10; });
  }

  function renderUndated() {
    const undated = visibleItems().filter((item) => !item.week);
    const pending = undated.filter((item) => !item.done);
    const completed = undated.filter((item) => item.done);
    elements.undatedList.replaceChildren();
    elements.undatedCount.textContent = `${undated.length} ${undated.length === 1 ? "elemento" : "elementos"}`;

    if (pending.length) elements.undatedList.append(createUndatedGroup("Pendientes", pending));
    if (completed.length) elements.undatedList.append(createUndatedGroup("Completadas", completed, true));
    elements.undatedSection.hidden = undated.length === 0;

    const hasVisible = visibleItems().length > 0;
    elements.emptyState.hidden = hasVisible;
  }

  function createUndatedGroup(title, items, completed = false) {
    const section = document.createElement("section");
    section.className = `undated-group ${completed ? "undated-group--completed" : ""}`;
    section.innerHTML = `<h3>${escapeHtml(title)}</h3><div class="undated-items"></div>`;
    const list = section.querySelector(".undated-items");
    items.forEach((item) => list.append(createItemCard(item, false)));
    return section;
  }

  function updateControls() {
    elements.filters.querySelectorAll("button[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === activeFilter);
    });
  }

  function nextOrderForGroup(week, completed = false) {
    const orders = state.items
      .filter((item) => !item.deleted && item.week === week && Boolean(item.done) === completed)
      .map((item) => finiteOrder(item.order));
    return (orders.length ? Math.max(...orders) : state.items.length * 10) + 10;
  }

  function openTaskDialog(itemId = null, defaults = {}) {
    const item = itemId ? state.items.find((candidate) => candidate.id === itemId) : null;
    elements.taskForm.reset();
    elements.taskId.value = item?.id || "";
    elements.taskDialogTitle.textContent = item ? "Editar elemento" : "Agregar elemento";
    elements.taskTitle.value = item?.title || defaults.title || "";
    elements.taskSubject.value = item?.subject || defaults.subject || "fuaa";
    elements.taskType.value = item?.type || defaults.type || "course-class";
    elements.taskWeek.value = item?.week || defaults.week || "";
    elements.taskEventDate.value = item?.eventDate || defaults.eventDate || "";
    elements.taskDetails.value = item?.details || defaults.details || "";
    elements.deleteButton.hidden = !item;
    elements.taskDialog.showModal();
    requestAnimationFrame(() => elements.taskTitle.focus());
  }

  function saveTaskFromForm() {
    const existingId = elements.taskId.value;
    const existing = state.items.find((item) => item.id === existingId);
    const week = elements.taskWeek.value ? startOfWeekISO(elements.taskWeek.value) : "";
    const type = elements.taskType.value;
    const values = sanitizeItem({
      id: existingId || `manual-${Date.now()}`,
      week,
      eventDate: elements.taskEventDate.value,
      subject: elements.taskSubject.value,
      type,
      title: elements.taskTitle.value.trim(),
      details: elements.taskDetails.value.trim(),
      source: existingId ? existing?.source || "Ajuste manual" : "Agregado manualmente",
      fixed: existing ? existing.fixed : false,
      important: existing?.important || IMPORTANT_TYPES.has(type),
      priority: IMPORTANT_TYPES.has(type) ? "critical" : DELIVERABLE_TYPES.has(type) ? "high" : "normal",
      order: existing && existing.week === week ? existing.order : nextOrderForGroup(week, existing?.done || false)
    }, existingId || `manual-${Date.now()}`, nextOrderForGroup(week));
    if (!values.title) return;

    if (existing) Object.assign(existing, values, { edited: true });
    else state.items.push({ ...values, done: false, deleted: false, edited: true, manual: true });
    saveState();
    elements.taskDialog.close();
    render();
    showToast(existing ? "Elemento actualizado" : "Elemento agregado");
  }

  function deleteCurrentTask() {
    const item = state.items.find((candidate) => candidate.id === elements.taskId.value);
    if (!item) return;
    item.deleted = true;
    saveState();
    elements.taskDialog.close();
    render();
    showToast("Elemento eliminado");
  }

  function exportState() {
    const payload = {
      app: "Cronograma 2º semestre 2026",
      exportedAt: new Date().toISOString(),
      dataVersion: DATA.version,
      state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `cronograma-${todayISO()}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showToast("Cronograma exportado");
  }

  async function importState(file) {
    const parsed = JSON.parse(await file.text());
    const imported = parsed.state || parsed;
    if (!imported || !Array.isArray(imported.items)) throw new Error("Formato inválido");

    const next = initialState();
    const importedById = new Map(imported.items.filter((item) => item?.id).map((item) => [item.id, item]));
    next.items = next.items.map((item) => {
      const previous = importedById.get(item.id);
      if (!previous) return item;
      return {
        ...item,
        ...(previous.edited ? sanitizeItem(previous, item.id, item.order) : {}),
        done: Boolean(previous.done),
        deleted: Boolean(previous.deleted),
        edited: Boolean(previous.edited),
        important: Boolean(previous.important),
        order: finiteOrder(previous.order, item.order),
        manual: false
      };
    });
    next.items.push(...imported.items
      .filter((item) => item.manual && item.id)
      .map((item, index) => ({
        ...sanitizeItem(item, item.id, DATA.items.length * 10 + index * 10),
        done: Boolean(item.done),
        deleted: Boolean(item.deleted),
        edited: true,
        manual: true
      })));
    state = next;
    saveState();
    render();
    showToast("Cronograma importado");
  }

  function resetState() {
    state = initialState();
    saveState();
    elements.resetDialog.close();
    render();
    showToast("Cronograma restaurado");
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2400);
  }

  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    render();
  });
  elements.searchInput.addEventListener("input", render);
  elements.addButton.addEventListener("click", () => openTaskDialog());
  elements.taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveTaskFromForm();
  });
  elements.cancelDialogButton.addEventListener("click", () => elements.taskDialog.close());
  elements.deleteButton.addEventListener("click", deleteCurrentTask);
  elements.exportButton.addEventListener("click", exportState);
  elements.importButton.addEventListener("click", () => elements.importInput.click());
  elements.importInput.addEventListener("change", async () => {
    const [file] = elements.importInput.files;
    elements.importInput.value = "";
    if (!file) return;
    try {
      await importState(file);
    } catch {
      showToast("No se pudo importar el archivo");
    }
  });
  elements.confirmResetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetState();
  });

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "text-button";
  resetButton.textContent = "Restaurar";
  resetButton.addEventListener("click", () => elements.resetDialog.showModal());
  document.querySelector(".topbar__actions").insertBefore(resetButton, elements.addButton);

  window.addEventListener("blur", cleanupDrag);
  render();
})();
