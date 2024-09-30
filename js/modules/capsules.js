const fetchCapsuleData = async (url, body = {}, method = "GET") => {
    let config = {
        headers: { "content-type": "application/json" },
        method: method,
    };

    if (method === "POST") {
        config.body = JSON.stringify(body);
    }

    try {
        let res = await fetch(url, config);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

// Obtener todas las cápsulas
export const getAllCapsules = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules", {}, "GET");
};


export const getAllLaunchImages = async () => {
    const launches = await fetchCapsuleData("https://api.spacexdata.com/v4/launches", {}, "GET");

    const imagesMap = {};

    launches.forEach((launch) => {
        if (launch.links) {
            // Primero, verifica si hay imágenes en links.patch
            if (launch.links.patch && launch.links.patch.small) {
                imagesMap[launch.id] = launch.links.patch.small; // Asigna la URL de patch
            }  
            // Si no hay imagen en links.patch, verifica en flickr
            else if (launch.links.flickr && launch.links.flickr.original) {
                // Intenta usar la primera imagen de Flickr
                const imageUrl = launch.links.flickr.original[0]; // Usa la primera imagen
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    imagesMap[launch.id] = imageUrl; // Asigna la URL de imagen válida
                };
                img.onerror = () => {
                    // Si la carga falla, asigna null
                    imagesMap[launch.id] = null;
                };
            } else {
                // Si no hay imágenes en patch ni en flickr, asigna null
                
                imagesMap[launch.id] = null; 
            }
        } else {
            imagesMap[launch.id] = null; // Asignar null si no hay links
        }
    });

    return imagesMap;
};



// Obtener datos de una cápsula específica por ID
export const getCapsulesId = async (id) => {
    return await fetchCapsuleData(`https://api.spacexdata.com/v4/capsules/${id}`, {}, "GET");
};

// Obtener información de la reutilización de cápsulas
export const getCapsuleReuseCount = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "name": 1, "reuse_counts": 1 },
            "limit": 1
        }
    });
};

// Obtener información de aterrizajes en agua
export const getCapsuleWaterLandings = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "name": 1, "water_landings": 1 }
        }
    });
};

// Obtener información de aterrizajes en tierra
export const getCapsuleLandLandings = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "land_landings": 1 }
        }
    });
};

// Obtener la última actualización de una cápsula
export const getCapsuleLastUpdate = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "last_update": 1 }
        }
    });
};

// Obtener lanzamientos de una cápsula
export const getCapsuleLaunches = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "query": {},
        "options": {
            "select": { "launches": 1 },
            "sort": { "launches": "desc" }
        }
    });
};

// Obtener el serial de una cápsula
export const getCapsuleSerial = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "second_stage.payloads.composite_fairing.height": 1 },
            "sort": { "second_stage.payloads.composite_fairing.height": "desc" }
        }
    });
};

// Obtener el estado de una cápsula
export const getCapsuleStatus = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "status": 1 }
        }
    });
};

// Obtener el tipo de una cápsula
export const getCapsuleType = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "type": 1 }
        }
    });
};
