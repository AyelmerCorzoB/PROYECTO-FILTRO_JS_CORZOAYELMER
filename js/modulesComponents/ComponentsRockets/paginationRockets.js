// Importaciones necesarias
import { 
    getAllRockets, 
    getAllRocketsId 
} from "../../modules/rockets.js";

import { 
    nameRockets 
} from "../ComponentsGlobals/title.js";

import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    progressRocketWeight
} from "./informationRockets.js";

import { 
    tableRocketColum1, 
    tableRocketColum2 
} from "../ComponentsTables/tablesRockets.js";

import { 
    imageRockets 
} from "../ComponentCards/card.js";

import { 
    progressPayloadWeights,
    progressHeightRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "./informationRockets.js";

import { 
    clear 
} from "../ComponentsGlobals/loadAndClear.js";

// Función para obtener los detalles del cohete
const getRocketsId = async (e) => {
    e.preventDefault();
    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let Rocket = await getAllRocketsId(e.target.id);
    await clear();

    await informationRockets(Rocket.country, Rocket.description);
    await nameRockets(Rocket.name);
    await informationLaunchCostRocket(Rocket.cost_per_launch);
    await informationFirstFlightRocket(Rocket.first_flight);
    await informationWebRocket(Rocket.wikipedia);

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket);
    await tableRocketColum2(Rocket);

    await progressRocketWeight(Rocket);
    await progressHeightRocket(Rocket);
    await progressPayloadWeights(Rocket);
    await progressSecondStageDiameterRocket(Rocket);
    await progressSecondStageHeightRocket(Rocket);
};

// Función para crear botones de paginación
export const paginationRockets = async () => {
    try {
        let rockets = await getAllRockets();
        let div = document.createElement("div");
        div.classList.add("buttom__paginacion");

        // Verificamos si se obtuvieron cohetes
        if (rockets && rockets.length > 0) {
            rockets.forEach((val, id) => {
                let a = document.createElement("a");
                a.setAttribute("href", "#");
                a.id = val.id;
                a.textContent = id + 1; // El índice comienza en 0, así que le sumamos 1
                a.addEventListener("click", getRocketsId);
                div.appendChild(a);
            });

            // Simula un clic en el segundo botón
            if (div.children.length > 1) {
                let a2 = div.children[1];
                a2.click();
            }
        } else {
            console.error("No se encontraron cohetes.");
        }

        return div;
    } catch (error) {
        console.error("Error al obtener cohetes:", error);
    }
};

// Carga y limpieza inicial
await clear();
let paginationDiv = await paginationRockets();
let paginacion = document.querySelector("#paginacion");
if (paginacion) {
    paginacion.innerHTML = ""; // Limpiamos el contenido existente
    paginacion.appendChild(paginationDiv); // Añadimos los botones de paginación
} else {
    console.error("El elemento con ID 'paginacion' no se encontró en el DOM.");
}
