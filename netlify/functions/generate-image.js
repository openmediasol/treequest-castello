import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Construye un prompt optimizado para generar imágenes botánicas
 */
function buildBotanicalPrompt(species, commonName, rarity) {
  const rarityStyles = {
    'Legendario': 'majestic, ancient tree, golden hour sunlight filtering through leaves, dramatic atmosphere',
    'Raro': 'vibrant colors, detailed bark textures, morning dew on leaves, misty background',
    'Infrecuente': 'natural Mediterranean forest setting, soft diffused lighting, peaceful atmosphere',
    'Común': 'realistic park setting, clear daylight, urban nature environment'
  };

  const style = rarityStyles[rarity] || rarityStyles['Común'];

  return `Professional botanical photograph of ${commonName} (${species}),
    ${style},
    high detail on leaves, bark texture, and branch structure,
    Mediterranean climate vegetation,
    found in parks of Castellón de la Plana Spain,
    nature photography style,
    sharp focus, natural colors,
    no text or watermarks`;
}

// Caché simple en memoria (para desarrollo local)
const imageCache = new Map();

export const handler = async (event) => {
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Manejar preflight OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    const { species, commonName, rarity } = JSON.parse(event.body);

    // Validar parámetros requeridos
    if (!species || !commonName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Parámetros requeridos: species, commonName' })
      };
    }

    // Generar clave de caché normalizada
    const cacheKey = species.replace(/\s+/g, '_').toLowerCase();

    // 1. Verificar caché en memoria
    if (imageCache.has(cacheKey)) {
      console.log(`Imagen cacheada encontrada para: ${species}`);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          url: imageCache.get(cacheKey),
          cached: true,
          species: species
        })
      };
    }

    // 2. Verificar que tenemos la API key de Gemini
    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'GEMINI_API_KEY no configurada' })
      };
    }

    // 3. Inicializar cliente de Google Generative AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Usar el modelo Imagen 3
    const model = genAI.getGenerativeModel({
      model: "imagen-3.0-generate-002"
    });

    // 4. Construir prompt y generar imagen
    const prompt = buildBotanicalPrompt(species, commonName, rarity || 'Común');

    console.log(`Generando imagen para: ${species} (${commonName})`);

    const result = await model.generateImages({
      prompt: prompt,
      numberOfImages: 1,
      aspectRatio: "1:1",
      safetyFilterLevel: "block_only_high"
    });

    // 5. Verificar que se generó la imagen
    if (!result.images || result.images.length === 0) {
      throw new Error('No se pudo generar la imagen');
    }

    const imageData = result.images[0];

    // 6. Convertir a data URL para retornar directamente
    // (En producción se usaría un servicio de almacenamiento como Cloudinary, S3, etc.)
    const dataUrl = `data:image/png;base64,${imageData.bytesBase64Encoded}`;

    // Guardar en caché local
    imageCache.set(cacheKey, dataUrl);

    console.log(`Imagen generada para: ${species}`);

    // 7. Retornar URL de la imagen
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        url: dataUrl,
        cached: false,
        species: species,
        generated: true
      })
    };

  } catch (error) {
    console.error('Error generando imagen:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Error al generar imagen',
        message: error.message
      })
    };
  }
};
