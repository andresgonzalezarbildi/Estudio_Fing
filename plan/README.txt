CRONOGRAMA · PARCIALES FBD + INTROPLN · v21

Foco actual:
- FBD: parcial lunes 28/09/2026. Prioridad principal hasta rendir.
- IntroPLN: parcial martes 29/09/2026. Carga secundaria hasta el lunes; después de FBD pasa a prioridad total.
- Plan diario con fecha concreta del 24/09 al 29/09.
- FBD: MER, modelo relacional, álgebra, cálculo, SQL, dependencias funcionales y normalización.
- IntroPLN: Introducción, Gramática, capítulo 2, Sintaxis, Semántica y prácticos P1–P3.
- Los prácticos de FBD usados para esta etapa son P1–P6 y P8. P7/P9/P10 no se incorporan al plan porque no corresponden al alcance indicado para este parcial.

Vista de foco:
- Los pendientes oficiales viejos o futuros que no aportan a estos dos parciales quedan fuera de la vista de pendientes.
- NO se borran del archivo de datos: se preservan sus IDs y pueden conservar el estado sincronizado.
- Los elementos ya completados siguen apareciendo en Completadas.
- Los elementos manuales siempre se conservan y se muestran aunque sean anteriores o pertenezcan a otra materia.
- Los IDs de las tarjetas diarias ya existentes se reutilizan para mantener checks/progreso.
- El entregable viejo de FBD deja de aparecer como pendiente por la vista de foco.

IntroPLN:
- No se agregan tarjetas OpenFing para esta preparación.
- Se usan las clases/material presencial para Introducción, Gramática y Semántica.
- Libro: capítulo 2 para análisis léxico/preprocesamiento/DME.
- Sintaxis: capítulos 18 y 19 de la edición enero 2025, o 19 y 20 de la edición agosto 2026.
- Prácticos en Drive: P1 Gramática, P2 ER/Tokenización/Morfología/DME, P3 Sintaxis.

FBD:
- Prácticos en Drive consultados para armar el plan:
  P1 MER; P2 Álgebra; P3 Cálculo; P4 SQL; P5 Dependencias Funcionales;
  P6 Diseño Relacional/Normalización; P8 pasaje MER→Modelo Relacional.
- Se priorizan los ejercicios marcados como imprescindibles cuando el práctico los identifica.

Google Drive:
- Se conserva sin cambios la lógica de sincronización existente.
- El estado canónico sigue en appDataFolder de Google Drive.
- Authorization Code Flow + Netlify Functions, cookie HttpOnly, refresh token del lado servidor.
- Cada cambio local se sincroniza tras una pausa breve y se consulta Drive periódicamente.
- Las escrituras siguen usando ETag + reintento/mezcla para evitar pisar cambios de otras PCs.

Pruebas:
  node tests/validate-data.mjs
  node tests/validate-ui.mjs
