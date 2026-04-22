RESPUESTA 5 DE LA ACTIVIDAD:


No existe una diferencia medible en la velocidad del CPU (tiempo de ejecución) entre ambas. La diferencia real es la gestión de memoria.

En la Composición, el objeto padre gestiona el ciclo de vida del hijo; si el padre muere, el hijo es eliminado por el Garbage Collector inmediatamente.

En la Agregación, el objeto hijo existe independientemente; si el padre muere, el hijo queda en memoria si hay otras referencias, lo que da flexibilidad pero exige más cuidado para evitar fugas de memoria.
