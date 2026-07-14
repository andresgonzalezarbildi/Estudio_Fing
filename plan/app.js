const DEFAULT_DAYS = [{"date":"2026-07-12","tasks":[{"id":"arqui:rep_c2_flags","subject":"arqui","title":"Complemento a 2 y banderas","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-12","href":"/arqui/","details":"Operar en complemento a 2 y justificar las banderas obtenidas."},{"id":"arqui:rep_ieee","subject":"arqui","title":"Normalizar y codificar IEEE 754","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-12","href":"/arqui/","details":"Normalizar el valor y completar signo, exponente y mantisa."},{"id":"arqui:comb_design","subject":"arqui","title":"Diseño con MUX y decodificador","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-12","href":"/arqui/","details":"Obtener la función e implementarla con MUX o decodificador."},{"id":"arqui:bool_kmap","subject":"arqui","title":"Mapa de Karnaugh completo","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-12","href":"/arqui/","details":"Agrupar unos, minimizar la función y verificar la expresión final."}]},{"date":"2026-07-13","tasks":[{"id":"arqui:num_bin_hex","subject":"arqui","title":"Practicar binario ↔ hexadecimal","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-13","href":"/arqui/","details":"Convertir valores en ambos sentidos y comprobar el resultado."},{"id":"arqui:intro_model","subject":"arqui","title":"Repasar el modelo de computador","minutes":35,"kind":"repaso","sourceDate":"2026-07-13","href":"/arqui/","details":"Ubicar CPU, memoria y E/S, y explicar cómo se conectan."},{"id":"arqui:codes_hamming","subject":"arqui","title":"Resolver un ejercicio de Hamming","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-13","href":"/arqui/","details":"Calcular bits de paridad, detectar el error y corregirlo."},{"id":"so:plan_day_1","subject":"so","title":"Diagnóstico y mapa general","minutes":90,"kind":"tema","sourceDate":"2026-07-13","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-14","tasks":[{"id":"arqui:x86_stack","subject":"arqui","title":"Dibujar un frame de stack con BP","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-13","href":"/arqui/","details":"Dibujar el stack y marcar parámetros, retorno, BP y variables locales."},{"id":"arqui:x86_segments","subject":"arqui","title":"Segmentación y direccionamiento 8086","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-14","href":"/arqui/","details":"Calcular direcciones físicas e identificar segmentos implícitos."},{"id":"arqui:x86_compile","subject":"arqui","title":"Traducir control de alto nivel a 8086","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-14","href":"/arqui/","details":"Pasar condiciones y bucles a saltos y comparaciones en 8086."},{"id":"so:plan_day_2","subject":"so","title":"Procesos, fork y threads","minutes":120,"kind":"tema","sourceDate":"2026-07-14","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-15","tasks":[{"id":"arqui:x86_stack_cost","subject":"arqui","title":"Calcular consumo máximo de stack","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-14","href":"/arqui/","details":"Calcular bytes por nivel y multiplicarlos por la profundidad máxima."},{"id":"arqui:x86_recursion","subject":"arqui","title":"Programar una función recursiva","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-15","href":"/arqui/","details":"Definir caso base, llamada recursiva y preservación del contexto."},{"id":"arqui:x86_graphs","subject":"arqui","title":"Recorrer árbol o grafo usando stack","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-15","href":"/arqui/","details":"Representar el recorrido y controlar el uso del stack en cada llamada."}]},{"date":"2026-07-16","tasks":[{"id":"arqui:mem_function","subject":"arqui","title":"Definir entradas, salidas y dirección","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-15","href":"/arqui/","details":"Identificar entradas, salidas y la dirección correspondiente a cada dato."},{"id":"arqui:mem_org","subject":"arqui","title":"Organización y arreglo de ROM","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-16","href":"/arqui/","details":"Determinar capacidad, líneas de dirección y conexión entre chips."},{"id":"arqui:mem_load","subject":"arqui","title":"Programar una carga de ROM","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-16","href":"/arqui/","details":"Escribir el recorrido de carga y controlar direcciones, datos y banderas."},{"id":"so:plan_day_3","subject":"so","title":"Planificación básica","minutes":120,"kind":"tema","sourceDate":"2026-07-15","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-17","tasks":[{"id":"arqui:io_programmed","subject":"arqui","title":"E/S programada, puertos y máscaras","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-17","href":"/arqui/","details":"Leer o escribir puertos aplicando las máscaras necesarias."},{"id":"arqui:io_handler","subject":"arqui","title":"Crear una rutina de interrupción","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-16","href":"/arqui/","details":"Separar evento, estado y acción dentro de la rutina de servicio."},{"id":"arqui:io_context","subject":"arqui","title":"Preservar contexto y volver con IRET","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-17","href":"/arqui/","details":"Guardar los registros usados y restaurarlos antes de ejecutar IRET."},{"id":"so:plan_day_4","subject":"so","title":"Planificación avanzada","minutes":100,"kind":"tema","sourceDate":"2026-07-16","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-18","tasks":[{"id":"so:plan_day_5","subject":"so","title":"Semáforos y precedencias","minutes":130,"kind":"tema","sourceDate":"2026-07-17","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."},{"id":"so:plan_day_6","subject":"so","title":"Monitores","minutes":120,"kind":"tema","sourceDate":"2026-07-18","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-19","tasks":[{"id":"arqui:io_vector","subject":"arqui","title":"Instalar el vector de interrupción","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-17","href":"/arqui/","details":"Calcular segmento y offset e instalar correctamente el vector."},{"id":"arqui:io_timer","subject":"arqui","title":"Resolver timers, ticks y segundos","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-18","href":"/arqui/","details":"Relacionar frecuencia, ticks y tiempo, y actualizar el contador."},{"id":"arqui:io_system","subject":"arqui","title":"Sistema completo con varias interrupciones","minutes":75,"kind":"desafio","sourceDate":"2026-07-18","href":"/arqui/","details":"Integrar vectores, rutinas, estado compartido y programa principal."},{"id":"arqui:fsm_design","subject":"arqui","title":"Diseñar una máquina de estados","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-18","href":"/arqui/","details":"Definir estados, tabla, ecuaciones y circuito final."}]},{"date":"2026-07-20","tasks":[{"id":"arqui:seq_ff","subject":"arqui","title":"Flip-flops, excitación y contadores","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-19","href":"/arqui/","details":"Completar excitaciones y diseñar el contador o secuencial pedido."},{"id":"arqui:cache_fields","subject":"arqui","title":"Calcular tag, conjunto y offset","minutes":50,"kind":"procedimiento","sourceDate":"2026-07-19","href":"/arqui/","details":"Separar la dirección en tag, conjunto y offset."},{"id":"arqui:cache_trace","subject":"arqui","title":"Simular hits y misses de una traza","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-19","href":"/arqui/","details":"Recorrer la traza y registrar hits, misses y reemplazos."},{"id":"arqui:mixed_exam_1","subject":"arqui","title":"Resolver dos ejercicios mezclados de examen","minutes":75,"kind":"practica","sourceDate":"2026-07-21","href":"/arqui/","details":"Resolver sin apuntes y anotar los errores que se repiten."},{"id":"arqui:simulation_1","subject":"arqui","title":"Simulacro completo 1","minutes":120,"kind":"simulacro","sourceDate":"2026-07-21","href":"/arqui/","details":"Resolver un examen completo con tiempo y corrección posterior."}]},{"date":"2026-07-21","tasks":[{"id":"arqui:cpu_cycle","subject":"arqui","title":"Ciclo de instrucción y señales de control","minutes":35,"kind":"repaso","sourceDate":"2026-07-19","href":"/arqui/","details":"Seguir fetch, decodificación y ejecución indicando señales de control."},{"id":"arqui:mlg_format","subject":"arqui","title":"Formato y largo de instrucción","minutes":60,"kind":"ejercicio","sourceDate":"2026-07-20","href":"/arqui/","details":"Calcular campos, cantidad de códigos y largo de instrucción."},{"id":"arqui:pipeline","subject":"arqui","title":"Pipeline, hazards y stalls","minutes":35,"kind":"repaso","sourceDate":"2026-07-20","href":"/arqui/","details":"Detectar hazards y decidir forwarding, stalls o predicción."},{"id":"arqui:superscalar","subject":"arqui","title":"Superescalares, renaming y commit","minutes":35,"kind":"repaso","sourceDate":"2026-07-20","href":"/arqui/","details":"Distinguir dependencias, renaming, ejecución y commit en orden."},{"id":"arqui:mixed_exam_2","subject":"arqui","title":"Corregir errores y repetir un ejercicio","minutes":75,"kind":"practica","sourceDate":"2026-07-20","href":"/arqui/","details":"Corregir el procedimiento y repetir el ejercicio desde cero."},{"id":"so:plan_day_7","subject":"so","title":"Mailboxes y Ada","minutes":140,"kind":"tema","sourceDate":"2026-07-19","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-22","tasks":[{"id":"arqui:simulation_2","subject":"arqui","title":"Simulacro final y repaso de dudas","minutes":120,"kind":"simulacro","sourceDate":"2026-07-22","href":"/arqui/","details":"Hacer el último simulacro y repasar únicamente los errores detectados."},{"id":"so:plan_day_8","subject":"so","title":"Deadlock y repaso de concurrencia","minutes":100,"kind":"tema","sourceDate":"2026-07-20","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-23","tasks":[{"id":"arqui:exam","subject":"arqui","title":"Examen de Arquitectura de Computadoras","minutes":0,"kind":"examen","sourceDate":"2026-07-23","href":"/arqui/","details":"Repaso breve solamente. No incorporar temas nuevos."}]},{"date":"2026-07-24","tasks":[{"id":"so:plan_day_9","subject":"so","title":"Memoria: formatos y tablas","minutes":120,"kind":"tema","sourceDate":"2026-07-21","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."},{"id":"so:plan_day_10","subject":"so","title":"Memoria: TLB y fallos","minutes":120,"kind":"tema","sourceDate":"2026-07-22","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-25","tasks":[{"id":"so:plan_day_11","subject":"so","title":"Reemplazo y thrashing","minutes":120,"kind":"tema","sourceDate":"2026-07-23","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."},{"id":"so:plan_day_12","subject":"so","title":"Sistemas de archivos: cotas","minutes":120,"kind":"tema","sourceDate":"2026-07-24","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-26","tasks":[{"id":"so:plan_day_13","subject":"so","title":"Sistemas de archivos: FAT y caminos","minutes":120,"kind":"tema","sourceDate":"2026-07-25","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."},{"id":"so:plan_day_14","subject":"so","title":"Operaciones y consistencia","minutes":120,"kind":"tema","sourceDate":"2026-07-26","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-27","tasks":[{"id":"so:plan_day_15","subject":"so","title":"Disco, RAID y E/S","minutes":180,"kind":"tema","sourceDate":"2026-07-27","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-28","tasks":[{"id":"so:plan_day_16","subject":"so","title":"Seguridad, virtualización y simulacro","minutes":180,"kind":"tema","sourceDate":"2026-07-28","href":"/so/","details":"Repaso activo con tarjetas. · Resolver ejercicios sin mirar la solución. · Corregir con solución oficial y registrar errores."}]},{"date":"2026-07-29","tasks":[{"id":"so:exam","subject":"so","title":"Examen de Sistemas Operativos","minutes":0,"kind":"examen","sourceDate":"2026-07-29","href":"/so/","details":"Repaso breve solamente. No incorporar temas nuevos."}]}];
const EMBEDDED_SOURCES = {"arquiModules":[{"id":"arqui:intro_model","title":"Repasar el modelo de computador","topic":"tema_01_introduccion","nodes":["intro_modelo","intro_organizacion"],"phase":1,"weight":1,"kind":"repaso","sourceId":"intro_model","minutes":35,"href":"/arqui/"},{"id":"arqui:num_bin_hex","title":"Practicar binario ↔ hexadecimal","topic":"tema_02_sistemas_numeracion","nodes":["num_bases","num_dec_bin","num_bin_hex","num_hex_bin"],"phase":1,"weight":1,"kind":"procedimiento","sourceId":"num_bin_hex","minutes":50,"href":"/arqui/"},{"id":"arqui:codes_hamming","title":"Resolver un ejercicio de Hamming","topic":"tema_03_codigos_errores","nodes":["err_distancia","err_hamming","err_posiciones_hamming"],"phase":1,"weight":1.1,"kind":"ejercicio","sourceId":"codes_hamming","minutes":60,"href":"/arqui/"},{"id":"arqui:rep_c2_flags","title":"Complemento a 2 y banderas","topic":"tema_04_representacion_datos","nodes":["rep_c2","rep_extender_signo","rep_banderas","rep_overflow_signos"],"phase":1,"weight":1.2,"kind":"procedimiento","sourceId":"rep_c2_flags","minutes":50,"href":"/arqui/"},{"id":"arqui:rep_ieee","title":"Normalizar y codificar IEEE 754","topic":"tema_04_representacion_datos","nodes":["rep_ieee","rep_ieee_normalizar","rep_ieee_campos"],"phase":1,"weight":1.2,"kind":"ejercicio","sourceId":"rep_ieee","minutes":60,"href":"/arqui/"},{"id":"arqui:bool_kmap","title":"Mapa de Karnaugh completo","topic":"tema_05_algebra_boole","nodes":["bool_karnaugh","bool_karnaugh_grupos","bool_karnaugh_expresion"],"phase":1,"weight":1.1,"kind":"ejercicio","sourceId":"bool_kmap","minutes":60,"href":"/arqui/"},{"id":"arqui:comb_design","title":"Diseño con MUX y decodificador","topic":"tema_06_circuitos_combinatorios","nodes":["comb_especificar","comb_mux","comb_dec"],"phase":1,"weight":1.1,"kind":"ejercicio","sourceId":"comb_design","minutes":60,"href":"/arqui/"},{"id":"arqui:x86_segments","title":"Segmentación y direccionamiento 8086","topic":"tema_12_x86","nodes":["x86_segmentos","x86_direccionamiento"],"phase":2,"weight":1.2,"kind":"procedimiento","sourceId":"x86_segments","minutes":50,"href":"/arqui/"},{"id":"arqui:x86_stack","title":"Dibujar un frame de stack con BP","topic":"tema_12_x86","nodes":["x86_stack","x86_marco_stack","x86_offsets_param","x86_retorno_stack"],"phase":2,"weight":1.5,"kind":"ejercicio","sourceId":"x86_stack","minutes":60,"href":"/arqui/"},{"id":"arqui:x86_compile","title":"Traducir control de alto nivel a 8086","topic":"tema_12_x86","nodes":["x86_compilar"],"phase":2,"weight":1.2,"kind":"ejercicio","sourceId":"x86_compile","minutes":60,"href":"/arqui/"},{"id":"arqui:x86_recursion","title":"Programar una función recursiva","topic":"tema_12_x86","nodes":["x86_recursion","x86_caso_base","x86_llamada_rec"],"phase":3,"weight":1.5,"kind":"ejercicio","sourceId":"x86_recursion","minutes":60,"href":"/arqui/"},{"id":"arqui:x86_graphs","title":"Recorrer árbol o grafo usando stack","topic":"tema_12_x86","nodes":["x86_arboles","x86_recorrer_hijos"],"phase":3,"weight":1.5,"kind":"ejercicio","sourceId":"x86_graphs","minutes":60,"href":"/arqui/"},{"id":"arqui:x86_stack_cost","title":"Calcular consumo máximo de stack","topic":"tema_12_x86","nodes":["x86_consumo","x86_stack_por_nivel","x86_stack_total"],"phase":3,"weight":1.4,"kind":"procedimiento","sourceId":"x86_stack_cost","minutes":50,"href":"/arqui/"},{"id":"arqui:mem_org","title":"Organización y arreglo de ROM","topic":"tema_07_memorias","nodes":["mem_capacidad","mem_bits_direccion","mem_arreglos","mem_cs_oe"],"phase":4,"weight":1.3,"kind":"ejercicio","sourceId":"mem_org","minutes":60,"href":"/arqui/"},{"id":"arqui:mem_function","title":"Definir entradas, salidas y dirección","topic":"tema_07_memorias","nodes":["mem_funcion","mem_entradas_salidas","mem_direccion_concreta"],"phase":4,"weight":1.2,"kind":"procedimiento","sourceId":"mem_function","minutes":50,"href":"/arqui/"},{"id":"arqui:mem_load","title":"Programar una carga de ROM","topic":"tema_07_memorias","nodes":["mem_carga","mem_carga_bucle","mem_carga_flags"],"phase":4,"weight":1.5,"kind":"ejercicio","sourceId":"mem_load","minutes":60,"href":"/arqui/"},{"id":"arqui:io_programmed","title":"E/S programada, puertos y máscaras","topic":"tema_13_io_interrupciones","nodes":["io_programada","io_mascara_puerto"],"phase":5,"weight":1.1,"kind":"procedimiento","sourceId":"io_programmed","minutes":50,"href":"/arqui/"},{"id":"arqui:io_handler","title":"Crear una rutina de interrupción","topic":"tema_13_io_interrupciones","nodes":["io_rutina","io_evento_estado_accion"],"phase":5,"weight":1.5,"kind":"ejercicio","sourceId":"io_handler","minutes":60,"href":"/arqui/"},{"id":"arqui:io_context","title":"Preservar contexto y volver con IRET","topic":"tema_13_io_interrupciones","nodes":["io_contexto","io_push_pop"],"phase":5,"weight":1.2,"kind":"procedimiento","sourceId":"io_context","minutes":50,"href":"/arqui/"},{"id":"arqui:io_vector","title":"Instalar el vector de interrupción","topic":"tema_13_io_interrupciones","nodes":["io_vector","io_vector_direccion","io_segmento_offset"],"phase":5,"weight":1.4,"kind":"ejercicio","sourceId":"io_vector","minutes":60,"href":"/arqui/"},{"id":"arqui:io_timer","title":"Resolver timers, ticks y segundos","topic":"tema_13_io_interrupciones","nodes":["io_timers","io_ticks_segundos"],"phase":5,"weight":1.3,"kind":"ejercicio","sourceId":"io_timer","minutes":60,"href":"/arqui/"},{"id":"arqui:io_system","title":"Sistema completo con varias interrupciones","topic":"tema_13_io_interrupciones","nodes":["io_estados","io_estado_compartido","io_sistema","io_sistema_completo"],"phase":5,"weight":1.7,"kind":"desafio","sourceId":"io_system","minutes":75,"href":"/arqui/"},{"id":"arqui:cache_fields","title":"Calcular tag, conjunto y offset","topic":"tema_14_jerarquia_memoria","nodes":["cache_campos","cache_offset_bits","cache_sets_bits","cache_tag_bits"],"phase":6,"weight":1.2,"kind":"procedimiento","sourceId":"cache_fields","minutes":50,"href":"/arqui/"},{"id":"arqui:cache_trace","title":"Simular hits y misses de una traza","topic":"tema_14_jerarquia_memoria","nodes":["cache_mapeo","cache_simular","cache_traza","cache_tasa","cache_localidad"],"phase":6,"weight":1.5,"kind":"ejercicio","sourceId":"cache_trace","minutes":60,"href":"/arqui/"},{"id":"arqui:fsm_design","title":"Diseñar una máquina de estados","topic":"tema_08_maquinas_estado","nodes":["fsm_estados","fsm_diagrama","fsm_tabla_completa","fsm_ecuaciones","fsm_circuito_final"],"phase":6,"weight":1.5,"kind":"ejercicio","sourceId":"fsm_design","minutes":60,"href":"/arqui/"},{"id":"arqui:seq_ff","title":"Flip-flops, excitación y contadores","topic":"tema_09_circuitos_secuenciales","nodes":["seq_ff","seq_tabla_excitacion","seq_contadores","seq_modulo"],"phase":6,"weight":1.2,"kind":"ejercicio","sourceId":"seq_ff","minutes":60,"href":"/arqui/"},{"id":"arqui:mlg_format","title":"Formato y largo de instrucción","topic":"tema_10_maquina_logica","nodes":["mlg_formato","mlg_campos","mlg_largo_instruccion"],"phase":6,"weight":1.1,"kind":"ejercicio","sourceId":"mlg_format","minutes":60,"href":"/arqui/"},{"id":"arqui:cpu_cycle","title":"Ciclo de instrucción y señales de control","topic":"tema_11_cpu","nodes":["cpu_ciclo","cpu_fetch","cpu_control","cpu_senales"],"phase":6,"weight":1.2,"kind":"repaso","sourceId":"cpu_cycle","minutes":35,"href":"/arqui/"},{"id":"arqui:pipeline","title":"Pipeline, hazards y stalls","topic":"tema_15_pipeline","nodes":["pipe_etapas","pipe_datos","pipe_forwarding","pipe_insertar_stall","pipe_prediccion"],"phase":7,"weight":1.3,"kind":"repaso","sourceId":"pipeline","minutes":35,"href":"/arqui/"},{"id":"arqui:superscalar","title":"Superescalares, renaming y commit","topic":"tema_16_superescalares","nodes":["super_ilp","super_war_waw","super_rename","super_commit"],"phase":7,"weight":1.1,"kind":"repaso","sourceId":"superscalar","minutes":35,"href":"/arqui/"},{"id":"arqui:mixed_exam_1","title":"Resolver dos ejercicios mezclados de examen","topic":"","nodes":[],"phase":8,"weight":1.6,"kind":"practica","sourceId":"mixed_exam_1","minutes":75,"href":"/arqui/"},{"id":"arqui:mixed_exam_2","title":"Corregir errores y repetir un ejercicio","topic":"","nodes":[],"phase":8,"weight":1.4,"kind":"practica","sourceId":"mixed_exam_2","minutes":75,"href":"/arqui/"},{"id":"arqui:simulation_1","title":"Simulacro completo 1","topic":"","nodes":[],"phase":9,"weight":2,"kind":"simulacro","sourceId":"simulation_1","minutes":120,"href":"/arqui/"},{"id":"arqui:simulation_2","title":"Simulacro final y repaso de dudas","topic":"","nodes":[],"phase":9,"weight":2,"kind":"simulacro","sourceId":"simulation_2","minutes":120,"href":"/arqui/"}],"arquiDays":[{"date":"2026-07-12","tasks":[{"id":"arqui:rep_c2_flags","title":"Complemento a 2 y banderas","topic":"tema_04_representacion_datos","nodes":["rep_c2","rep_extender_signo","rep_banderas","rep_overflow_signos"],"phase":1,"weight":1.2,"kind":"procedimiento","sourceId":"rep_c2_flags","subject":"arqui"},{"id":"arqui:rep_ieee","title":"Normalizar y codificar IEEE 754","topic":"tema_04_representacion_datos","nodes":["rep_ieee","rep_ieee_normalizar","rep_ieee_campos"],"phase":1,"weight":1.2,"kind":"ejercicio","sourceId":"rep_ieee","subject":"arqui"},{"id":"arqui:comb_design","title":"Diseño con MUX y decodificador","topic":"tema_06_circuitos_combinatorios","nodes":["comb_especificar","comb_mux","comb_dec"],"phase":1,"weight":1.1,"kind":"ejercicio","sourceId":"comb_design","subject":"arqui"},{"id":"arqui:bool_kmap","title":"Mapa de Karnaugh completo","topic":"tema_05_algebra_boole","nodes":["bool_karnaugh","bool_karnaugh_grupos","bool_karnaugh_expresion"],"phase":1,"weight":1.1,"kind":"ejercicio","sourceId":"bool_kmap","subject":"arqui"}]},{"date":"2026-07-13","tasks":[{"id":"arqui:num_bin_hex","title":"Practicar binario ↔ hexadecimal","topic":"tema_02_sistemas_numeracion","nodes":["num_bases","num_dec_bin","num_bin_hex","num_hex_bin"],"phase":1,"weight":1,"kind":"procedimiento","sourceId":"num_bin_hex","subject":"arqui"},{"id":"arqui:intro_model","title":"Repasar el modelo de computador","topic":"tema_01_introduccion","nodes":["intro_modelo","intro_organizacion"],"phase":1,"weight":1,"kind":"repaso","sourceId":"intro_model","subject":"arqui"},{"id":"arqui:codes_hamming","title":"Resolver un ejercicio de Hamming","topic":"tema_03_codigos_errores","nodes":["err_distancia","err_hamming","err_posiciones_hamming"],"phase":1,"weight":1.1,"kind":"ejercicio","sourceId":"codes_hamming","subject":"arqui"},{"id":"arqui:x86_stack","title":"Dibujar un frame de stack con BP","topic":"tema_12_x86","nodes":["x86_stack","x86_marco_stack","x86_offsets_param","x86_retorno_stack"],"phase":2,"weight":1.5,"kind":"ejercicio","sourceId":"x86_stack","subject":"arqui"}]},{"date":"2026-07-14","tasks":[{"id":"arqui:x86_segments","title":"Segmentación y direccionamiento 8086","topic":"tema_12_x86","nodes":["x86_segmentos","x86_direccionamiento"],"phase":2,"weight":1.2,"kind":"procedimiento","sourceId":"x86_segments","subject":"arqui"},{"id":"arqui:x86_compile","title":"Traducir control de alto nivel a 8086","topic":"tema_12_x86","nodes":["x86_compilar"],"phase":2,"weight":1.2,"kind":"ejercicio","sourceId":"x86_compile","subject":"arqui"},{"id":"arqui:x86_stack_cost","title":"Calcular consumo máximo de stack","topic":"tema_12_x86","nodes":["x86_consumo","x86_stack_por_nivel","x86_stack_total"],"phase":3,"weight":1.4,"kind":"procedimiento","sourceId":"x86_stack_cost","subject":"arqui"}]},{"date":"2026-07-15","tasks":[{"id":"arqui:x86_recursion","title":"Programar una función recursiva","topic":"tema_12_x86","nodes":["x86_recursion","x86_caso_base","x86_llamada_rec"],"phase":3,"weight":1.5,"kind":"ejercicio","sourceId":"x86_recursion","subject":"arqui"},{"id":"arqui:x86_graphs","title":"Recorrer árbol o grafo usando stack","topic":"tema_12_x86","nodes":["x86_arboles","x86_recorrer_hijos"],"phase":3,"weight":1.5,"kind":"ejercicio","sourceId":"x86_graphs","subject":"arqui"},{"id":"arqui:mem_function","title":"Definir entradas, salidas y dirección","topic":"tema_07_memorias","nodes":["mem_funcion","mem_entradas_salidas","mem_direccion_concreta"],"phase":4,"weight":1.2,"kind":"procedimiento","sourceId":"mem_function","subject":"arqui"}]},{"date":"2026-07-16","tasks":[{"id":"arqui:mem_org","title":"Organización y arreglo de ROM","topic":"tema_07_memorias","nodes":["mem_capacidad","mem_bits_direccion","mem_arreglos","mem_cs_oe"],"phase":4,"weight":1.3,"kind":"ejercicio","sourceId":"mem_org","subject":"arqui"},{"id":"arqui:mem_load","title":"Programar una carga de ROM","topic":"tema_07_memorias","nodes":["mem_carga","mem_carga_bucle","mem_carga_flags"],"phase":4,"weight":1.5,"kind":"ejercicio","sourceId":"mem_load","subject":"arqui"},{"id":"arqui:io_handler","title":"Crear una rutina de interrupción","topic":"tema_13_io_interrupciones","nodes":["io_rutina","io_evento_estado_accion"],"phase":5,"weight":1.5,"kind":"ejercicio","sourceId":"io_handler","subject":"arqui"}]},{"date":"2026-07-17","tasks":[{"id":"arqui:io_programmed","title":"E/S programada, puertos y máscaras","topic":"tema_13_io_interrupciones","nodes":["io_programada","io_mascara_puerto"],"phase":5,"weight":1.1,"kind":"procedimiento","sourceId":"io_programmed","subject":"arqui"},{"id":"arqui:io_vector","title":"Instalar el vector de interrupción","topic":"tema_13_io_interrupciones","nodes":["io_vector","io_vector_direccion","io_segmento_offset"],"phase":5,"weight":1.4,"kind":"ejercicio","sourceId":"io_vector","subject":"arqui"},{"id":"arqui:io_context","title":"Preservar contexto y volver con IRET","topic":"tema_13_io_interrupciones","nodes":["io_contexto","io_push_pop"],"phase":5,"weight":1.2,"kind":"procedimiento","sourceId":"io_context","subject":"arqui"}]},{"date":"2026-07-18","tasks":[{"id":"arqui:io_timer","title":"Resolver timers, ticks y segundos","topic":"tema_13_io_interrupciones","nodes":["io_timers","io_ticks_segundos"],"phase":5,"weight":1.3,"kind":"ejercicio","sourceId":"io_timer","subject":"arqui"},{"id":"arqui:io_system","title":"Sistema completo con varias interrupciones","topic":"tema_13_io_interrupciones","nodes":["io_estados","io_estado_compartido","io_sistema","io_sistema_completo"],"phase":5,"weight":1.7,"kind":"desafio","sourceId":"io_system","subject":"arqui"},{"id":"arqui:fsm_design","title":"Diseñar una máquina de estados","topic":"tema_08_maquinas_estado","nodes":["fsm_estados","fsm_diagrama","fsm_tabla_completa","fsm_ecuaciones","fsm_circuito_final"],"phase":6,"weight":1.5,"kind":"ejercicio","sourceId":"fsm_design","subject":"arqui"}]},{"date":"2026-07-19","tasks":[{"id":"arqui:seq_ff","title":"Flip-flops, excitación y contadores","topic":"tema_09_circuitos_secuenciales","nodes":["seq_ff","seq_tabla_excitacion","seq_contadores","seq_modulo"],"phase":6,"weight":1.2,"kind":"ejercicio","sourceId":"seq_ff","subject":"arqui"},{"id":"arqui:cache_fields","title":"Calcular tag, conjunto y offset","topic":"tema_14_jerarquia_memoria","nodes":["cache_campos","cache_offset_bits","cache_sets_bits","cache_tag_bits"],"phase":6,"weight":1.2,"kind":"procedimiento","sourceId":"cache_fields","subject":"arqui"},{"id":"arqui:cache_trace","title":"Simular hits y misses de una traza","topic":"tema_14_jerarquia_memoria","nodes":["cache_mapeo","cache_simular","cache_traza","cache_tasa","cache_localidad"],"phase":6,"weight":1.5,"kind":"ejercicio","sourceId":"cache_trace","subject":"arqui"},{"id":"arqui:cpu_cycle","title":"Ciclo de instrucción y señales de control","topic":"tema_11_cpu","nodes":["cpu_ciclo","cpu_fetch","cpu_control","cpu_senales"],"phase":6,"weight":1.2,"kind":"repaso","sourceId":"cpu_cycle","subject":"arqui"}]},{"date":"2026-07-20","tasks":[{"id":"arqui:mlg_format","title":"Formato y largo de instrucción","topic":"tema_10_maquina_logica","nodes":["mlg_formato","mlg_campos","mlg_largo_instruccion"],"phase":6,"weight":1.1,"kind":"ejercicio","sourceId":"mlg_format","subject":"arqui"},{"id":"arqui:pipeline","title":"Pipeline, hazards y stalls","topic":"tema_15_pipeline","nodes":["pipe_etapas","pipe_datos","pipe_forwarding","pipe_insertar_stall","pipe_prediccion"],"phase":7,"weight":1.3,"kind":"repaso","sourceId":"pipeline","subject":"arqui"},{"id":"arqui:superscalar","title":"Superescalares, renaming y commit","topic":"tema_16_superescalares","nodes":["super_ilp","super_war_waw","super_rename","super_commit"],"phase":7,"weight":1.1,"kind":"repaso","sourceId":"superscalar","subject":"arqui"},{"id":"arqui:mixed_exam_2","title":"Corregir errores y repetir un ejercicio","topic":"","nodes":[],"phase":8,"weight":1.4,"kind":"practica","sourceId":"mixed_exam_2","subject":"arqui"}]},{"date":"2026-07-21","tasks":[{"id":"arqui:mixed_exam_1","title":"Resolver dos ejercicios mezclados de examen","topic":"","nodes":[],"phase":8,"weight":1.6,"kind":"practica","sourceId":"mixed_exam_1","subject":"arqui"},{"id":"arqui:simulation_1","title":"Simulacro completo 1","topic":"","nodes":[],"phase":9,"weight":2,"kind":"simulacro","sourceId":"simulation_1","subject":"arqui"}]},{"date":"2026-07-22","tasks":[{"id":"arqui:simulation_2","title":"Simulacro final y repaso de dudas","topic":"","nodes":[],"phase":9,"weight":2,"kind":"simulacro","sourceId":"simulation_2","subject":"arqui"}]}],"soDays":[{"date":"2026-07-13","day_number":1,"focus":"Diagnóstico y mapa general","skill_ids":["skill_services","skill_kernel_arch","skill_system_call"],"recommended_exercise_ids":["ex_2026_05_eda9dfa39d","ex_2025_12_9a74251870","ex_2025_05_e336d2a082","ex_2022_05_bf113714e8","ex_2025_07_aba6ef00f7","ex_2025_07_9314beff04"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-14","day_number":2,"focus":"Procesos, fork y threads","skill_ids":["skill_process_states","skill_pcb_context","skill_fork_tree","skill_threads"],"recommended_exercise_ids":["ex_2026_02_52d3e8641e","ex_2026_05_eda9dfa39d","ex_2025_02_4d433bd917","ex_2025_05_e336d2a082","ex_2026_02_44c345a127","ex_2026_05_a09e9d7a73"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-15","day_number":3,"focus":"Planificación básica","skill_ids":["skill_schedule_timeline","skill_fcfs_sjf_rr","skill_metrics"],"recommended_exercise_ids":["ex_2026_02_52d3e8641e","ex_2026_02_44c345a127","ex_2026_05_1ca033078b","ex_2025_05_8b8d424e10","ex_2026_02_b66be7f045","ex_2026_05_eda9dfa39d"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-16","day_number":4,"focus":"Planificación avanzada","skill_ids":["skill_mlfq","skill_multiprocessor_sched"],"recommended_exercise_ids":["ex_2026_05_1ca033078b","ex_2025_07_aba6ef00f7","ex_2022_12_d27b54fb34","ex_2021_07_380fc302ad"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-17","day_number":5,"focus":"Semáforos y precedencias","skill_ids":["skill_precedence","skill_semaphores"],"recommended_exercise_ids":["ex_2026_02_44c345a127","ex_2026_05_eda9dfa39d","ex_2025_07_112d98f8ee","ex_2024_05_c179cc7d1d"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-18","day_number":6,"focus":"Monitores","skill_ids":["skill_monitors"],"recommended_exercise_ids":["ex_2026_02_52d3e8641e","ex_2026_02_44c345a127"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-19","day_number":7,"focus":"Mailboxes y Ada","skill_ids":["skill_mailboxes","skill_ada"],"recommended_exercise_ids":["ex_2026_02_44c345a127","ex_2025_07_112d98f8ee","ex_2026_02_52d3e8641e","ex_2026_02_b66be7f045"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-20","day_number":8,"focus":"Deadlock y repaso de concurrencia","skill_ids":["skill_deadlock","skill_semaphores","skill_monitors"],"recommended_exercise_ids":["ex_2026_02_52d3e8641e","ex_2026_02_44c345a127","ex_2025_07_112d98f8ee","ex_2024_05_c179cc7d1d","ex_2026_05_eda9dfa39d","ex_2026_05_a09e9d7a73"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-21","day_number":9,"focus":"Memoria: formatos y tablas","skill_ids":["skill_page_format","skill_multilevel_pt"],"recommended_exercise_ids":["ex_2026_02_52d3e8641e","ex_2026_02_44c345a127","ex_2026_05_a09e9d7a73","ex_2025_02_4d433bd917"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-22","day_number":10,"focus":"Memoria: TLB y fallos","skill_ids":["skill_mmu_tlb","skill_page_fault"],"recommended_exercise_ids":["ex_2026_02_52d3e8641e","ex_2026_05_eda9dfa39d","ex_2025_02_9030b1aa44","ex_2025_07_a0d6a2d33a"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-23","day_number":11,"focus":"Reemplazo y thrashing","skill_ids":["skill_replacement","skill_thrashing"],"recommended_exercise_ids":["ex_2026_02_52d3e8641e","ex_2025_02_9030b1aa44","ex_2020_08_fefa46e3e6","ex_2019_07_96782b89da"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-24","day_number":12,"focus":"Sistemas de archivos: cotas","skill_ids":["skill_fs_limits","skill_inode_traverse"],"recommended_exercise_ids":["ex_2026_02_b66be7f045","ex_2025_02_4d433bd917","ex_2025_07_5acbc86470","ex_2025_07_6b89c76b49"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-25","day_number":13,"focus":"Sistemas de archivos: FAT y caminos","skill_ids":["skill_fat_traverse","skill_path_resolution"],"recommended_exercise_ids":["ex_2026_02_b66be7f045","ex_2025_02_9030b1aa44","ex_2025_07_6b89c76b49","ex_2025_12_9a74251870"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-26","day_number":14,"focus":"Operaciones y consistencia","skill_ids":["skill_fs_operations","skill_hardlinks","skill_free_space"],"recommended_exercise_ids":["ex_2025_05_e336d2a082","ex_2025_07_6b89c76b49","ex_2024_02_f2c2685130","ex_2024_07_90a9507dcf","ex_2026_02_b66be7f045","ex_2024_12_1602290f36"],"estimated_minutes":150,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-27","day_number":15,"focus":"Disco, RAID y E/S","skill_ids":["skill_disk_sched","skill_raid","skill_io_methods","skill_io_services"],"recommended_exercise_ids":["ex_2025_02_9030b1aa44","ex_2024_02_98c2cc677d","ex_2025_02_4d433bd917","ex_2025_07_5acbc86470","ex_2026_05_eda9dfa39d","ex_2025_07_aba6ef00f7"],"estimated_minutes":180,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-28","day_number":16,"focus":"Seguridad, virtualización y simulacro","skill_ids":["skill_protection","skill_crypto_auth","skill_hypervisors","skill_binary_translation"],"recommended_exercise_ids":["ex_2026_05_eda9dfa39d","ex_2025_12_9a74251870","ex_2025_02_9030b1aa44","ex_2025_05_e336d2a082","ex_2025_07_aba6ef00f7","ex_2024_07_f9e8562c88"],"estimated_minutes":180,"tasks":["Repaso activo con tarjetas.","Resolver ejercicios sin mirar la solución.","Corregir con solución oficial y registrar errores."],"mastery_checkpoint":"Al menos 70 % de los incisos correctos y explicación oral del procedimiento."},{"date":"2026-07-29","day_number":17,"focus":"Examen","skill_ids":[],"recommended_exercise_ids":[],"estimated_minutes":30,"tasks":["Repaso breve de fórmulas, convenciones y errores frecuentes.","No incorporar temas nuevos."],"mastery_checkpoint":"Llegar con procedimientos y criterios de verificación automatizados."}]};

const STORAGE_KEY = "unified_study_plan_v1";
const ARQUI_STORAGE_KEY = "arqui_exam_dashboard_v3";
const SO_STORAGE_KEY = "studyDashboard_sistemas_operativos_v1";
const PLAN_START_DATE = "2026-07-12";
const PLAN_END_DATE = "2026-07-29";
const ARQUI_EXAM_DATE = "2026-07-23";
const SO_EXAM_DATE = "2026-07-29";
const DAILY_TARGET_MINUTES = 330;
const DAILY_SOFT_LIMIT_MINUTES = 360;
const DAILY_HARD_LIMIT_MINUTES = 390;
const DAILY_MAX_BLOCKS = 5;

const SUBJECTS = {
  arqui: {
    label: "Arquitectura",
    color: "#d8ff56",
    href: "/arqui/"
  },
  so: {
    label: "Sistemas Operativos",
    color: "#35ecff",
    href: "/so/"
  }
};

const ARQUI_TASK_SUMMARIES = {
  "arqui:intro_model": "Ubicar CPU, memoria y E/S, y explicar cómo se conectan.",
  "arqui:num_bin_hex": "Convertir valores en ambos sentidos y comprobar el resultado.",
  "arqui:codes_hamming": "Calcular bits de paridad, detectar el error y corregirlo.",
  "arqui:rep_c2_flags": "Operar en complemento a 2 y justificar las banderas obtenidas.",
  "arqui:rep_ieee": "Normalizar el valor y completar signo, exponente y mantisa.",
  "arqui:bool_kmap": "Agrupar unos, minimizar la función y verificar la expresión final.",
  "arqui:comb_design": "Obtener la función e implementarla con MUX o decodificador.",
  "arqui:x86_segments": "Calcular direcciones físicas e identificar segmentos implícitos.",
  "arqui:x86_stack": "Dibujar el stack y marcar parámetros, retorno, BP y variables locales.",
  "arqui:x86_compile": "Pasar condiciones y bucles a saltos y comparaciones en 8086.",
  "arqui:x86_recursion": "Definir caso base, llamada recursiva y preservación del contexto.",
  "arqui:x86_graphs": "Representar el recorrido y controlar el uso del stack en cada llamada.",
  "arqui:x86_stack_cost": "Calcular bytes por nivel y multiplicarlos por la profundidad máxima.",
  "arqui:mem_org": "Determinar capacidad, líneas de dirección y conexión entre chips.",
  "arqui:mem_function": "Identificar entradas, salidas y la dirección correspondiente a cada dato.",
  "arqui:mem_load": "Escribir el recorrido de carga y controlar direcciones, datos y banderas.",
  "arqui:io_programmed": "Leer o escribir puertos aplicando las máscaras necesarias.",
  "arqui:io_handler": "Separar evento, estado y acción dentro de la rutina de servicio.",
  "arqui:io_context": "Guardar los registros usados y restaurarlos antes de ejecutar IRET.",
  "arqui:io_vector": "Calcular segmento y offset e instalar correctamente el vector.",
  "arqui:io_timer": "Relacionar frecuencia, ticks y tiempo, y actualizar el contador.",
  "arqui:io_system": "Integrar vectores, rutinas, estado compartido y programa principal.",
  "arqui:cache_fields": "Separar la dirección en tag, conjunto y offset.",
  "arqui:cache_trace": "Recorrer la traza y registrar hits, misses y reemplazos.",
  "arqui:fsm_design": "Definir estados, tabla, ecuaciones y circuito final.",
  "arqui:seq_ff": "Completar excitaciones y diseñar el contador o secuencial pedido.",
  "arqui:mlg_format": "Calcular campos, cantidad de códigos y largo de instrucción.",
  "arqui:cpu_cycle": "Seguir fetch, decodificación y ejecución indicando señales de control.",
  "arqui:pipeline": "Detectar hazards y decidir forwarding, stalls o predicción.",
  "arqui:superscalar": "Distinguir dependencias, renaming, ejecución y commit en orden.",
  "arqui:mixed_exam_1": "Resolver sin apuntes y anotar los errores que se repiten.",
  "arqui:mixed_exam_2": "Corregir el procedimiento y repetir el ejercicio desde cero.",
  "arqui:simulation_1": "Resolver un examen completo con tiempo y corrección posterior.",
  "arqui:simulation_2": "Hacer el último simulacro y repasar únicamente los errores detectados."
};

const elements = {
  calendar: document.querySelector("#calendar"),
  emptyState: document.querySelector("#emptyState"),
  completedCount: document.querySelector("#completedCount"),
  remainingMinutes: document.querySelector("#remainingMinutes"),
  todayCount: document.querySelector("#todayCount"),
  progressBar: document.querySelector("#progressBar"),
  snapshotDescription: document.querySelector("#snapshotDescription"),
  updateButton: document.querySelector("#updatePlanButton"),
  addTaskButton: document.querySelector("#addTaskButton"),
  updateDialog: document.querySelector("#updateDialog"),
  confirmUpdateButton: document.querySelector("#confirmUpdateButton"),
  restoreInitialButton: document.querySelector("#restoreInitialButton"),
  showAllButton: document.querySelector("#showAllButton"),
  moveTaskDialog: document.querySelector("#moveTaskDialog"),
  moveTaskTitle: document.querySelector("#moveTaskTitle"),
  moveTaskDateSelect: document.querySelector("#moveTaskDateSelect"),
  confirmMoveTaskButton: document.querySelector("#confirmMoveTaskButton"),
  addTaskDialog: document.querySelector("#addTaskDialog"),
  addTaskForm: document.querySelector("#addTaskForm"),
  addTaskDateSelect: document.querySelector("#addTaskDateSelect"),
  addTaskSubject: document.querySelector("#addTaskSubject"),
  addTaskTitle: document.querySelector("#addTaskTitle"),
  addTaskMinutes: document.querySelector("#addTaskMinutes"),
  addTaskDetails: document.querySelector("#addTaskDetails"),
  confirmAddTaskButton: document.querySelector("#confirmAddTaskButton"),
  deleteTaskDialog: document.querySelector("#deleteTaskDialog"),
  deleteTaskTitle: document.querySelector("#deleteTaskTitle"),
  confirmDeleteTaskButton: document.querySelector("#confirmDeleteTaskButton"),
  updateStartDate: document.querySelector("#updateStartDate"),
  deletedSection: document.querySelector("#deletedSection"),
  deletedCount: document.querySelector("#deletedCount"),
  deletedTasks: document.querySelector("#deletedTasks"),
  toast: document.querySelector("#toast"),
  canvas: document.querySelector("#fluidCanvas")
};

let activeFilter = "all";
let movingTaskId = null;
let deletingTaskId = null;
let state = loadState();

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function defaultTaskRecord(taskId) {
  for (const day of DEFAULT_DAYS) {
    const task = day.tasks.find((item) => item.id === taskId);
    if (task) return { task: clone(task), date: day.date };
  }

  return null;
}

function normalizeDeletedEntries(deleted) {
  return Object.fromEntries(
    Object.entries(deleted).flatMap(([taskId, value]) => {
      if (value && typeof value === "object" && value.task && value.date) {
        return [[taskId, value]];
      }

      const fallback = defaultTaskRecord(taskId);
      if (!fallback) return [];

      return [[taskId, {
        ...fallback,
        completed: false,
        deletedAt: new Date().toISOString()
      }]];
    })
  );
}

function initialState() {
  return {
    version: 4,
    snapshot: {
      kind: "curated",
      createdAt: new Date().toISOString(),
      startDate: PLAN_START_DATE,
      sourceLabel: "Distribución unificada inicial",
      days: clone(DEFAULT_DAYS)
    },
    completed: {},
    deleted: {}
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

    if (
      saved &&
      saved.snapshot &&
      Array.isArray(saved.snapshot.days)
    ) {
      saved.completed = saved.completed || {};
      saved.deleted = normalizeDeletedEntries(saved.deleted || {});
      saved.snapshot.startDate ||=
        saved.snapshot.days[0]?.date || PLAN_START_DATE;
      saved.version = 4;
      return saved;
    }
  } catch (error) {
    console.warn("No se pudo leer el plan unificado", error);
  }

  const fresh = initialState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  return fresh;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayISO() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateParts(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function dateLabel(iso) {
  return dateParts(iso).toLocaleDateString("es-UY", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

function shortDateLabel(iso) {
  return dateParts(iso).toLocaleDateString("es-UY", {
    day: "numeric",
    month: "short"
  });
}

function formatDuration(minutes) {
  if (!minutes) return "Examen";

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (!hours) return `${rest} min`;
  if (!rest) return `${hours} h`;

  return `${hours} h ${rest} min`;
}

function allTasks() {
  return state.snapshot.days.flatMap((day) =>
    day.tasks.map((task) => ({ ...task, date: day.date }))
  );
}

function isTaskDone(taskId) {
  return Boolean(state.completed[taskId]);
}

function daySubjects(day) {
  return [...new Set(day.tasks.map((task) => task.subject))];
}

function dayMode(day) {
  const subjects = daySubjects(day);

  if (day.tasks.some((task) => task.kind === "examen")) {
    return "Examen";
  }

  if (subjects.length > 1) return "Mitad y mitad";
  if (subjects[0] === "arqui") return "Solo Arquitectura";
  if (subjects[0] === "so") return "Solo Sistemas Operativos";

  return "Día libre";
}

function dayColor(day) {
  const subjects = daySubjects(day);

  if (subjects.length > 1) return "#ff43d0";
  return SUBJECTS[subjects[0]]?.color || "#7752ff";
}

function dayMatchesFilter(day) {
  const tasks = day.tasks;

  if (activeFilter === "all") return true;
  if (activeFilter === "today") return day.date === todayISO();
  if (activeFilter === "pending") {
    return tasks.some((task) => !isTaskDone(task.id));
  }

  return tasks.some((task) => task.subject === activeFilter);
}

function render() {
  renderSummary();
  renderSnapshot();
  renderCalendar();
  renderDeletedTasks();
}

function renderSnapshot() {
  const snapshot = state.snapshot;
  const created = new Date(snapshot.createdAt).toLocaleString("es-UY", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });

  const manualEdit = snapshot.lastManualEditAt
    ? ` · último ajuste ${new Date(snapshot.lastManualEditAt).toLocaleString("es-UY", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      })}`
    : "";

  elements.snapshotDescription.textContent =
    `${snapshot.sourceLabel} · guardada ${created}${manualEdit}. ` +
    "Mover, agregar, eliminar o completar un bloque no redistribuye los demás.";
}

function renderSummary() {
  const tasks = allTasks();
  const completed = tasks.filter((task) => isTaskDone(task.id));
  const pending = tasks.filter((task) => !isTaskDone(task.id));
  const remaining = pending.reduce(
    (total, task) => total + Number(task.minutes || 0),
    0
  );
  const todayTasks = tasks.filter((task) => task.date === todayISO());

  elements.completedCount.textContent =
    `${completed.length}/${tasks.length}`;
  elements.remainingMinutes.textContent = formatDuration(remaining);
  elements.todayCount.textContent = String(todayTasks.length);
  elements.progressBar.style.width =
    `${tasks.length ? Math.round(completed.length / tasks.length * 100) : 0}%`;
}

function renderCalendar() {
  const visibleDays = state.snapshot.days.filter(dayMatchesFilter);

  elements.calendar.replaceChildren();
  elements.emptyState.hidden = visibleDays.length !== 0;

  visibleDays.forEach((day, dayIndex) => {
    const article = document.createElement("article");
    const completedCount = day.tasks.filter((task) =>
      isTaskDone(task.id)
    ).length;
    const totalMinutes = day.tasks.reduce(
      (total, task) => total + Number(task.minutes || 0),
      0
    );
    const complete =
      day.tasks.length > 0 && completedCount === day.tasks.length;

    article.className =
      `day-card ${day.date === todayISO() ? "today" : ""} ` +
      `${complete ? "complete" : ""}`;
    article.style.setProperty("--day-color", dayColor(day));

    article.innerHTML = `
      <aside class="day-date">
        <span>${day.date === todayISO() ? "Hoy" : `Día ${dayIndex + 1}`}</span>
        <strong>${shortDateLabel(day.date)}</strong>
        <small>${dayMode(day)}<br>${formatDuration(totalMinutes)}</small>
      </aside>

      <div class="day-content">
        <header class="day-heading">
          <div>
            <h2>${dateLabel(day.date)}</h2>
            <p>${day.tasks.length} bloque${day.tasks.length === 1 ? "" : "s"}</p>
          </div>
          <span class="day-progress">
            ${completedCount}/${day.tasks.length}
          </span>
        </header>

        <div class="task-list">
          ${day.tasks.map(taskHtml).join("")}
        </div>
      </div>
    `;

    elements.calendar.append(article);
  });

  document.querySelectorAll("[data-task-id]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.completed[checkbox.dataset.taskId] = checkbox.checked;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-move-task-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openMoveTaskDialog(button.dataset.moveTaskId);
    });
  });

  document.querySelectorAll("[data-delete-task-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openDeleteTaskDialog(button.dataset.deleteTaskId);
    });
  });

  attachFluidInteractions();
}

function deletedTaskRecords() {
  return Object.entries(state.deleted)
    .filter(([, record]) => record && record.task && record.date)
    .map(([taskId, record]) => ({ taskId, ...record }))
    .sort((a, b) =>
      a.date.localeCompare(b.date) ||
      String(a.deletedAt || "").localeCompare(String(b.deletedAt || ""))
    );
}

function renderDeletedTasks() {
  const records = deletedTaskRecords();

  elements.deletedSection.hidden = records.length === 0;
  elements.deletedCount.textContent =
    `${records.length} bloque${records.length === 1 ? "" : "s"}`;
  elements.deletedTasks.replaceChildren();

  records.forEach((record) => {
    const subject = SUBJECTS[record.task.subject] || SUBJECTS.arqui;
    const article = document.createElement("article");
    const summary = taskSummary(record.task);

    article.className = "deleted-task";
    article.style.setProperty("--subject-color", subject.color);
    article.innerHTML = `
      <div class="deleted-task__main">
        <span class="deleted-task__labels">
          <span class="subject-chip">${subject.label}</span>
          ${record.task.manual ? `<span class="manual-chip">manual</span>` : ""}
        </span>
        <strong>${escapeHtml(record.task.title)}</strong>
        <small>${escapeHtml(summary)}</small>
      </div>

      <div class="deleted-task__meta">
        <span>${shortDateLabel(record.date)} · ${formatDuration(Number(record.task.minutes || 0))}</span>
        <button
          type="button"
          class="restore-task-button"
          data-restore-task-id="${escapeHtml(record.taskId)}"
        >Restaurar</button>
      </div>
    `;

    elements.deletedTasks.append(article);
  });

  document.querySelectorAll("[data-restore-task-id]").forEach((button) => {
    button.addEventListener("click", () => {
      restoreDeletedTask(button.dataset.restoreTaskId);
    });
  });
}

function taskSummary(task) {
  const importedPlaceholder =
    "Bloque importado del plan de Arquitectura de Computadoras.";

  if (task.manual) {
    return task.details || "Completar el bloque y registrar dudas o errores.";
  }

  if (task.details && task.details !== importedPlaceholder) {
    return task.details;
  }

  return ARQUI_TASK_SUMMARIES[task.id] ||
    "Completar la actividad y verificar el procedimiento.";
}

function taskHtml(task) {
  const subject = SUBJECTS[task.subject] || SUBJECTS.arqui;
  const done = isTaskDone(task.id);
  const canEdit = task.kind !== "examen";
  const summary = taskSummary(task);

  return `
    <div
      class="task ${done ? "done" : ""} ${task.manual ? "manual" : ""}"
      style="--subject-color:${subject.color}"
    >
      <input
        type="checkbox"
        data-task-id="${escapeHtml(task.id)}"
        aria-label="Marcar ${escapeHtml(task.title)} como completado"
        ${done ? "checked" : ""}
      >

      <span class="task-main">
        <strong>${escapeHtml(task.title)}</strong>
        <small title="${escapeHtml(summary)}">
          ${escapeHtml(summary)}
        </small>
      </span>

      <span class="task-meta">
        <span class="task-labels">
          <span class="subject-chip">${subject.label}</span>
          ${task.manual ? `<span class="manual-chip" title="Agregado manualmente">manual</span>` : ""}
        </span>
        <span>${formatDuration(Number(task.minutes || 0))}</span>
        <span class="task-actions">
          ${canEdit ? `
            <button
              type="button"
              class="move-task-button"
              data-move-task-id="${escapeHtml(task.id)}"
            >Mover</button>
            <button
              type="button"
              class="delete-task-button"
              data-delete-task-id="${escapeHtml(task.id)}"
            >Eliminar</button>
          ` : ""}
          <a href="${task.href || subject.href}">Abrir ↗</a>
        </span>
      </span>
    </div>
  `;
}

function findTaskLocation(taskId) {
  for (const day of state.snapshot.days) {
    const taskIndex = day.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      return {
        day,
        task: day.tasks[taskIndex],
        taskIndex
      };
    }
  }

  return null;
}

function activePlanStartDate() {
  return state.snapshot.startDate ||
    state.snapshot.days[0]?.date ||
    PLAN_START_DATE;
}

function planDateOptions() {
  const start = activePlanStartDate();
  return start <= PLAN_END_DATE ? isoRange(start, PLAN_END_DATE) : [];
}

function dayLoadLabel(date) {
  const day = state.snapshot.days.find((item) => item.date === date);
  const taskCount = day?.tasks.length || 0;
  const minutes = day?.tasks.reduce(
    (total, task) => total + Number(task.minutes || 0),
    0
  ) || 0;

  if (!taskCount) return "sin bloques";

  return `${taskCount} bloque${taskCount === 1 ? "" : "s"} · ${formatDuration(minutes)}`;
}

function openMoveTaskDialog(taskId) {
  const location = findTaskLocation(taskId);

  if (!location || location.task.kind === "examen") return;

  movingTaskId = taskId;
  elements.moveTaskTitle.textContent = location.task.title;
  elements.moveTaskDateSelect.replaceChildren();

  planDateOptions().forEach((date) => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = `${dateLabel(date)} — ${dayLoadLabel(date)}`;
    option.selected = date === location.day.date;
    elements.moveTaskDateSelect.append(option);
  });

  elements.moveTaskDialog.showModal();
  elements.moveTaskDateSelect.focus();
}

function moveTaskToDate(taskId, targetDate) {
  const location = findTaskLocation(taskId);

  if (!location || !targetDate || location.day.date === targetDate) {
    return false;
  }

  const [task] = location.day.tasks.splice(location.taskIndex, 1);
  let targetDay = state.snapshot.days.find((day) => day.date === targetDate);

  if (!targetDay) {
    targetDay = { date: targetDate, tasks: [] };
    state.snapshot.days.push(targetDay);
  }

  targetDay.tasks.push(task);
  state.snapshot.days = state.snapshot.days
    .filter((day) => day.tasks.length)
    .sort((a, b) => a.date.localeCompare(b.date));
  state.snapshot.lastManualEditAt = new Date().toISOString();

  saveState();
  render();
  showToast(`Bloque movido al ${shortDateLabel(targetDate)}.`);
  return true;
}

function fillDateSelect(select, selectedDate = todayISO()) {
  select.replaceChildren();

  planDateOptions().forEach((date) => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = `${dateLabel(date)} — ${dayLoadLabel(date)}`;
    option.selected = date === selectedDate;
    select.append(option);
  });
}

function openAddTaskDialog() {
  elements.addTaskForm.reset();
  elements.addTaskMinutes.value = "60";
  fillDateSelect(
    elements.addTaskDateSelect,
    planDateOptions().includes(todayISO()) ? todayISO() : planDateOptions()[0]
  );
  elements.addTaskDialog.showModal();
  elements.addTaskTitle.focus();
}

function addManualTask({ date, subject, title, minutes, details }) {
  if (!date || !SUBJECTS[subject] || !title.trim()) return false;

  let targetDay = state.snapshot.days.find((day) => day.date === date);

  if (!targetDay) {
    targetDay = { date, tasks: [] };
    state.snapshot.days.push(targetDay);
  }

  const normalizedMinutes = Math.max(0, Number(minutes) || 0);
  const id = `manual:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;

  targetDay.tasks.push({
    id,
    subject,
    title: title.trim(),
    minutes: normalizedMinutes,
    kind: "manual",
    sourceDate: date,
    href: SUBJECTS[subject].href,
    details: details.trim(),
    manual: true
  });

  state.snapshot.days.sort((a, b) => a.date.localeCompare(b.date));
  state.snapshot.lastManualEditAt = new Date().toISOString();
  saveState();
  render();
  showToast(`Bloque agregado al ${shortDateLabel(date)}.`);
  return true;
}

function openDeleteTaskDialog(taskId) {
  const location = findTaskLocation(taskId);

  if (!location || location.task.kind === "examen") return;

  deletingTaskId = taskId;
  elements.deleteTaskTitle.textContent = location.task.title;
  elements.deleteTaskDialog.showModal();
}

function deleteTask(taskId) {
  const location = findTaskLocation(taskId);

  if (!location || location.task.kind === "examen") return false;

  const title = location.task.title;
  state.deleted[taskId] = {
    task: clone(location.task),
    date: location.day.date,
    completed: isTaskDone(taskId),
    deletedAt: new Date().toISOString()
  };

  location.day.tasks.splice(location.taskIndex, 1);
  delete state.completed[taskId];
  state.snapshot.days = state.snapshot.days.filter((day) => day.tasks.length);
  state.snapshot.lastManualEditAt = new Date().toISOString();
  saveState();
  render();
  showToast(`Se eliminó “${title}”. Podés restaurarlo al final del calendario.`);
  return true;
}

function restoreDeletedTask(taskId) {
  const record = state.deleted[taskId];

  if (!record || !record.task || !record.date) return false;
  if (findTaskLocation(taskId)) {
    delete state.deleted[taskId];
    saveState();
    render();
    return false;
  }

  const targetDate = record.date < activePlanStartDate()
    ? activePlanStartDate()
    : record.date;
  let targetDay = state.snapshot.days.find((day) => day.date === targetDate);

  if (!targetDay) {
    targetDay = { date: targetDate, tasks: [] };
    state.snapshot.days.push(targetDay);
  }

  targetDay.tasks.push({
    ...clone(record.task),
    sourceDate: record.task.sourceDate || record.date
  });
  state.snapshot.days.sort((a, b) => a.date.localeCompare(b.date));

  if (record.completed) state.completed[taskId] = true;
  delete state.deleted[taskId];
  state.snapshot.lastManualEditAt = new Date().toISOString();

  saveState();
  render();
  showToast(`Se restauró “${record.task.title}” en ${shortDateLabel(targetDate)}.`);
  return true;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2600);
}

function readJsonStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch (error) {
    return null;
  }
}

function embeddedArquiDays() {
  return EMBEDDED_SOURCES.arquiDays.map((day) => ({
    date: day.date,
    tasks: day.tasks.map((task) => sourceArquiTask(task.sourceId))
  }));
}

function sourceArquiTask(sourceId) {
  const module = EMBEDDED_SOURCES.arquiModules.find(
    (item) => item.sourceId === sourceId
  );

  if (!module) return null;

  return {
    id: `arqui:${sourceId}`,
    subject: "arqui",
    title: module.title,
    minutes: module.minutes,
    kind: module.kind,
    sourceDate: "",
    href: "/arqui/",
    phase: Number(module.phase || 99),
    weight: Number(module.weight || 1),
    topic: module.topic || "",
    order: EMBEDDED_SOURCES.arquiModules.findIndex(
      (item) => item.sourceId === sourceId
    ),
    details: ARQUI_TASK_SUMMARIES[`arqui:${sourceId}`] ||
      "Completar la actividad y verificar el procedimiento."
  };
}

function readArquiDays() {
  const stored = readJsonStorage(ARQUI_STORAGE_KEY);
  const snapshot = stored?.studyPlan?.fixedScheduleV12;

  if (!snapshot?.days?.length) return embeddedArquiDays();

  const days = snapshot.days.map((day) => ({
    date: day.date,
    tasks: (day.taskIds || [])
      .map(sourceArquiTask)
      .filter(Boolean)
  }));

  return days.some((day) => day.tasks.length)
    ? days
    : embeddedArquiDays();
}

function fallbackSoTasks() {
  return EMBEDDED_SOURCES.soDays
    .filter((day) => day.focus !== "Examen")
    .map((day) => ({
      id: `so:plan_day_${day.day_number}`,
      subject: "so",
      title: day.focus,
      minutes: Number(day.estimated_minutes || 150),
      kind: "tema",
      sourceDate: day.date,
      href: "/so/",
      details: (day.tasks || []).join(" · "),
      order: Number(day.day_number)
    }));
}

function readSoTasks() {
  const stored = readJsonStorage(SO_STORAGE_KEY);
  const generated = stored?.plan?.generated;

  if (!Array.isArray(generated) || !generated.length) {
    return fallbackSoTasks();
  }

  const tasks = generated
    .filter((task) => !task.postponed && task.name !== "Examen")
    .map((task, index) => ({
      id: `so:${task.id || `generated_${index}`}`,
      subject: "so",
      title: task.name || "Bloque de Sistemas Operativos",
      minutes: Number(task.estimated_minutes || 150),
      kind: "tema",
      sourceDate: task.date || task.source_date || "",
      href: "/so/",
      details: (task.checklist || []).join(" · "),
      order: Number(task.day_number || index + 1)
    }))
    .sort((a, b) => a.order - b.order);

  return tasks.length ? tasks : fallbackSoTasks();
}

function isoRange(start, end) {
  const dates = [];
  let cursor = dateParts(start);
  const last = dateParts(end);

  while (cursor <= last) {
    const year = cursor.getFullYear();
    const month = String(cursor.getMonth() + 1).padStart(2, "0");
    const day = String(cursor.getDate()).padStart(2, "0");
    dates.push(`${year}-${month}-${day}`);
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function addDaysISO(iso, amount) {
  const date = dateParts(iso);
  date.setDate(date.getDate() + amount);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function taskMinutes(task) {
  return Number(task?.minutes || 0);
}

function tasksMinutes(tasks) {
  return tasks.reduce((total, task) => total + taskMinutes(task), 0);
}

function uniqueAvailableTasks(tasks) {
  const seen = new Set();

  return tasks.filter((task) => {
    if (!task?.id || seen.has(task.id) || state.deleted[task.id]) {
      return false;
    }

    seen.add(task.id);
    return true;
  });
}

function currentManualTasks() {
  return state.snapshot.days.flatMap((day, dayIndex) =>
    day.tasks
      .filter((task) => task.manual && !state.deleted[task.id])
      .map((task, taskIndex) => ({
        ...clone(task),
        sourceDate: task.sourceDate || day.date,
        previousDate: day.date,
        order: 10000 + dayIndex * 100 + taskIndex,
        phase: task.subject === "arqui" ? 8.5 : 99,
        weight: 1
      }))
  );
}

function orderedArquiTasks(arquiDays, manualTasks) {
  const imported = arquiDays.flatMap((day, dayIndex) =>
    day.tasks.map((task, taskIndex) => ({
      ...task,
      sourceDate: task.sourceDate || day.date,
      order: Number.isFinite(Number(task.order))
        ? Number(task.order)
        : dayIndex * 100 + taskIndex,
      phase: Number(task.phase || 99),
      weight: Number(task.weight || 1)
    }))
  );

  return uniqueAvailableTasks([
    ...imported,
    ...manualTasks.filter((task) => task.subject === "arqui")
  ]).sort((a, b) =>
    Number(a.phase || 99) - Number(b.phase || 99) ||
    Number(b.weight || 1) - Number(a.weight || 1) ||
    Number(a.order || 0) - Number(b.order || 0)
  );
}

function orderedSoTasks(soTasks, manualTasks) {
  return uniqueAvailableTasks([
    ...soTasks,
    ...manualTasks.filter((task) => task.subject === "so")
  ]).sort((a, b) =>
    Number(a.order || 0) - Number(b.order || 0) ||
    String(a.sourceDate || "").localeCompare(String(b.sourceDate || ""))
  );
}

function emptyBuckets(dates) {
  return Object.fromEntries(dates.map((date) => [date, []]));
}

function cloneBuckets(buckets) {
  return Object.fromEntries(
    Object.entries(buckets).map(([date, tasks]) => [date, [...tasks]])
  );
}

function bucketLoad(buckets, date) {
  return tasksMinutes(buckets[date] || []);
}

function partitionOrderedTasks(tasks, dates, fixedBuckets) {
  if (!dates.length) {
    return tasks.length ? null : { cost: 0, cuts: [], loads: [] };
  }

  const taskCount = tasks.length;
  const fixedCount = dates.reduce(
    (total, date) => total + (fixedBuckets[date]?.length || 0),
    0
  );
  const effectiveMaxBlocks = Math.max(
    DAILY_MAX_BLOCKS,
    Math.ceil((taskCount + fixedCount) / dates.length)
  );
  const prefixMinutes = [0];

  tasks.forEach((task) => {
    prefixMinutes.push(prefixMinutes[prefixMinutes.length - 1] + taskMinutes(task));
  });

  const fixedMinutes = dates.reduce(
    (total, date) => total + bucketLoad(fixedBuckets, date),
    0
  );
  const averageMinutes = (fixedMinutes + prefixMinutes[taskCount]) / dates.length;
  const targetMinutes = Math.min(
    DAILY_SOFT_LIMIT_MINUTES,
    Math.max(180, averageMinutes || DAILY_TARGET_MINUTES)
  );
  const memo = new Map();

  function solve(dayIndex, taskIndex) {
    const key = `${dayIndex}:${taskIndex}`;
    if (memo.has(key)) return memo.get(key);

    if (dayIndex === dates.length) {
      const result = taskIndex === taskCount
        ? { cost: 0, cuts: [], loads: [] }
        : null;
      memo.set(key, result);
      return result;
    }

    const date = dates[dayIndex];
    const fixedTasks = fixedBuckets[date] || [];
    const fixedDayMinutes = tasksMinutes(fixedTasks);
    const remainingDays = dates.length - dayIndex - 1;
    const futureCapacity = dates
      .slice(dayIndex + 1)
      .reduce(
        (total, futureDate) =>
          total + Math.max(
            0,
            effectiveMaxBlocks - (fixedBuckets[futureDate]?.length || 0)
          ),
        0
      );
    const minimumTake = Math.max(0, taskCount - taskIndex - futureCapacity);
    const maximumTake = Math.min(
      taskCount - taskIndex,
      Math.max(0, effectiveMaxBlocks - fixedTasks.length)
    );
    let best = null;

    for (let take = minimumTake; take <= maximumTake; take += 1) {
      const assignedMinutes =
        prefixMinutes[taskIndex + take] - prefixMinutes[taskIndex];
      const load = fixedDayMinutes + assignedMinutes;
      const blockCount = fixedTasks.length + take;
      const deviation = load - targetMinutes;
      const softOverflow = Math.max(0, load - DAILY_SOFT_LIMIT_MINUTES);
      const hardOverflow = Math.max(0, load - DAILY_HARD_LIMIT_MINUTES);
      const blockOverflow = Math.max(0, blockCount - DAILY_MAX_BLOCKS);
      let dayCost = deviation * deviation;

      dayCost += softOverflow * softOverflow * 12;
      dayCost += hardOverflow * hardOverflow * 180;
      dayCost += blockOverflow * blockOverflow * 25000;

      if (
        taskCount >= dates.length &&
        blockCount === 0 &&
        remainingDays > 0
      ) {
        dayCost += targetMinutes * targetMinutes * 0.4;
      }

      const next = solve(dayIndex + 1, taskIndex + take);
      if (!next) continue;

      const candidate = {
        cost: dayCost + next.cost,
        cuts: [take, ...next.cuts],
        loads: [load, ...next.loads]
      };

      if (!best || candidate.cost < best.cost) {
        best = candidate;
      }
    }

    memo.set(key, best);
    return best;
  }

  return solve(0, 0);
}

function applyPartition(tasks, dates, buckets, cuts) {
  let taskIndex = 0;

  cuts.forEach((take, dayIndex) => {
    for (let offset = 0; offset < take; offset += 1) {
      buckets[dates[dayIndex]].push(tasks[taskIndex]);
      taskIndex += 1;
    }
  });
}

function indexCombinations(length, amount, start = 0, prefix = []) {
  if (amount === 0) return [prefix];

  const combinations = [];

  for (let index = start; index <= length - amount; index += 1) {
    combinations.push(
      ...indexCombinations(length, amount - 1, index + 1, [...prefix, index])
    );
  }

  return combinations;
}

function selectSoBlocksBeforeArqui(soTasks, arquiTasks, preDates, postDates) {
  if (!soTasks.length || !preDates.length) return 0;

  const postMinuteCapacity = postDates.length * DAILY_TARGET_MINUTES;
  let requiredBefore = 0;
  let remainingMinutes = tasksMinutes(soTasks);

  while (
    requiredBefore < soTasks.length &&
    remainingMinutes > postMinuteCapacity
  ) {
    remainingMinutes -= taskMinutes(soTasks[requiredBefore]);
    requiredBefore += 1;
  }

  const desiredInterleave = Math.min(
    soTasks.length,
    Math.ceil(preDates.length * 2 / 3)
  );
  const availableBlockSlots =
    preDates.length * DAILY_MAX_BLOCKS - arquiTasks.length;
  const slotLimited = availableBlockSlots > 0
    ? Math.min(desiredInterleave, availableBlockSlots)
    : Math.min(1, desiredInterleave);

  return Math.min(
    soTasks.length,
    preDates.length,
    Math.max(requiredBefore, slotLimited)
  );
}

function buildMixedPreExamBuckets(arquiTasks, soTasks, dates) {
  const baseBuckets = emptyBuckets(dates);

  if (!dates.length) {
    return { buckets: baseBuckets, cost: 0 };
  }

  const placementOptions = soTasks.length
    ? indexCombinations(dates.length, Math.min(soTasks.length, dates.length))
    : [[]];
  let best = null;

  placementOptions.forEach((indexes) => {
    const candidateBuckets = emptyBuckets(dates);

    indexes.forEach((dateIndex, taskIndex) => {
      candidateBuckets[dates[dateIndex]].push(soTasks[taskIndex]);
    });

    const partition = partitionOrderedTasks(
      arquiTasks,
      dates,
      candidateBuckets
    );
    if (!partition) return;

    const spacingCost = indexes.reduce((total, dateIndex, index) => {
      if (indexes.length <= 1) return total;
      const ideal = index * (dates.length - 1) / (indexes.length - 1);
      const distance = dateIndex - ideal;
      return total + distance * distance * 18;
    }, 0);
    const totalCost = partition.cost + spacingCost;

    if (!best || totalCost < best.cost) {
      const scheduledBuckets = cloneBuckets(candidateBuckets);
      applyPartition(arquiTasks, dates, scheduledBuckets, partition.cuts);
      best = {
        cost: totalCost,
        buckets: scheduledBuckets
      };
    }
  });

  return best || { buckets: baseBuckets, cost: 0 };
}

function scheduleOrderedSegment(tasks, dates) {
  const buckets = emptyBuckets(dates);
  const partition = partitionOrderedTasks(tasks, dates, buckets);

  if (partition) {
    applyPartition(tasks, dates, buckets, partition.cuts);
  }

  return buckets;
}

function mergeBuckets(target, source) {
  Object.entries(source).forEach(([date, tasks]) => {
    target[date] ||= [];
    target[date].push(...tasks);
  });
}

function latestSelectableUpdateDate() {
  const today = todayISO();

  if (today < PLAN_START_DATE) return PLAN_START_DATE;
  if (today > PLAN_END_DATE) return PLAN_END_DATE;
  return today;
}

function normalizeUpdateStartDate(value) {
  const latest = latestSelectableUpdateDate();
  let selected = value || latest;

  if (selected < PLAN_START_DATE) selected = PLAN_START_DATE;
  if (selected > latest) selected = latest;

  return selected;
}

function rebuildFromCurrentSources(selectedStartDate) {
  const updateStart = normalizeUpdateStartDate(selectedStartDate);
  const arquiStudyEnd = addDaysISO(ARQUI_EXAM_DATE, -1);
  const soStudyEnd = addDaysISO(SO_EXAM_DATE, -1);
  const preArquiDates = updateStart <= arquiStudyEnd
    ? isoRange(updateStart, arquiStudyEnd)
    : [];
  const postArquiStart = [updateStart, addDaysISO(ARQUI_EXAM_DATE, 1)]
    .sort()
    .slice(-1)[0];
  const postArquiDates = postArquiStart <= soStudyEnd
    ? isoRange(postArquiStart, soStudyEnd)
    : [];
  const allStudyDates = [...preArquiDates, ...postArquiDates];
  const manualTasks = currentManualTasks();
  const arquiTasks = orderedArquiTasks(readArquiDays(), manualTasks);
  const soTasks = orderedSoTasks(readSoTasks(), manualTasks);
  const soBeforeCount = selectSoBlocksBeforeArqui(
    soTasks,
    arquiTasks,
    preArquiDates,
    postArquiDates
  );
  const soBeforeArqui = soTasks.slice(0, soBeforeCount);
  const soAfterArqui = soTasks.slice(soBeforeCount);
  const buckets = emptyBuckets(allStudyDates);

  const mixedSegment = buildMixedPreExamBuckets(
    arquiTasks,
    soBeforeArqui,
    preArquiDates
  );
  mergeBuckets(buckets, mixedSegment.buckets);

  if (postArquiDates.length) {
    mergeBuckets(
      buckets,
      scheduleOrderedSegment(soAfterArqui, postArquiDates)
    );
  } else if (soAfterArqui.length && preArquiDates.length) {
    mergeBuckets(
      buckets,
      scheduleOrderedSegment(soAfterArqui, preArquiDates)
    );
  }

  if (ARQUI_EXAM_DATE >= updateStart && ARQUI_EXAM_DATE <= PLAN_END_DATE) {
    buckets[ARQUI_EXAM_DATE] = [
      examTask(
        "arqui",
        "Examen de Arquitectura de Computadoras",
        "/arqui/"
      )
    ];
  }

  if (SO_EXAM_DATE >= updateStart && SO_EXAM_DATE <= PLAN_END_DATE) {
    buckets[SO_EXAM_DATE] = [
      examTask(
        "so",
        "Examen de Sistemas Operativos",
        "/so/"
      )
    ];
  }

  const days = Object.entries(buckets)
    .filter(([, tasks]) => tasks.length)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, tasks]) => ({ date, tasks }));

  state.snapshot = {
    kind: "local-sources",
    createdAt: new Date().toISOString(),
    startDate: updateStart,
    sourceLabel: `Plan equilibrado desde ${shortDateLabel(updateStart)}`,
    days
  };

  const validIds = new Set(
    days.flatMap((day) => day.tasks.map((task) => task.id))
  );

  state.completed = Object.fromEntries(
    Object.entries(state.completed).filter(([taskId]) =>
      validIds.has(taskId)
    )
  );

  saveState();
  activeFilter = "all";
  updateFilterButtons();
  render();
  showToast(
    `Plan redistribuido desde ${shortDateLabel(updateStart)}: se recuperaron los bloques anteriores y se equilibró la carga diaria.`
  );
}

function examTask(subject, title, href) {
  return {
    id: `${subject}:exam`,
    subject,
    title,
    minutes: 0,
    kind: "examen",
    sourceDate: subject === "arqui" ? "2026-07-23" : "2026-07-29",
    href,
    details: "Repaso breve solamente. No incorporar temas nuevos."
  };
}

function restoreInitial() {
  const oldCompleted = state.completed;

  state = initialState();
  state.completed = Object.fromEntries(
    Object.entries(oldCompleted).filter(([taskId]) =>
      allDefaultTaskIds().has(taskId)
    )
  );

  saveState();
  activeFilter = "all";
  updateFilterButtons();
  render();
  showToast("Se restauró la distribución inicial.");
}

function allDefaultTaskIds() {
  return new Set(
    DEFAULT_DAYS.flatMap((day) => day.tasks.map((task) => task.id))
  );
}

function updateFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.filter === activeFilter
    );
  });
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    updateFilterButtons();
    renderCalendar();
  });
});

elements.showAllButton.addEventListener("click", () => {
  activeFilter = "all";
  updateFilterButtons();
  renderCalendar();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.updateButton.addEventListener("click", () => {
  const latest = latestSelectableUpdateDate();

  elements.updateStartDate.min = PLAN_START_DATE;
  elements.updateStartDate.max = latest;
  elements.updateStartDate.value = latest;
  elements.updateDialog.showModal();
  elements.updateStartDate.focus();
});

elements.confirmUpdateButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!elements.updateStartDate.reportValidity()) return;

  const selectedStartDate = elements.updateStartDate.value;
  elements.updateDialog.close();
  rebuildFromCurrentSources(selectedStartDate);
});

elements.restoreInitialButton.addEventListener("click", (event) => {
  event.preventDefault();
  elements.updateDialog.close();
  restoreInitial();
});

elements.addTaskButton.addEventListener("click", openAddTaskDialog);

elements.addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const added = addManualTask({
    date: elements.addTaskDateSelect.value,
    subject: elements.addTaskSubject.value,
    title: elements.addTaskTitle.value,
    minutes: elements.addTaskMinutes.value,
    details: elements.addTaskDetails.value
  });

  if (added) elements.addTaskDialog.close();
});

elements.confirmDeleteTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  deleteTask(deletingTaskId);
  elements.deleteTaskDialog.close();
  deletingTaskId = null;
});

elements.deleteTaskDialog.addEventListener("close", () => {
  deletingTaskId = null;
});

elements.confirmMoveTaskButton.addEventListener("click", (event) => {
  event.preventDefault();

  const targetDate = elements.moveTaskDateSelect.value;
  const moved = moveTaskToDate(movingTaskId, targetDate);

  elements.moveTaskDialog.close();
  movingTaskId = null;

  if (!moved) {
    showToast("El bloque ya estaba asignado a ese día.");
  }
});

elements.moveTaskDialog.addEventListener("close", () => {
  movingTaskId = null;
});

render();


/* ==============================
   Fondo fluido marmolado
   ============================== */

const canvas = elements.canvas;
const ctx = canvas.getContext("2d", { alpha: false });

/*
  Se dibuja a una resolución interna menor y el navegador lo escala.
  Esto conserva el movimiento fluido sin volver a las operaciones
  costosas de desenfoque de las primeras versiones.
*/
const RENDER_SCALE = 0.58;

let width = 0;
let height = 0;
let displayWidth = 0;
let displayHeight = 0;
let lastTimestamp = performance.now();
let elapsed = 0;
let ribbonGradients = [];

const interaction = {
  x: 0.5,
  y: 0.5,
  strength: 0.04,
  targetStrength: 0.04,
  pulse: 0
};

/*
  Cada cinta está formada por varias vetas cercanas.
  Las inclinaciones y frecuencias distintas evitan el aspecto
  de franjas horizontales paralelas.
*/
const ribbons = [
  {
    base: 0.14,
    tilt: 0.19,
    amplitude: 0.105,
    frequency: 1.25,
    detailFrequency: 3.7,
    speed: 0.19,
    phase: 0.25,
    width: 38,
    vortexX: 0.64,
    vortex: 0.105,
    colors: ["#18e6ff", "#5b4cff", "#ff2ed1"]
  },
  {
    base: 0.27,
    tilt: -0.13,
    amplitude: 0.13,
    frequency: 0.92,
    detailFrequency: 4.4,
    speed: -0.16,
    phase: 1.55,
    width: 48,
    vortexX: 0.58,
    vortex: 0.135,
    colors: ["#ff2fc9", "#713cff", "#14e9f2"]
  },
  {
    base: 0.43,
    tilt: 0.08,
    amplitude: 0.16,
    frequency: 1.62,
    detailFrequency: 3.2,
    speed: 0.135,
    phase: 2.8,
    width: 54,
    vortexX: 0.55,
    vortex: 0.16,
    colors: ["#216dff", "#12e6ed", "#ff35c7"]
  },
  {
    base: 0.57,
    tilt: -0.17,
    amplitude: 0.14,
    frequency: 1.12,
    detailFrequency: 4.9,
    speed: -0.145,
    phase: 4.05,
    width: 50,
    vortexX: 0.63,
    vortex: 0.145,
    colors: ["#713eff", "#ff32cd", "#ff802b"]
  },
  {
    base: 0.72,
    tilt: 0.12,
    amplitude: 0.115,
    frequency: 1.48,
    detailFrequency: 3.9,
    speed: 0.17,
    phase: 5.2,
    width: 42,
    vortexX: 0.48,
    vortex: 0.115,
    colors: ["#16e5ef", "#6647ff", "#ff792a"]
  },
  {
    base: 0.86,
    tilt: -0.08,
    amplitude: 0.08,
    frequency: 1.05,
    detailFrequency: 4.2,
    speed: -0.13,
    phase: 0.85,
    width: 32,
    vortexX: 0.42,
    vortex: 0.08,
    colors: ["#ff7e29", "#ff2fc7", "#264dff"]
  }
];

const clouds = [
  {
    x: 0.18,
    y: 0.24,
    dx: 0.018,
    dy: 0.012,
    radius: 0.25,
    color: "#145cff"
  },
  {
    x: 0.73,
    y: 0.34,
    dx: -0.014,
    dy: 0.011,
    radius: 0.28,
    color: "#ff2fc8"
  },
  {
    x: 0.58,
    y: 0.72,
    dx: 0.012,
    dy: -0.01,
    radius: 0.3,
    color: "#633cff"
  }
];

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function createRibbonGradient(colors, strong = false) {
  const gradient = ctx.createLinearGradient(0, 0, width, height * 0.18);

  if (strong) {
    gradient.addColorStop(0, hexToRgba(colors[0], 0));
    gradient.addColorStop(0.14, hexToRgba(colors[0], 0.64));
    gradient.addColorStop(0.39, hexToRgba(colors[1], 0.82));
    gradient.addColorStop(0.64, hexToRgba(colors[2], 0.72));
    gradient.addColorStop(0.88, hexToRgba(colors[0], 0.5));
    gradient.addColorStop(1, hexToRgba(colors[1], 0));
  } else {
    gradient.addColorStop(0, hexToRgba(colors[0], 0));
    gradient.addColorStop(0.12, hexToRgba(colors[0], 0.2));
    gradient.addColorStop(0.38, hexToRgba(colors[1], 0.25));
    gradient.addColorStop(0.66, hexToRgba(colors[2], 0.22));
    gradient.addColorStop(0.9, hexToRgba(colors[0], 0.16));
    gradient.addColorStop(1, hexToRgba(colors[1], 0));
  }

  return gradient;
}

function resizeCanvas() {
  displayWidth = window.innerWidth;
  displayHeight = window.innerHeight;

  width = Math.max(1, Math.round(displayWidth * RENDER_SCALE));
  height = Math.max(1, Math.round(displayHeight * RENDER_SCALE));

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${displayWidth}px`;
  canvas.style.height = `${displayHeight}px`;

  ribbonGradients = ribbons.map((ribbon) => ({
    body: createRibbonGradient(ribbon.colors, false),
    bright: createRibbonGradient(ribbon.colors, true)
  }));
}

function drawCloud(cloud, deltaSeconds) {
  const x = cloud.x * width;
  const y = cloud.y * height;
  const radius = cloud.radius * Math.max(width, height);

  const gradient = ctx.createRadialGradient(
    x,
    y,
    radius * 0.05,
    x,
    y,
    radius
  );

  gradient.addColorStop(0, hexToRgba(cloud.color, 0.15));
  gradient.addColorStop(0.44, hexToRgba(cloud.color, 0.065));
  gradient.addColorStop(1, hexToRgba(cloud.color, 0));

  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  cloud.x += cloud.dx * deltaSeconds;
  cloud.y += cloud.dy * deltaSeconds;

  if (cloud.x < -0.12 || cloud.x > 1.12) cloud.dx *= -1;
  if (cloud.y < -0.12 || cloud.y > 1.12) cloud.dy *= -1;
}

function ribbonPoints(ribbon, lane, extraOffset = 0) {
  const pointCount = 16;
  const points = [];
  const activeSpeed = 1 + interaction.strength * 0.16;

  for (let index = 0; index < pointCount; index += 1) {
    const t = index / (pointCount - 1);
    const x = (t * 1.18 - 0.09) * width;

    const mainWave =
      Math.sin(
        t * Math.PI * 2 * ribbon.frequency +
        elapsed * ribbon.speed * activeSpeed +
        ribbon.phase
      ) * ribbon.amplitude;

    const fineWave =
      Math.sin(
        t * Math.PI * 2 * ribbon.detailFrequency -
        elapsed * ribbon.speed * 1.35 +
        ribbon.phase * 1.8 +
        lane * 0.9
      ) * ribbon.amplitude * 0.23;

    /*
      El remolino se concentra en una zona distinta para cada cinta.
      Produce pliegues y curvas sin hacer que toda la línea salte.
    */
    const vortexDistance = t - ribbon.vortexX;
    const vortexEnvelope =
      Math.exp(-(vortexDistance * vortexDistance) / 0.028);

    const vortex =
      vortexEnvelope *
      Math.sin(
        vortexDistance * 18 +
        elapsed * ribbon.speed * 2.1 +
        ribbon.phase +
        lane * 0.72
      ) *
      ribbon.vortex;

    const pointerDistance = t - interaction.x;
    const pointerEnvelope =
      Math.exp(-(pointerDistance * pointerDistance) / 0.018);

    const pointerBend =
      pointerEnvelope *
      interaction.strength *
      (
        (interaction.y - 0.5) * 0.1 +
        Math.sin(elapsed * 1.7 + lane + interaction.pulse) * 0.026
      );

    const laneSpacing =
      lane * ribbon.width * 0.24 / Math.max(height, 1);

    const laneRipple =
      Math.sin(t * Math.PI * 5.8 + elapsed * 0.22 + lane * 1.4) *
      lane *
      0.0055;

    const normalizedY =
      ribbon.base +
      ribbon.tilt * (t - 0.5) +
      mainWave +
      fineWave +
      vortex +
      pointerBend +
      laneSpacing +
      laneRipple;

    points.push({
      x,
      y: normalizedY * height + extraOffset
    });
  }

  return points;
}

function traceSmoothPath(points) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const midpointX = (current.x + next.x) / 2;
    const midpointY = (current.y + next.y) / 2;

    ctx.quadraticCurveTo(
      current.x,
      current.y,
      midpointX,
      midpointY
    );
  }

  const last = points[points.length - 1];
  ctx.lineTo(last.x, last.y);
}

function drawRibbon(ribbon, ribbonIndex) {
  const lanes = [-1.55, -1.05, -0.55, 0, 0.5, 1, 1.48];
  const scaledWidth = ribbon.width * RENDER_SCALE;

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  lanes.forEach((lane, laneIndex) => {
    const distanceFromCenter = Math.abs(lane);
    const bodyWidth =
      Math.max(
        2.8,
        scaledWidth * (0.29 - distanceFromCenter * 0.045)
      );

    traceSmoothPath(ribbonPoints(ribbon, lane));
    ctx.strokeStyle = ribbonGradients[ribbonIndex].body;
    ctx.lineWidth = bodyWidth;
    ctx.globalAlpha = 0.42 - distanceFromCenter * 0.06;
    ctx.stroke();

    /*
      Una veta intermedia da el aspecto de pintura mezclada.
      No usa blur: es más barato y mantiene el movimiento estable.
    */
    traceSmoothPath(
      ribbonPoints(
        ribbon,
        lane + Math.sin(laneIndex + elapsed * 0.08) * 0.035,
        (laneIndex % 2 === 0 ? -1 : 1) * RENDER_SCALE
      )
    );
    ctx.strokeStyle = ribbonGradients[ribbonIndex].bright;
    ctx.lineWidth = Math.max(1.1, bodyWidth * 0.19);
    ctx.globalAlpha = 0.46;
    ctx.stroke();
  });

  /*
    Filamentos finos en los bordes. Se mueven con una fase distinta,
    por eso el fondo parece plegarse en lugar de desplazarse como una banda.
  */
  [-1.82, -1.7, 1.7, 1.82].forEach((lane, filamentIndex) => {
    traceSmoothPath(
      ribbonPoints(
        ribbon,
        lane,
        Math.sin(elapsed * 0.21 + filamentIndex) * 1.4
      )
    );
    ctx.strokeStyle = ribbonGradients[ribbonIndex].bright;
    ctx.lineWidth = filamentIndex % 2 === 0 ? 0.75 : 1.2;
    ctx.globalAlpha = filamentIndex % 2 === 0 ? 0.42 : 0.29;
    ctx.stroke();
  });

  ctx.restore();
}

function animateFluid(timestamp) {
  const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.04);
  lastTimestamp = timestamp;
  elapsed += deltaSeconds;

  interaction.strength +=
    (interaction.targetStrength - interaction.strength) *
    Math.min(1, deltaSeconds * 3.4);

  interaction.pulse += deltaSeconds * (0.55 + interaction.strength * 1.2);

  const base = ctx.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, "#030014");
  base.addColorStop(0.34, "#09042d");
  base.addColorStop(0.7, "#07022a");
  base.addColorStop(1, "#040017");

  ctx.fillStyle = base;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  clouds.forEach((cloud) => drawCloud(cloud, deltaSeconds));
  ctx.restore();

  ribbons.forEach(drawRibbon);

  requestAnimationFrame(animateFluid);
}

function updateInteraction(event, strength) {
  interaction.x = event.clientX / Math.max(displayWidth, 1);
  interaction.y = event.clientY / Math.max(displayHeight, 1);
  interaction.targetStrength = strength;
}

function attachFluidInteractions() {
  document.querySelectorAll(".day-card").forEach((card) => {
    card.addEventListener("pointerenter", (event) => {
      updateInteraction(event, 0.72);
    });

    card.addEventListener("pointermove", (event) => {
      updateInteraction(event, 0.72);
    });

    card.addEventListener("pointerleave", () => {
      interaction.targetStrength = 0.04;
    });
  });
}

window.addEventListener("pointermove", (event) => {
  if (!event.target.closest(".day-card")) {
    updateInteraction(event, 0.04);
  }
});

window.addEventListener("pointerleave", () => {
  interaction.targetStrength = 0;
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
requestAnimationFrame(animateFluid);
