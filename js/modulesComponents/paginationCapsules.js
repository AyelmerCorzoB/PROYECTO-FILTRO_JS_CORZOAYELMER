

const getCapsulesId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let capsules = await getCapsulesId(e.target.id);
    await clear();
    
    await informationCapsules(capsules.serial, capsules.status)
    await nameRockets(capsules.name)
    await informationLaunchCostRocket(capsules.cost_per_launch)
    await informationFirstFlightRocket(capsules.first_flight)
    await informationWebRocket(capsules.wikipedia)

    await informRocketEngineThrustSeaLevel(capsules.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(capsules.engines.thrust_vacuum);
    await imageRockets(capsules.flickr_images);

    await tableRocketColum1(capsules)
    await tableRocketColum2(capsules)

    await progressRocketWeight(capsules)
    await progressPayloadWeights(capsules)
    await progressHeightRocket(capsules)
    await progressDiameterRocket(capsules)
    await progressSecondStageDiameterRocket(capsules)
    await progressSecondStageHeightRocket(capsules)
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
    
    let [a1,a2,a3,a4] = div.children
    a3.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    
    return div;
}