export const getCompany = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/ccompany")
    let data = await res.json();
    return data;
}

export const getCompanyName  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config);
    let {docs:[{nameCompany} = nameCompany]} = await res.json();
    return nameCompany;
}
export const getCompanyFounder  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
        
            "options": {
                "select": {
                    "founder": 1,  
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let data = await res.json();
    return data;
}
