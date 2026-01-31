/**
 * Proxy para PlantNet API
 * Protege la API key manteniéndola en el servidor
 */
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
    // Verificar API key
    const apiKey = process.env.PLANTNET_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'PLANTNET_API_KEY no configurada' })
      };
    }

    // El body debe contener la imagen en base64
    const { imageBase64, imageType = 'image/jpeg' } = JSON.parse(event.body);

    if (!imageBase64) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Se requiere imageBase64 en el body' })
      };
    }

    // Convertir base64 a buffer
    const imageBuffer = Buffer.from(imageBase64, 'base64');

    // Crear FormData manualmente
    const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);

    // Construir el body como multipart/form-data
    const bodyParts = [
      `--${boundary}\r\n`,
      `Content-Disposition: form-data; name="images"; filename="capture.jpg"\r\n`,
      `Content-Type: ${imageType}\r\n\r\n`,
    ];

    const bodyStart = Buffer.from(bodyParts.join(''));
    const bodyEnd = Buffer.from(`\r\n--${boundary}--\r\n`);
    const fullBody = Buffer.concat([bodyStart, imageBuffer, bodyEnd]);

    // Llamar a PlantNet API
    const plantnetUrl = `https://my-api.plantnet.org/v2/identify/all?api-key=${apiKey}`;

    const response = await fetch(plantnetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': fullBody.length.toString()
      },
      body: fullBody
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error de PlantNet:', response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: `Error de PlantNet API: ${response.status}`,
          details: errorText
        })
      };
    }

    const data = await response.json();

    // Retornar respuesta de PlantNet
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Error en proxy PlantNet:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Error al identificar planta',
        message: error.message
      })
    };
  }
};
