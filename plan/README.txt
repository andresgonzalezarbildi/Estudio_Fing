PLAN DE ESTUDIO - SEGUNDO SEMESTRE 2026

Abrir index.html directamente o publicar la carpeta en Netlify.
No requiere npm ni compilación.

Archivos principales
- data.js: materias, temarios, cronogramas y bloques sugeridos.
- app.js: filtros, progreso, edición, importación/exportación y LocalStorage.
- style.css: interfaz responsive.

Contenido inicial
- FuAA: cronograma completo, 20 temas, videos OpenFing y secciones del libro.
- Redes: cronograma semanal, clases, monitoreos/defensas y entregas de Ob1/Ob2.
- FBD: 21 clases OpenFing sin fechas oficiales.
- IntroPLN: estructura pendiente para completar cuando se publique el cronograma.

Datos locales
El progreso y los cambios se guardan en LocalStorage con la clave:
semester_study_plan_2026_v1

Prueba de consistencia
node tests/validate-data.mjs
