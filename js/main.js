import { 
    paginationCapsules
} from "./modulesComponents/ComponentsCapsules/paginationCapsules.js";

import { 
    paginationRockets
 } from "./modulesComponents/ComponentsRockets/paginationRockets.js";

import {
    load,
    clear
} from "./modulesComponents/ComponentsGlobals/loadAndClear.js"

let footerSelect = async(e, id)=>{
    e.preventDefault();
    
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    await clear();
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
    location.href="rockets.html"
} )

let capsules = document.querySelector("#capsule")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    await clear();
    location.href="capsules.html"
})

let history = document.querySelector("#history");
history.addEventListener("click", async(e)=>{
    await footerSelect(e, history)
    await clear();
    location.href="history.html"
    
})

let company = document.querySelector("#company");
company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)
    await clear();
    location.href="company.html"
})

// setTimeout(() => {
//     rocket.click();
// }, 2000);