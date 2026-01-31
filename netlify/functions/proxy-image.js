// Proxy de imágenes para evitar CORS con Wikimedia Commons
const https = require('https');
const http = require('http');

exports.handler = async function(event, context) {
    // Manejo de CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: ''
        };
    }

    const url = event.queryStringParameters?.url;

    if (!url) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'URL parameter required' })
        };
    }

    try {
        const imageBuffer = await fetchImage(url);

        // Determinar content type basado en la extensión
        let contentType = 'image/jpeg';
        if (url.toLowerCase().includes('.png')) {
            contentType = 'image/png';
        } else if (url.toLowerCase().includes('.gif')) {
            contentType = 'image/gif';
        } else if (url.toLowerCase().includes('.webp')) {
            contentType = 'image/webp';
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=86400' // Cache 24 horas
            },
            body: imageBuffer.toString('base64'),
            isBase64Encoded: true
        };
    } catch (error) {
        console.error('Error fetching image:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Failed to fetch image', details: error.message })
        };
    }
};

function fetchImage(url, maxRedirects = 5) {
    return new Promise((resolve, reject) => {
        if (maxRedirects <= 0) {
            reject(new Error('Too many redirects'));
            return;
        }

        const protocol = url.startsWith('https') ? https : http;

        const options = {
            headers: {
                'User-Agent': 'TreeQuestCastello/1.0 (Educational app; contact@example.com)',
                'Accept': 'image/*'
            }
        };

        protocol.get(url, options, (response) => {
            // Manejar redirecciones
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                let redirectUrl = response.headers.location;
                // Manejar URLs relativas
                if (redirectUrl.startsWith('/')) {
                    const urlObj = new URL(url);
                    redirectUrl = `${urlObj.protocol}//${urlObj.host}${redirectUrl}`;
                }
                fetchImage(redirectUrl, maxRedirects - 1)
                    .then(resolve)
                    .catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode}`));
                return;
            }

            const chunks = [];
            response.on('data', (chunk) => chunks.push(chunk));
            response.on('end', () => resolve(Buffer.concat(chunks)));
            response.on('error', reject);
        }).on('error', reject);
    });
}
