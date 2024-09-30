// Obtener todo el historial
export const getAllHistory = async () => {
    let res = await fetch("https://api.spacexdata.com/v4/history");
    let data = await res.json();
    return data;
};

// Obtener historial por ID
export const getHistoryById = async (id) => {
    let res = await fetch(`https://api.spacexdata.com/v4/history/${id}`);
    let data = await res.json();
    return data;
};

// Obtener eventos del historial con filtrado y ordenado por fecha más reciente
export const getHistoryByDate = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "sort": {
                    "event_date_unix": "desc"
                }
            }
        })
    };
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config);
    let { docs } = await res.json();
    return docs;
};

// Obtener el primer evento del historial
export const getFirstHistoryEvent = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "sort": {
                    "event_date_unix": "asc"
                },
                "limit": 1
            }
        })
    };
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config);
    let { docs: [firstEvent] } = await res.json();
    return firstEvent;
};

// Obtener el evento más reciente del historial
export const getLatestHistoryEvent = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "sort": {
                    "event_date_unix": "desc"
                },
                "limit": 1
            }
        })
    };
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config);
    let { docs: [latestEvent] } = await res.json();
    return latestEvent;
};
