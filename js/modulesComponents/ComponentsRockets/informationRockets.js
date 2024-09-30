    export const informationRockets = async(country, description)=>{
        let div = document.createElement('div');
        div.classList.add('description__container')
        let divFirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "storage/img/icons/mech.svg")
        divFirst.append(img);
        
        let divLast = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = country
        let small = document.createElement('small');
        small.textContent = description
        divLast.append(h3, small);
        div.append(divFirst, divLast);

        let description__item = document.querySelector("#description__item")
        description__item.append(div)

        // <div class="description__container">
        //     <div>
        //         <img src="http://www.example.com">
        //     </div>
        //     <div>
        //         <h3>Title</h3>
        //         <small>Lorem ipsum dolor sit amet...</small>
        //     </div>
        // </div>
    }
    export const informationLaunchCostRocket = async(cost_per_launch)=>{
        let div = document.createElement('div');
        div.classList.add('description__container')
        let divFirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "storage/img/icons/costEstimate.svg")
        divFirst.append(img);
        
        let divLast = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = "The estimated cost per rocket launch"
        let small = document.createElement('small');
        let money = new Intl.NumberFormat('cop').format(cost_per_launch)
        small.textContent = `$ ${money}`
        divLast.append(h3, small);
        div.append(divFirst, divLast);

        let description__item = document.querySelector("#description__item")
        description__item.append(div)

        // <div class="description__container">
        //     <div>
        //         <img src="http://www.example.com">
        //     </div>
        //     <div>
        //         <h3>Title</h3>
        //         <small>Lorem ipsum dolor sit amet...</small>
        //     </div>
        // </div>
    }
    export const informationFirstFlightRocket = async(first_flight)=>{
        let div = document.createElement('div');
        div.classList.add('description__container')
        let divFirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "storage/img/icons/dateLaunch.svg")
        divFirst.append(img);
        
        let divLast = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = "The date of the first flight of the rocket"
        let small = document.createElement('small');
        small.textContent = first_flight
        divLast.append(h3, small);
        div.append(divFirst, divLast);

        let description__item = document.querySelector("#description__item")
        description__item.append(div)

        // <div class="description__container">
        //     <div>
        //         <img src="http://www.example.com">
        //     </div>
        //     <div>
        //         <h3>Title</h3>
        //         <small>Lorem ipsum dolor sit amet...</small>
        //     </div>
        // </div>
    }
    export const informationWebRocket = async(wikipedia)=>{
        let div = document.createElement('div');
        div.classList.add('description__container')
        let divFirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "storage/img/icons/wikipedia.svg")
        divFirst.append(img);
        
        let divLast = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = "Read more about the coete"
        let a = document.createElement('a');
        a.setAttribute("href", wikipedia)
        a.setAttribute("target", "_blank")
        a.textContent = "Wikipedia"
        divLast.append(h3, a);
        div.append(divFirst, divLast);
        let description__item = document.querySelector("#description__item")
        description__item.append(div)

        // <div class="description__container">
        //     <div>
        //         <img src="http://www.example.com">
        //     </div>
        //     <div>
        //         <h3>Title</h3>
        //         <a href="#" target="_blank">Lorem</a>
        //     </div>
        // </div>
    }

    import {
        getAllRocketEngineTotal,
        getAllRocketEngineThrustVacuumTotal
    } from "../../modules/rockets.js";


    export const informRocketEngineThrustSeaLevel = async (thrust_sea_level) => {
        let { kN: totalKN } = await getAllRocketEngineTotal();
        let pocentaje = (thrust_sea_level.kN * 100) / totalKN;

        // Determinar el color basado en el porcentaje
        let color;
        if (pocentaje <= 33) {
            color = '--color--three'; 
        } else if (pocentaje <= 66) {
            color = '--color--seven'; 
        } else {
            color = '--color--four'; 
        }

        let div = document.createElement('div');
        div.classList.add("information__table__1");

        let divFirst = document.createElement('div');
        divFirst.classList.add("item__progress__bar");
        divFirst.style = `
            background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), 
            conic-gradient(${color} ${pocentaje}%, transparent 0);
        `;

        let divFirstChildren = document.createElement('div');
        divFirstChildren.classList.add("progress__value");

        let strong = document.createElement('strong');
        strong.textContent = "Aceleración Atmosférica";

        let smallFirst = document.createElement('small');
        smallFirst.textContent = `${pocentaje.toFixed(2)} %`;

        let smallLast = document.createElement('small');
        let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN);
        let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf);
        smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`;

        divFirstChildren.append(strong, smallFirst, smallLast);
        divFirst.append(divFirstChildren);
        div.append(divFirst);

        let section__information__1 = document.querySelector("#section__information__1");
        section__information__1.append(div);
    };

    export const informRocketEngineThrustVacuum = async (thrust_vacuum) => {
        let { kN: totalKN } = await getAllRocketEngineThrustVacuumTotal();
        let pocentaje = (thrust_vacuum.kN * 100) / totalKN;

        // Determinar el color basado en el porcentaje
        let color;
        if (pocentaje <= 33) {
            color = '#ff4d4d'; // Rojo para valores bajos
        } else if (pocentaje <= 66) {
            color = '#ffcc00'; // Amarillo para valores medios
        } else {
            color = '#4caf50'; // Verde para valores altos
        }

        let div = document.createElement('div');
        div.classList.add("carousel__item");

        let divFirst = document.createElement('div');
        divFirst.classList.add("item__progress__bar");
        divFirst.style = `
            background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), 
            conic-gradient(${color} ${pocentaje}%, transparent 0);
        `;

        let divFirstChildren = document.createElement('div');
        divFirstChildren.classList.add("progress__value");

        let strong = document.createElement('strong');
        strong.textContent = "Velocidad";

        let smallFirst = document.createElement('small');
        smallFirst.textContent = `${pocentaje.toFixed(2)} %`;

        let smallLast = document.createElement('small');
        let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN);
        let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf);
        smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`;

        divFirstChildren.append(strong, smallFirst, smallLast);
        divFirst.append(divFirstChildren);
        div.append(divFirst);

        let section__information__1 = document.querySelector("#section__information__1");
        section__information__1.append(div);
    };


    import { 
        getRocketMassTotal, 
        getRocketPayloadWeightsTotal, 
        getRocketHeightTotal, 
        getRocketDiameterTotal,
        getRocketSecondStageCompositeFairingDiameterTotal,
        getRocketSecondStageCompositeFairingHeightTotal
    } from "../../modules/rockets.js";


    const calcularPorcentaje = (valor, maximo) => {
        return (valor / maximo) * 100;
    };

    export const progressRocketWeight = async (Rockets) => {
        let { kg } = await getRocketMassTotal();
        let conterDiv = [];

        const colorRanges = [
            { threshold: 30, color: 'var(--color--three)' }, // Azul para valores hasta 30%
            { threshold: 60, color: 'var(--color--seven)' }, // Naranja para valores hasta 60%
            { threshold: 100, color: 'var(--color--four)' }  // Rojo para valores hasta 100%
        ];

        [Rockets].forEach((val) => {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container");

            let divFirst = document.createElement("div");
            let labelFist = document.createElement("label");
            labelFist.textContent = "Rocket weight :";

            let ProgressFist = document.createElement("progress");
            ProgressFist.id = "progressWeight";
            ProgressFist.max = kg;
            ProgressFist.value = val.mass.kg;
            ProgressFist.textContent = `${val.mass.kg}%`;

            // Calcular el porcentaje solo para los colores
            let porcentajeColor = calcularPorcentaje(val.mass.kg, kg);

            // Cambiar el color según el porcentaje
            const selectedColor = colorRanges.find(range => porcentajeColor <= range.threshold).color;
            ProgressFist.style.setProperty('--color', selectedColor);

            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");
            let numKg = new Intl.NumberFormat('cop').format(val.mass.kg);
            let numLb = new Intl.NumberFormat('cop').format(val.mass.lb);
            spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`;

            divFirst.append(labelFist);
            divFirst.append(ProgressFist);
            divLast.append(spanLast);
            divInformationContainer.append(divFirst);
            divInformationContainer.append(divLast);
            conterDiv.push(divInformationContainer);
        });

        let information__2 = document.querySelector("#information__2");
        information__2.append(...conterDiv);
    };
    export const progressPayloadWeights = async(Rockets) => {
        let { kg } = await getRocketPayloadWeightsTotal();
        let conterDiv = [];
        
        Rockets.payload_weights.forEach(val => {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container");

            let divFirst = document.createElement("div");
            let labelFist = document.createElement("label");
            labelFist.textContent = `${val.name} :`;

            let ProgressFist = document.createElement("progress");
            ProgressFist.max = kg;
            ProgressFist.value = val.kg;
            ProgressFist.textContent = `${val.kg}%`;

            // Cambiar color dinámicamente
            const percentage = (val.kg / kg) * 100;
            if (percentage <= 33) {
                ProgressFist.style.setProperty("--color", "var(--color--three)");
            } else if (percentage <= 66) {
                ProgressFist.style.setProperty("--color", "var(--color--seven)");
            } else {
                ProgressFist.style.setProperty("--color", "var(--color--four)");
            }

            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");
            let numKg = new Intl.NumberFormat('cop').format(val.kg);
            let numLb = new Intl.NumberFormat('cop').format(val.lb);
            spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`;

            divFirst.append(labelFist);
            divFirst.append(ProgressFist);
            divLast.append(spanLast);
            divInformationContainer.append(divFirst);
            divInformationContainer.append(divLast);
            conterDiv.push(divInformationContainer);
        });

        let information__2 = document.querySelector("#information__2");
        information__2.append(...conterDiv);
    };

    export const progressHeightRocket = async (Rockets) => {
        let { meters } = await getRocketHeightTotal();
        let conterDiv = [];

        [Rockets.height].forEach(val => {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container");

            let divFirst = document.createElement("div");
            let labelFist = document.createElement("label");
            labelFist.textContent = `Rocket Height :`;

            let ProgressFist = document.createElement("progress");
            ProgressFist.max = meters;
            ProgressFist.value = val.meters;
            ProgressFist.textContent = `${val.meters}%`;

            // Cambiar color dinámicamente
            const percentage = (val.meters / meters) * 100;
            if (percentage <= 33) {
                ProgressFist.style.setProperty("--color", "var(--color--three)");
            } else if (percentage <= 66) {
                ProgressFist.style.setProperty("--color", "var(--color--seven)");
            } else {
                ProgressFist.style.setProperty("--color", "var(--color--four)");
            }

            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");
            let numMeters = new Intl.NumberFormat('cop').format(val.meters);
            let numFeet = new Intl.NumberFormat('cop').format(val.feet);
            spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

            divFirst.append(labelFist);
            divFirst.append(ProgressFist);
            divLast.append(spanLast);
            divInformationContainer.append(divFirst);
            divInformationContainer.append(divLast);
            conterDiv.push(divInformationContainer);
        });

        let information__2 = document.querySelector("#information__2");
        information__2.append(...conterDiv);
    };

    export const progressDiameterRocket = async (Rockets) => {
        let { meters } = await getRocketDiameterTotal();
        let conterDiv = [];

        [Rockets.diameter].forEach(val => {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container");

            let divFirst = document.createElement("div");
            let labelFist = document.createElement("label");
            labelFist.textContent = `Rocket diameter :`;

            let ProgressFist = document.createElement("progress");
            ProgressFist.max = meters;
            ProgressFist.value = val.meters;
            ProgressFist.textContent = `${val.meters}%`;

            // Cambiar color dinámicamente
            const percentage = (val.meters / meters) * 100;
            if (percentage <= 33) {
                ProgressFist.style.setProperty("--color", "var(--color--three)");
            } else if (percentage <= 66) {
                ProgressFist.style.setProperty("--color", "var(--color--seven)");
            } else {
                ProgressFist.style.setProperty("--color", "var(--color--four)");
            }

            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");
            let numMeters = new Intl.NumberFormat('cop').format(val.meters);
            let numFeet = new Intl.NumberFormat('cop').format(val.feet);
            spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

            divFirst.append(labelFist);
            divFirst.append(ProgressFist);
            divLast.append(spanLast);
            divInformationContainer.append(divFirst);
            divInformationContainer.append(divLast);
            conterDiv.push(divInformationContainer);
        });

        let information__2 = document.querySelector("#information__2");
        information__2.append(...conterDiv);
    };
    export const progressSecondStageDiameterRocket = async (Rockets) => {
        let { meters } = await getRocketSecondStageCompositeFairingDiameterTotal();
        let conterDiv = [];

        [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val => {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container");

            let divFirst = document.createElement("div");
            let labelFist = document.createElement("label");
            labelFist.textContent = `Diameter rocket shield :`;

            let ProgressFist = document.createElement("progress");
            ProgressFist.max = meters;

            // Check if val.meters is a finite number before assigning it to the value
            let meterValue = (val && isFinite(val.meters)) ? val.meters : 0;
            ProgressFist.value = meterValue;  // Safely assign value
            ProgressFist.textContent = `${meterValue}%`;  // Use meterValue here as well

            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");

            // Format numbers safely, using fallback values if necessary
            let numMeters = val && isFinite(val.meters) ? new Intl.NumberFormat('cop').format(val.meters) : '0';
            let numFeet = val && isFinite(val.feet) ? new Intl.NumberFormat('cop').format(val.feet) : '0';

            spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

            divFirst.append(labelFist);
            divFirst.append(ProgressFist);
            divLast.append(spanLast);
            divInformationContainer.append(divFirst);
            divInformationContainer.append(divLast);

            conterDiv.push(divInformationContainer);
        });

        let information__2 = document.querySelector("#information__2");
        information__2.append(...conterDiv);
    };

    export const progressSecondStageHeightRocket = async(Rockets)=>{
        let {meters} = await getRocketSecondStageCompositeFairingHeightTotal();
        let conterDiv = [];
        [Rockets.second_stage.payloads.composite_fairing.height].forEach(val => {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container")
            let divFirst = document.createElement("div");
            let labelFist = document.createElement("label");
            labelFist.textContent = `Height rocket shield :`;
        
            let ProgressFist = document.createElement("progress");
            ProgressFist.max = meters;
            ProgressFist.value = `${val.meters}`;
            ProgressFist.textContent = `${val.meters}%`;
        
        
            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");
            let numMeters = new Intl.NumberFormat('cop').format(val.meters)
            let numFeet = new Intl.NumberFormat('cop').format(val.feet)
            spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
        
            divFirst.append(labelFist)
            divFirst.append(ProgressFist)
            divLast.append(spanLast)
            divInformationContainer.append(divFirst)
            divInformationContainer.append(divLast)
            conterDiv.push(divInformationContainer)
        });
        let information__2 = document.querySelector("#information__2");
        information__2.append(...conterDiv)
        // <div class="information__container">
        //     <div>
        //         <label>Totle :</label>
        //         <progress max="100" value="70">70%</progress>
        //     </div>
        //     <div>
        //         <span>0 kg <br> 0 lb</span>
        //     </div>
        // </div>
    }