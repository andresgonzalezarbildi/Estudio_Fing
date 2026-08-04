(() => {
  "use strict";

  const DATA = window.PLAN_DATA;
  if (!DATA) throw new Error("No se pudo cargar data.js");

  const STORAGE_KEY = "semester_study_plan_2026_v1";
  const IMPORTANT_TYPES = new Set(["control", "partial", "deadline", "defense"]);
  const INFORMATIONAL_TYPES = new Set(["holiday", "no-class", "partial-window", "assignment-published"]);

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

  let activeFilter = "upcoming";
  let activeView = "timeline";
  let state = loadState();
  let toastTimer = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function seedItems() {
    return DATA.items.map((item) => ({
      ...clone(item),
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
        deleted: Boolean(previous.deleted)
      };

      if (previous.edited) {
        Object.assign(merged, sanitizeItem(previous, item.id), {
          manual: false,
          edited: true
        });
      }

      return merged;
    });

    const manualItems = saved.items
      .filter((item) => item.manual && item.id)
      .map((item) => ({
        ...sanitizeItem(item, item.id),
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

  function sanitizeItem(item, fallbackId) {
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
      priority: ["normal", "high", "critical"].includes(item.priority) ? item.priority : "normal"
    };
  }

  function saveState(nextState = state) {
    nextState.savedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
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

    const today = todayISO();
    const weekStart = startOfWeekISO(today);
    const weekEnd = endOfWeekISO(today);

    if (activeFilter === "upcoming") return item.date >= today;
    if (activeFilter === "week") return item.date >= weekStart && item.date <= weekEnd;
    if (activeFilter === "pending") return !item.done && !INFORMATIONAL_TYPES.has(item.type);
    if (activeFilter === "all") return true;
    return item.subject === activeFilter;
  }

  function visibleItems() {
    const query = elements.searchInput.value.trim().toLocaleLowerCase("es");
    return state.items
      .filter(itemMatchesFilter)
      .filter((item) => itemMatchesSearch(item, query))
      .sort((a, b) => a.date.localeCompare(b.date) || a.subject.localeCompare(b.subject) || a.id.localeCompare(b.id));
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
      const next = subjectItems
        .filter((item) => item.date && item.date >= today && !INFORMATIONAL_TYPES.has(item.type))
        .sort((a, b) => a.date.localeCompare(b.date))[0];
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
    const weekItems = items.filter((item) => item.date >= weekStart && item.date <= weekEnd);
    const nextImportant = state.items
      .filter((item) => !item.deleted && item.date >= today && IMPORTANT_TYPES.has(item.type))
      .sort((a, b) => a.date.localeCompare(b.date))[0];

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
    elements.timeline.replaceChildren();

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
      const done = weekItems.filter((item) => item.done).length;

      section.innerHTML = `
        <header class="week-heading">
          <div><p>${escapeHtml(weekLabel(monday))}</p><h2>${done}/${weekItems.length} completados</h2></div>
          <span>${total ? formatDuration(total) : "Fechas y eventos"}</span>
        </header>
        <div class="week-items"></div>
      `;

      const container = section.querySelector(".week-items");
      weekItems.forEach((item) => container.append(createItemCard(item)));
      elements.timeline.append(section);
    }

    const hasTimeline = items.length > 0;
    elements.emptyState.hidden = hasTimeline || activeView !== "timeline";
  }

  function createItemCard(item) {
    const subject = DATA.subjects[item.subject];
    const article = document.createElement("article");
    article.className = `task-card ${item.done ? "done" : ""} priority-${item.priority}`;
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
      <button class="task-edit" type="button" aria-label="Editar ${escapeHtml(item.title)}">Editar</button>
    `;

    const checkbox = article.querySelector("input[type=checkbox]");
    if (!checkDisabled) {
      checkbox.addEventListener("change", () => {
        item.done = checkbox.checked;
        saveState();
        render();
      });
    }

    article.querySelector(".task-edit").addEventListener("click", () => openTaskDialog(item.id));
    return article;
  }

  function renderUndated() {
    const query = elements.searchInput.value.trim().toLocaleLowerCase("es");
    const entries = DATA.undated.filter((entry) => {
      if (activeFilter !== "all" && activeFilter !== "upcoming" && activeFilter !== "pending" && activeFilter !== "week" && activeFilter !== entry.subject) return false;
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
      if (!["all", "upcoming", "pending", "week", key].includes(activeFilter)) return;
      if (["fuaa", "redes", "fbd", "pln"].includes(activeFilter) && activeFilter !== key) return;

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
    const values = sanitizeItem({
      id: existingId || `manual-${Date.now()}`,
      date: elements.taskDate.value,
      subject: elements.taskSubject.value,
      type: elements.taskType.value,
      title: elements.taskTitle.value.trim(),
      details: elements.taskDetails.value.trim(),
      minutes: elements.taskMinutes.value,
      fixed: false,
      source: existingId ? "Ajuste manual" : "Agregado manualmente",
      priority: ["control", "partial", "deadline", "defense"].includes(elements.taskType.value) ? "critical" : "normal"
    }, existingId || `manual-${Date.now()}`);

    if (!values.title) return;

    const existing = state.items.find((item) => item.id === existingId);
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
        ...(previous.edited ? sanitizeItem(previous, item.id) : {}),
        done: Boolean(previous.done),
        deleted: Boolean(previous.deleted),
        edited: Boolean(previous.edited),
        manual: false
      };
    });
    next.items.push(...imported.items
      .filter((item) => item.manual && item.id)
      .map((item) => ({ ...sanitizeItem(item, item.id), done: Boolean(item.done), deleted: Boolean(item.deleted), edited: true, manual: true })));
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
      render();
    });
  });

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

  render();
})();
