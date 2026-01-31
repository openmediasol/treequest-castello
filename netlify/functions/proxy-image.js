// Proxy de imágenes usando Wikipedia API
const https = require('https');

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

    const species = event.queryStringParameters?.species;

    if (!species) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Species parameter required' })
        };
    }

    try {
        // Usar Wikipedia API para obtener la imagen de la especie
        const imageUrl = await getWikipediaImage(species);

        if (!imageUrl) {
            return {
                statusCode: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Image not found', species })
            };
        }

        // Devolver la URL de la imagen (Wikipedia API devuelve URLs que funcionan)
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=86400'
            },
            body: JSON.stringify({ imageUrl, species })
        };
    } catch (error) {
        console.error('Error getting image:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Failed to get image', details: error.message })
        };
    }
};

function getWikipediaImage(species) {
    return new Promise((resolve, reject) => {
        // Buscar en Wikipedia en español primero, luego en inglés
        const searchTitle = species.replace(/ /g, '_');
        const apiUrl = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTitle)}`;

        https.get(apiUrl, {
            headers: {
                'User-Agent': 'TreeQuestCastello/1.0 (https://treequest-castello.netlify.app; educational app)'
            }
        }, (response) => {
            let data = '';
            response.on('data', chunk => data += chunk);
            response.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.thumbnail && json.thumbnail.source) {
                        // Obtener versión más grande de la imagen
                        let imageUrl = json.thumbnail.source;
                        // Cambiar el tamaño del thumbnail a 400px
                        imageUrl = imageUrl.replace(/\/\d+px-/, '/400px-');
                        resolve(imageUrl);
                    } else if (json.originalimage && json.originalimage.source) {
                        resolve(json.originalimage.source);
                    } else {
                        // Intentar con Wikipedia en inglés
                        getEnglishWikipediaImage(species).then(resolve).catch(() => resolve(null));
                    }
                } catch (e) {
                    // Intentar con Wikipedia en inglés
                    getEnglishWikipediaImage(species).then(resolve).catch(() => resolve(null));
                }
            });
            response.on('error', reject);
        }).on('error', reject);
    });
}

function getEnglishWikipediaImage(species) {
    return new Promise((resolve, reject) => {
        const searchTitle = species.replace(/ /g, '_');
        const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTitle)}`;

        https.get(apiUrl, {
            headers: {
                'User-Agent': 'TreeQuestCastello/1.0 (https://treequest-castello.netlify.app; educational app)'
            }
        }, (response) => {
            let data = '';
            response.on('data', chunk => data += chunk);
            response.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.thumbnail && json.thumbnail.source) {
                        let imageUrl = json.thumbnail.source;
                        imageUrl = imageUrl.replace(/\/\d+px-/, '/400px-');
                        resolve(imageUrl);
                    } else if (json.originalimage && json.originalimage.source) {
                        resolve(json.originalimage.source);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
            response.on('error', () => resolve(null));
        }).on('error', () => resolve(null));
    });
}
