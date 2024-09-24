export const getAllCapsules = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules");
    let data = await res.json();
    return data;
}

export const getAllCapsulesID = async (id) => {
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}

export const getAllCapsulesType = async (status) => {
    
}
