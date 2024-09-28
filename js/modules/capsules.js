const fetchCapsuleData = async (url, body = {}, method = "POST") => {
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


export const getAllCapsules = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules", {}, "GET");
};


export const getAllCapsulesId = async (id) => {
    return await fetchCapsuleData(`https://api.spacexdata.com/v4/capsules/${id}`, {}, "GET");
};


export const getCapsuleReuseCount = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "name": 1, "reuse_counts": 1 },
            "limit": 1
        }
    });
};

export const getCapsuleWaterLandings = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "name": 1, "water_landings": 1 }
        }
    });
};

export const getCapsuleLandLandings = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "land_landings": 1 }
        }
    });
};

export const getCapsuleLastUpdate = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "last_update": 1 }
        }
    });
};

export const getCapsuleLaunches = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "query": {},
        "options": {
            "select": { "launches": 1 },
            "sort": { "launches": "desc" }
        }
    });
};

export const getCapsuleSerial = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "second_stage.payloads.composite_fairing.height": 1 },
            "sort": { "second_stage.payloads.composite_fairing.height": "desc" }
        }
    });
};

export const getCapsuleStatus = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "status": 1 }
        }
    });
};

export const getCapsuleType = async () => {
    return await fetchCapsuleData("https://api.spacexdata.com/v4/capsules/query", {
        "options": {
            "select": { "type": 1 }
        }
    });
};
