CRONOGRAMA · SEGUNDO SEMESTRE 2026

Abrir index.html en el navegador.

Esta versión no arma un plan de estudio ni agrega bloques sugeridos. Muestra el contenido publicado en los cronogramas y lo agrupa por semana.

Redes:
- Cada clase OpenFing asignada aparece como tarjeta independiente.
- La lectura o capítulo aparece en otra tarjeta.
- El práctico asignado aparece en otra tarjeta.
- También se conservan actividades del curso, monitoreos, defensas y fechas de obligatorios.

FuAA:
- Cada tema, video OpenFing y sección del libro aparece según su semana.
- Controles, discusiones, prácticos, cuestionarios y parciales aparecen como tarjetas independientes.

FBD:
- Se cargó el cronograma semanal oficial proporcionado.
- Los temas teóricos, cada video OpenFing y cada teórico-práctico aparecen en tarjetas independientes.
- El período conjunto de parciales de las semanas 8 y 9 se conserva como un único bloque, sin dividirlo artificialmente.
- La fecha escrita como 31/09 en el texto recibido se interpretó como 31/08, ya que septiembre no tiene día 31 y corresponde a la quinta semana del semestre.

IntroPLN:
- Se cargaron las 20 clases disponibles en OpenFing, una tarjeta por clase y en su orden original.
- No se asignaron a semanas porque todavía no hay cronograma publicado.

Interacción:
- Filtro por todas las materias, la semana actual, una materia o entregas/prácticos/laboratorios.
- Marcar como completado deja unos segundos para deshacer y luego mueve la tarjeta a Completadas.
- Marcar como importante resalta la tarjeta.
- Arrastrar reordena dentro de la misma semana.
- Las semanas se pueden abrir y cerrar con +/−. La actual, la siguiente y las anteriores con pendientes quedan abiertas por defecto.
- Completadas queda cerrada por defecto.
- Sin Google Drive, el estado se guarda solamente en localStorage.
- Al conectar Google Drive, cada cambio se sincroniza automáticamente después de una pausa breve en un archivo JSON privado por cuenta dentro de appDataFolder.
- Cada cuenta de Google mantiene su propio progreso y no puede leer ni modificar el de otra cuenta.
- Al desconectarse, la app vuelve al estado local anónimo y deja oculto el progreso de esa cuenta.

Pruebas:
  node tests/validate-data.mjs
  node tests/validate-ui.mjs


GOOGLE DRIVE
- Requiere configurar google-drive-config.js con un Client ID OAuth de aplicación web.
- Requiere publicar el sitio por HTTPS o abrirlo desde localhost; Google no admite OAuth desde file://.
- La aplicación solicita únicamente el permiso drive.appdata.
- Los tokens se mantienen en memoria. Al recargar la página hay que volver a pulsar Conectar Drive.
- La sincronización combina cambios por actividad usando la fecha de modificación de cada tarjeta.
- Sincronizar ahora y Desconectar están dentro del menú pequeño de Google Drive en la barra superior.

Ver CONFIGURAR_GOOGLE_DRIVE.txt para preparar Google Cloud.

Cambios v11:
- Se eliminaron las tarjetas de clase de Redes que repetían prácticos o repasos ya representados.
- Se retiraron discusiones, consultas, feriados, avisos sin clase y presentaciones administrativas.
- Se mantienen temas, OpenFing, lecturas, prácticos, controles, entregas, monitoreos, defensas y parciales.
