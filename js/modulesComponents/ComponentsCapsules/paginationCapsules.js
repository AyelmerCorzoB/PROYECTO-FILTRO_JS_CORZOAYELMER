import { getAllCapsules, getAllCapsulesId } from "../../modules/capsules.js";
import {
    informationCapsules,
    informationCapsuleReuseCounts,
    informationCapsuleWaterLandings,
    informationCapsuleLaunches,
    informationCapsuleLastUpdate    
} from "./informationCapusles.js"
import { nameCapsules } from "../ComponentsGlobals/title.js";
import { clear } from "../ComponentsGlobals/loadAndClear.js";

const getCapsulesId = async (e) => {
    e.preventDefault();
    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

   

    let capsules = await getAllCapsulesId(e.target.id);
    await clear();
    
    await informationCapsules(capsules.type, capsules.status);
    await nameCapsules(capsules.serial);
    await informationCapsuleReuseCounts(capsules.reuse_count);
    await informationCapsuleWaterLandings(capsules.water_landings);
    await informationCapsuleLastUpdate(capsules.last_update);
    await informationCapsuleLaunches(capsules.launches);

    // await progressRocketWeight(capsules);
    // await progressPayloadWeights(capsules);
    // await progressHeightRocket(capsules);
    // await progressDiameterRocket(capsules);
    // await progressSecondStageDiameterRocket(capsules);
    // await progressSecondStageHeightRocket(capsules);
}


export const paginationCapsules = async()=>{
    let capsules = await getAllCapsules();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    capsules.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>g
    //     <a href="#">&raquo;</a>
    //ETC
    // </div>
    
    return div;
}