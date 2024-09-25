export const getAllCapsules = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules")
    let data = await res.json();
    return data;
}
export const getCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
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
                    "name": 1,
                    "water_landings": 1
                },
                "sort":{
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let {docs:[{mass} = maxMassCapsule]} = await res.json();
    return mass;
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
                    "payload_weights": 1
                },
                "sort":{
                    "payload_weights.kg": "desc"
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let {docs} = await res.json();
    let data = []
    docs.forEach(val => data.push(...val.payload_weights))
    data.sort((a,b) => b.kg - a.kg)
    let [maxPayloadWeightsCapsule] = data;
    return maxPayloadWeightsCapsule;
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
                    "height": 1
                },
                "sort": {
                    "height.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let {docs:[{height} = maxHeightCapsule]} = await res.json();
    return height;
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
                    "diameter": 1
                },
                "sort": {
                    "diameter.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // console.log(await res.json());
    let {docs:[{diameter} = maxdiameterCapsule]} = await res.json();
    return diameter;
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
                    "": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.diameter": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let {docs:[maxDiameterCompositeFairingCapsule ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {diameter}}}} = maxDiameterCompositeFairingCapsule
    return diameter;
}
export const getCapsuleSecondStageCompositeFairingHeightTotal  = async() =>{
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
    let {docs:[maxHeightCompositeFairingCapsule ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {height}}}} = maxHeightCompositeFairingCapsule
    // console.log(height);
    return height;
}
