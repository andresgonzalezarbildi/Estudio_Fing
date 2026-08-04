(() => {
  "use strict";

  const DATA = window.PLAN_DATA;
  if (!DATA) throw new Error("No se pudo cargar data.js");

  const STORAGE_KEY = "semester_study_plan_2026_v1";
  const IMPORTANT_TYPES = new Set(["control", "partial", "deadline", "defense"]);
  const DELIVERABLE_TYPES = new Set([
    "assignment",
    "assignment-published",
    "deadline",
    "monitoring",
    "defense",
    "practical",
    "workshop"
  ]);
  const INFORMATIONAL_TYPES = new Set(["holiday", "no-class", "partial-window", "assignment-published"]);
  const SUBJECT_FILTERS = new Set(Object.keys(DATA.subjects));

  const elements = {
    subjectOverview: document.querySelector("#subjectOverview"),
    completedCount: document.querySelector("#completedCount"),
    remainingTime: document.querySelector("#remainingTime"),
    weekCount: document.querySelector("#weekCount"),
    nextDeadline: document.querySelector("#nextDeadline"),
    progressBar: document.querySelector("#progressBar"),
    timeline: document.querySelector("#timeline"),
    timelineView: document.querySelector("#timelineView"),
    syllabusView: document.querySelector("#syllabusView"),
    syllabusGrid: document.querySelector("#syllabusGrid"),
    undatedSection: document.querySelector("#undatedSection"),
    undatedList: document.querySelector("#undatedList"),
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
    taskDate: document.querySelector("#taskDate"),
    taskMinutes: document.querySelector("#taskMinutes"),
    taskDetails: document.querySelector("#taskDetails"),
    deleteButton: document.querySelector("#deleteButton"),
    cancelDialogButton: document.querySelector("#cancelDialogButton"),
    resetDialog: document.querySelector("#resetDialog"),
    confirmResetButton: document.querySelector("#confirmResetButton"),
    toast: document.querySelector("#toast")
  };

  let activeFilter = "all";
  let activeView = "timeline";
  let state = loadState();
  let toastTimer = null;
  let activeDrag = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function seedItems() {
    return DATA.items.map((item, index) => ({
      ...clone(item),
      done: false,
      deleted: false,
      edited: false,
      manual: false,
      important: Boolean(item.important),
      order: index * 10
    }));
  }

  function initialState() {
    return {
      dataVersion: DATA.version,
      items: seedItems(),
      syllabusDone: {},
      savedAt: new Date().toISOString()
    };
  }

  function loadState() {
    const fresh = initialState();
    let saved;

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
          manual: false,
          edited: true
        });
      }

      return merged;
    });

    const manualItems = saved.items
      .filter((item) => item.manual && item.id)
      .map((item, index) => ({
        ...sanitizeItem(item, item.id, DATA.items.length * 10 + index * 10),
        manual: true,
        edited: true,
        done: Boolean(item.done),
        deleted: Boolean(item.deleted)
      }));

    fresh.items.push(...manualItems);
    fresh.syllabusDone = saved.syllabusDone && typeof saved.syllabusDone === "object"
      ? saved.syllabusDone
      : {};
    fresh.savedAt = saved.savedAt || fresh.savedAt;
    saveState(fresh);
    return fresh;
  }

  function finiteOrder(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function sanitizeItem(item, fallbackId, fallbackOrder = 0) {
    const validSubject = DATA.subjects[item.subject] ? item.subject : "fuaa";
    const validDate = /^\d{4}-\d{2}-\d{2}$/.test(item.date || "") ? item.date : "";
    const minutes = Math.max(0, Math.min(720, Number(item.minutes) || 0));

    return {
      id: String(item.id || fallbackId),
      date: validDate,
      subject: validSubject,
      type: String(item.type || "study"),
      title: String(item.title || "Bloque sin título").slice(0, 140),
      details: String(item.details || "").slice(0, 500),
      minutes,
      fixed: Boolean(item.fixed),
      source: String(item.source || "Manual").slice(0, 120),
      priority: ["normal", "high", "critical"].includes(item.priority) ? item.priority : "normal",
      important: Boolean(item.important),
      order: finiteOrder(item.order, fallbackOrder)
    };
  }

  function saveState(nextState = state) {
    nextState.savedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch {
      // El plan sigue funcionando en memoria si el navegador bloquea el almacenamiento local.
    }
  }

  function todayISO() {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }

  function parseISO(iso) {
    const [year, month, day] = iso.split("-").map(Number);
    return new Date(year, month - 1, day, 12, 0, 0);
  }

  function isoFromDate(date) {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }

  function addDaysISO(iso, days) {
    const date = parseISO(iso);
    date.setDate(date.getDate() + days);
    return isoFromDate(date);
  }

  function startOfWeekISO(iso) {
    const date = parseISO(iso);
    const day = date.getDay();
    const offset = day === 0 ? -6 : 1 - day;
    date.setDate(date.getDate() + offset);
    return isoFromDate(date);
  }

  function endOfWeekISO(iso) {
    return addDaysISO(startOfWeekISO(iso), 6);
  }

  function dateLabel(iso, options = {}) {
    if (!iso) return "Sin fecha";
    return parseISO(iso).toLocaleDateString("es-UY", {
      day: options.short ? "2-digit" : "numeric",
      month: options.short ? "short" : "long",
      ...(options.year ? { year: "numeric" } : {})
    });
  }

  function weekdayLabel(iso) {
    return parseISO(iso).toLocaleDateString("es-UY", { weekday: "short" }).replace(".", "");
  }

  function weekLabel(monday) {
    const sunday = addDaysISO(monday, 6);
    const start = parseISO(monday);
    const end = parseISO(sunday);
    const sameMonth = start.getMonth() === end.getMonth();
    const startText = sameMonth
      ? String(start.getDate())
      : start.toLocaleDateString("es-UY", { day: "numeric", month: "short" });
    const endText = end.toLocaleDateString("es-UY", { day: "numeric", month: "long" });
    return `Semana del ${startText} al ${endText}`;
  }

  function formatDuration(minutes) {
    const value = Math.max(0, Number(minutes) || 0);
    if (value < 60) return `${value} min`;
    const hours = Math.floor(value / 60);
    const rest = value % 60;
    return rest ? `${hours} h ${rest} min` : `${hours} h`;
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

  function actionableItems() {
    return state.items.filter((item) => !item.deleted && !INFORMATIONAL_TYPES.has(item.type));
  }

  function itemMatchesSearch(item, query) {
    if (!query) return true;
    const subject = DATA.subjects[item.subject]?.name || "";
    const haystack = `${item.title} ${item.details} ${item.source} ${subject} ${typeLabel(item.type)}`.toLocaleLowerCase("es");
    return haystack.includes(query);
  }

  function itemMatchesFilter(item) {
    if (item.deleted || !item.date) return false;
    if (activeFilter === "all") return true;
    if (activeFilter === "deliverables") return DELIVERABLE_TYPES.has(item.type);
    return item.subject === activeFilter;
  }

  function compareItems(a, b) {
    const weekComparison = startOfWeekISO(a.date).localeCompare(startOfWeekISO(b.date));
    if (weekComparison) return weekComparison;
    return finiteOrder(a.order) - finiteOrder(b.order)
      || a.date.localeCompare(b.date)
      || a.subject.localeCompare(b.subject)
      || a.id.localeCompare(b.id);
  }

  function visibleItems() {
    const query = elements.searchInput.value.trim().toLocaleLowerCase("es");
    return state.items
      .filter(itemMatchesFilter)
      .filter((item) => itemMatchesSearch(item, query))
      .sort(compareItems);
  }

  function render() {
    renderSubjectOverview();
    renderSummary();
    renderTimeline();
    renderSyllabus();
    renderUndated();
    updateControls();
  }

  function renderSubjectOverview() {
    elements.subjectOverview.replaceChildren();
    const today = todayISO();

    Object.entries(DATA.subjects).forEach(([key, subject]) => {
      const subjectItems = state.items.filter((item) => item.subject === key && !item.deleted);
      const pending = subjectItems.filter((item) => !item.done && !INFORMATIONAL_TYPES.has(item.type));
      const practical = subjectItems.filter((item) => !item.done && DELIVERABLE_TYPES.has(item.type));
      const next = subjectItems
        .filter((item) => item.date && item.date >= today && !INFORMATIONAL_TYPES.has(item.type))
        .sort((a, b) => a.date.localeCompare(b.date) || finiteOrder(a.order) - finiteOrder(b.order))[0];
      const syllabusItems = DATA.syllabus[key] || [];
      const syllabusDone = syllabusItems.filter((topic) => state.syllabusDone[topic.id]).length;

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
          <span>${practical.length} entregas/lab.</span>
          <span>${syllabusDone}/${syllabusItems.length} temas</span>
        </div>
        <p>${next ? `${dateLabel(next.date, { short: true })} · ${escapeHtml(next.title)}` : "Sin próximo evento fechado"}</p>
      `;
      card.addEventListener("click", () => {
        activeFilter = key;
        activeView = "timeline";
        render();
      });
      elements.subjectOverview.append(card);
    });
  }

  function renderSummary() {
    const items = actionableItems();
    const completed = items.filter((item) => item.done);
    const pendingMinutes = items
      .filter((item) => !item.done)
      .reduce((total, item) => total + Number(item.minutes || 0), 0);
    const today = todayISO();
    const weekStart = startOfWeekISO(today);
    const weekEnd = endOfWeekISO(today);
    const weekItems = items.filter((item) => item.date >= weekStart && item.date <= weekEnd && !item.done);
    const nextImportant = state.items
      .filter((item) => !item.deleted && !item.done && item.date >= today && (item.important || IMPORTANT_TYPES.has(item.type)))
      .sort((a, b) => a.date.localeCompare(b.date) || finiteOrder(a.order) - finiteOrder(b.order))[0];

    elements.completedCount.textContent = `${completed.length}/${items.length}`;
    elements.remainingTime.textContent = formatDuration(pendingMinutes);
    elements.weekCount.textContent = String(weekItems.length);
    elements.nextDeadline.textContent = nextImportant
      ? `${dateLabel(nextImportant.date, { short: true })} · ${nextImportant.title}`
      : "—";
    elements.progressBar.style.width = `${items.length ? Math.round(completed.length / items.length * 100) : 0}%`;
  }

  function renderTimeline() {
    const items = visibleItems();
    const pending = items.filter((item) => !item.done);
    const completed = items.filter((item) => item.done);
    elements.timeline.replaceChildren();

    if (pending.length) {
      elements.timeline.append(createTimelineZone(pending, false));
    }

    if (completed.length) {
      elements.timeline.append(createTimelineZone(completed, true));
    }

    elements.emptyState.hidden = items.length > 0 || activeView !== "timeline";
  }

  function createTimelineZone(items, completed) {
    const zone = document.createElement("section");
    zone.className = `timeline-zone ${completed ? "timeline-zone--completed" : "timeline-zone--pending"}`;
    zone.innerHTML = `
      <header class="timeline-zone__heading">
        <div>
          <p>${completed ? "Historial" : "En curso"}</p>
          <h2>${completed ? "Completadas" : "Cronograma pendiente"}</h2>
        </div>
        <span>${items.length} ${items.length === 1 ? "bloque" : "bloques"}</span>
      </header>
      <div class="timeline-zone__weeks"></div>
    `;

    const weeks = zone.querySelector(".timeline-zone__weeks");
    const groups = new Map();
    items.forEach((item) => {
      const monday = startOfWeekISO(item.date);
      if (!groups.has(monday)) groups.set(monday, []);
      groups.get(monday).push(item);
    });

    for (const [monday, weekItems] of groups) {
      const section = document.createElement("section");
      section.className = "week-section";
      const total = weekItems.reduce((sum, item) => sum + Number(item.minutes || 0), 0);
      section.innerHTML = `
        <header class="week-heading">
          <div><p>${escapeHtml(weekLabel(monday))}</p><h3>${weekItems.length} ${weekItems.length === 1 ? "bloque" : "bloques"}</h3></div>
          <span>${total ? formatDuration(total) : "Fechas y eventos"}</span>
        </header>
        <div class="week-items" data-group="${completed ? "completed" : "pending"}|${monday}" data-week="${monday}" data-completed="${completed ? "true" : "false"}"></div>
      `;

      const container = section.querySelector(".week-items");
      weekItems.forEach((item) => container.append(createItemCard(item)));
      weeks.append(section);
    }

    return zone;
  }

  function createItemCard(item) {
    const subject = DATA.subjects[item.subject];
    const article = document.createElement("article");
    article.className = `task-card ${item.done ? "done" : ""} ${item.important ? "is-important" : ""} priority-${item.priority}`;
    article.style.setProperty("--subject", subject.color);
    article.dataset.id = item.id;

    const checkDisabled = INFORMATIONAL_TYPES.has(item.type);
    article.innerHTML = `
      <div class="task-date">
        <span>${escapeHtml(weekdayLabel(item.date))}</span>
        <strong>${parseISO(item.date).getDate()}</strong>
        <small>${escapeHtml(parseISO(item.date).toLocaleDateString("es-UY", { month: "short" }).replace(".", ""))}</small>
      </div>
      <label class="task-check ${checkDisabled ? "task-check--disabled" : ""}" title="${checkDisabled ? "Evento informativo" : "Marcar como completado"}">
        <input type="checkbox" ${item.done ? "checked" : ""} ${checkDisabled ? "disabled" : ""}>
        <span></span>
      </label>
      <div class="task-content">
        <div class="task-meta">
          <span class="subject-badge">${escapeHtml(subject.short)}</span>
          <span>${escapeHtml(typeLabel(item.type))}</span>
          ${item.fixed ? "<span>fecha oficial</span>" : "<span>sugerido</span>"}
          ${item.minutes ? `<span>${formatDuration(item.minutes)}</span>` : ""}
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        ${item.details ? `<p>${escapeHtml(item.details)}</p>` : ""}
        ${item.source ? `<small class="task-source">${escapeHtml(item.source)}</small>` : ""}
      </div>
      <div class="task-actions">
        <button class="task-important" type="button" aria-pressed="${item.important}" aria-label="${item.important ? "Quitar importancia" : "Marcar como importante"}" title="${item.important ? "Quitar importancia" : "Marcar como importante"}">★</button>
        <button class="task-edit" type="button" aria-label="Editar ${escapeHtml(item.title)}">Editar</button>
        <button class="task-drag-handle" type="button" aria-label="Reordenar ${escapeHtml(item.title)}" title="Mantener presionado y arrastrar">⋮⋮</button>
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
    installCardDragging(article);
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
    const origin = event.currentTarget;
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
      const finalContainer = card.closest(".week-items");
      persistRenderedOrder(finalContainer);
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
    const x = event.clientX - activeDrag.offsetX;
    const y = event.clientY - activeDrag.offsetY;
    activeDrag.ghost.style.transform = `translate3d(${x}px, ${y}px, 0)`;
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
    const monday = container.dataset.week;
    const completed = container.dataset.completed === "true";
    const displayedIds = [...container.querySelectorAll(".task-card")].map((card) => card.dataset.id);
    const displayedSet = new Set(displayedIds);

    const fullGroup = state.items
      .filter((item) => !item.deleted && item.date && startOfWeekISO(item.date) === monday && Boolean(item.done) === completed)
      .sort(compareItems);

    const slots = fullGroup
      .map((item, index) => displayedSet.has(item.id) ? index : -1)
      .filter((index) => index >= 0);

    if (slots.length !== displayedIds.length) return;

    const byId = new Map(fullGroup.map((item) => [item.id, item]));
    const reordered = [...fullGroup];
    slots.forEach((slot, index) => {
      reordered[slot] = byId.get(displayedIds[index]);
    });
    reordered.forEach((item, index) => {
      item.order = index * 10;
    });
  }

  function renderUndated() {
    const query = elements.searchInput.value.trim().toLocaleLowerCase("es");
    const entries = DATA.undated.filter((entry) => {
      if (activeFilter === "deliverables") return false;
      if (SUBJECT_FILTERS.has(activeFilter) && activeFilter !== entry.subject) return false;
      return itemMatchesSearch({ ...entry, source: DATA.subjects[entry.subject].status, type: "study" }, query);
    });

    elements.undatedList.replaceChildren();
    entries.forEach((entry) => {
      const subject = DATA.subjects[entry.subject];
      const card = document.createElement("article");
      card.className = "undated-card";
      card.style.setProperty("--subject", subject.color);
      card.innerHTML = `
        <span>${escapeHtml(subject.short)}</span>
        <div><h3>${escapeHtml(entry.title)}</h3><p>${escapeHtml(entry.details)}</p></div>
        <button type="button">Agregar fecha</button>
      `;
      card.querySelector("button").addEventListener("click", () => {
        openTaskDialog(null, {
          subject: entry.subject,
          title: entry.title,
          details: entry.details,
          type: "study"
        });
      });
      elements.undatedList.append(card);
    });

    elements.undatedSection.hidden = activeView !== "timeline" || entries.length === 0;
  }

  function renderSyllabus() {
    elements.syllabusGrid.replaceChildren();
    const query = elements.searchInput.value.trim().toLocaleLowerCase("es");
    let visibleSubjects = 0;

    Object.entries(DATA.subjects).forEach(([key, subject]) => {
      if (SUBJECT_FILTERS.has(activeFilter) && activeFilter !== key) return;

      const topics = (DATA.syllabus[key] || []).filter((topic) => {
        if (!query) return true;
        return `${topic.title} ${topic.details}`.toLocaleLowerCase("es").includes(query);
      });
      if (!topics.length) return;
      visibleSubjects += 1;

      const completed = topics.filter((topic) => state.syllabusDone[topic.id]).length;
      const section = document.createElement("section");
      section.className = "syllabus-card";
      section.style.setProperty("--subject", subject.color);
      section.innerHTML = `
        <header>
          <div><span>${escapeHtml(subject.short)}</span><h2>${escapeHtml(subject.name)}</h2></div>
          <strong>${completed}/${topics.length}</strong>
        </header>
        <p class="syllabus-status">${escapeHtml(subject.status)}</p>
        <div class="topic-list"></div>
      `;

      const list = section.querySelector(".topic-list");
      topics.forEach((topic) => {
        const label = document.createElement("label");
        label.className = `topic-row ${state.syllabusDone[topic.id] ? "done" : ""}`;
        label.innerHTML = `
          <input type="checkbox" ${state.syllabusDone[topic.id] ? "checked" : ""}>
          <span class="topic-number">${String(topic.order).padStart(2, "0")}</span>
          <span class="topic-copy"><strong>${escapeHtml(topic.title)}</strong><small>${escapeHtml(topic.details || "")}</small></span>
        `;
        const checkbox = label.querySelector("input");
        checkbox.addEventListener("change", () => {
          state.syllabusDone[topic.id] = checkbox.checked;
          saveState();
          render();
        });
        list.append(label);
      });

      elements.syllabusGrid.append(section);
    });

    elements.emptyState.hidden = activeView !== "syllabus" || visibleSubjects > 0;
  }

  function updateControls() {
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === activeView);
    });
    elements.filters.querySelectorAll("button[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === activeFilter);
    });
    elements.timelineView.hidden = activeView !== "timeline";
    elements.syllabusView.hidden = activeView !== "syllabus";
  }

  function nextOrderForDate(date, completed = false) {
    if (!date) return state.items.length * 10;
    const monday = startOfWeekISO(date);
    const orders = state.items
      .filter((item) => !item.deleted && item.date && startOfWeekISO(item.date) === monday && Boolean(item.done) === completed)
      .map((item) => finiteOrder(item.order));
    return (orders.length ? Math.max(...orders) : 0) + 10;
  }

  function openTaskDialog(itemId = null, defaults = {}) {
    const item = itemId ? state.items.find((candidate) => candidate.id === itemId) : null;
    elements.taskForm.reset();
    elements.taskId.value = item?.id || "";
    elements.taskDialogTitle.textContent = item ? "Editar bloque" : "Agregar bloque";
    elements.taskTitle.value = item?.title || defaults.title || "";
    elements.taskSubject.value = item?.subject || defaults.subject || "fuaa";
    elements.taskType.value = item?.type || defaults.type || "study";
    elements.taskDate.value = item?.date || defaults.date || "";
    elements.taskMinutes.value = item?.minutes ?? defaults.minutes ?? 60;
    elements.taskDetails.value = item?.details || defaults.details || "";
    elements.deleteButton.hidden = !item;
    elements.taskDialog.showModal();
    requestAnimationFrame(() => elements.taskTitle.focus());
  }

  function saveTaskFromForm() {
    const existingId = elements.taskId.value;
    const existing = state.items.find((item) => item.id === existingId);
    const date = elements.taskDate.value;
    const type = elements.taskType.value;
    const values = sanitizeItem({
      id: existingId || `manual-${Date.now()}`,
      date,
      subject: elements.taskSubject.value,
      type,
      title: elements.taskTitle.value.trim(),
      details: elements.taskDetails.value.trim(),
      minutes: elements.taskMinutes.value,
      fixed: false,
      source: existingId ? "Ajuste manual" : "Agregado manualmente",
      priority: IMPORTANT_TYPES.has(type) ? "critical" : DELIVERABLE_TYPES.has(type) ? "high" : "normal",
      important: existing?.important || false,
      order: existing && existing.date === date ? existing.order : nextOrderForDate(date, existing?.done || false)
    }, existingId || `manual-${Date.now()}`, nextOrderForDate(date));

    if (!values.title) return;

    if (existing) {
      Object.assign(existing, values, { edited: true });
    } else {
      state.items.push({ ...values, done: false, deleted: false, edited: true, manual: true });
    }

    saveState();
    elements.taskDialog.close();
    showToast(existing ? "Bloque actualizado" : "Bloque agregado");
    render();
  }

  function deleteCurrentTask() {
    const id = elements.taskId.value;
    const item = state.items.find((candidate) => candidate.id === id);
    if (!item) return;
    item.deleted = true;
    saveState();
    elements.taskDialog.close();
    showToast("Bloque eliminado");
    render();
  }

  function exportState() {
    const payload = {
      app: "Plan de estudio 2º semestre 2026",
      exportedAt: new Date().toISOString(),
      dataVersion: DATA.version,
      state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `plan-estudio-${todayISO()}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showToast("Plan exportado");
  }

  async function importState(file) {
    const text = await file.text();
    const parsed = JSON.parse(text);
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
    next.syllabusDone = imported.syllabusDone && typeof imported.syllabusDone === "object" ? imported.syllabusDone : {};

    state = next;
    saveState();
    render();
    showToast("Plan importado");
  }

  function resetState() {
    state = initialState();
    saveState();
    elements.resetDialog.close();
    render();
    showToast("Base restaurada");
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2400);
  }

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      if (activeView === "syllabus" && activeFilter === "deliverables") activeFilter = "all";
      render();
    });
  });

  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    if (activeFilter === "deliverables") activeView = "timeline";
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
