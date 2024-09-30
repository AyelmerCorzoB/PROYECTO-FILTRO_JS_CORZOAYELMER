import { getAllCapsules, getCapsulesId, getAllLaunchImages } from "../../modules/capsules.js"; // Cambié getAllCapsulesId a getCapsulesId
import {
    informationCapsules,
    informationCapsuleReuseCounts,
    informationCapsuleWaterLandings,
    informationCapsuleLaunches,
    informationCapsuleLastUpdate,
} from "./informationCapusles.js";
import { nameCapsules } from "../ComponentsGlobals/title.js";
import { clear } from "./loadAndClearCapsules.js";

// Cambia el nombre de la función que maneja el evento para evitar conflicto
const fetchCapsulesById = async (e) => {
    e.preventDefault();
    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    // Cambia a la función correcta para obtener cápsulas por ID
    let capsules = await getCapsulesId(e.target.id); // Asegúrate de que esta llamada sea correcta
    await clear();

    // Obtener el mapa de imágenes de lanzamientos
    const imagesMap = await getAllLaunchImages(); // Llama a la función que obtiene las imágenes

    await informationCapsules(capsules.type, capsules.status);
    await nameCapsules(capsules.serial);
    await informationCapsuleReuseCounts(capsules.reuse_count);
    await informationCapsuleWaterLandings(capsules.water_landings);
    await informationCapsuleLastUpdate(capsules.last_update);
    
    // Aquí pasamos el mapa de imágenes
    await informationCapsuleLaunches(capsules.launches, imagesMap);
};

// Actualiza la función de paginación para usar el nuevo nombre
export const paginationCapsules = async () => {
    let capsules = await getAllCapsules();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");
    
    capsules.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = id + 1;
        a.addEventListener("click", fetchCapsulesById); // Cambia a fetchCapsulesById
        
        div.appendChild(a);
    });
    
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(div);

    // Simula un clic en el primer elemento
    if (div.children.length > 0) {
        div.children[0].click();
    }

    return div;
};

paginationCapsules();

