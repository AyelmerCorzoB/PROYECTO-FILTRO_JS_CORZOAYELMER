export const getAllCapsules = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules")
    let data = await res.json();
    return data;
}
export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}

export const getCapsuleReuseCount  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "reuse_counts": 1
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let data = await res.json();
    return data;
}
export const getCapsuleWaterLandings  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
     
            "options": {
                "select": {
                    "name": 1,
                    "water_landings": 1
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let data = await res.json();
    return data;
}
export const getCapsuleLandLandings  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "land_landings": 1
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let data = await res.json();
    return data;
}
export const getCapsuleLastUpdate  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "last_update": 1
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // console.log(await res.json());
    let data = await res.json();
    return data;
}
export const getCapsuleLaunches  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "launches": 1
                },
                "sort": {
                    "launches": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let data = await res.json();
    return data;
}
export const getCapsuleSerial  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.height": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.height": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/Capsules/query", config);
    // console.log(await res.json());
    let data= await res.json()
    return data;
}

export const getCapsuleStatus  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "status": 1
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/Capsules/query", config);
    // console.log(await res.json());
    let data = await res.json();
    return data;
}

export const getCapsuleType  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "type": 1
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/Capsules/query", config);
    // console.log(await res.json());
    let data = await res.json();
    return data;
}

