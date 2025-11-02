// URL de tu API
const API_URL = 'https://testsqlite-kmwg.onrender.com/';

// 1. Define los datos que quieres insertar (solo el campo 'title')
const titlesToInsert = [
  { "title": "Implementar caché Redis para endpoints" },
  { "title": "Investigar error 500 en producción" },
  { "title": "Actualizar la política de privacidad (GDPR)" },
  { "title": "Crear componente de notificación reutilizable" },
  { "title": "Asegurar las variables de entorno de NestJS" },
  { "title": "Programar reunión de retrospectiva del sprint" },
  { "title": "Refactorizar la lógica del carrito de compras" },
  { "title": "Analizar la usabilidad del dashboard de administración" },
  { "title": "Diseñar esquema de base de datos para módulo de pagos" },
  { "title": "Resolver deuda técnica en el módulo de usuarios" },
  { "title": "Configurar monitoreo de métricas con Prometheus" },
  { "title": "Escribir documentación OpenAPI (Swagger) del endpoint" },
  { "title": "Realizar prueba de carga del servidor" },
  { "title": "Añadir soporte para TypeScript estricto" },
  { "title": "Buscar el meme de la semana para el chat" }
];

/**
 * Función para insertar un solo registro (título) en la API.
 * @param {object} data - El objeto con el campo 'title' a enviar.
 */
async function insertTitle(data) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // El body solo contiene el objeto { "title": "..." }
      body: JSON.stringify(data), 
    });

    if (!response.ok) {
      const errorText = await response.statusText;
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    console.log(`✅ Título insertado: "${data.title}"`, result);
    return result;

  } catch (error) {
    console.error(`❌ Falló la inserción del título "${data.title}":`, error.message);
    return null; 
  }
}

/**
 * Función principal para la inserción masiva.
 */
async function bulkInsertTitles() {
  console.log(`Iniciando la inserción de ${titlesToInsert.length} títulos...`);

  // Se ejecuta secuencialmente (uno después del otro)
  for (const record of titlesToInsert) {
    await insertTitle(record);
  }

  console.log("🏁 Proceso de inserción masiva finalizado. ¡Esperemos que NestJS esté feliz!");
}

// Ejecutar la función
bulkInsertTitles();