export const informationCapsules = async (serial, last_update) => {
  let div = document.createElement("div");
  div.classList.add("description__container");
  let divFirst = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", "../../../storage/img/icons/capsule.svg");
  divFirst.append(img);

  let divLast = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = serial;
  let small = document.createElement("small");
  small.textContent = last_update;
  divLast.append(h3, small);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
  // <div class="description__container">
  //     <div>
  //         <img src="http://www.example.com">
  //     </div>
  //     <div>
  //         <h3>Title</h3>
  //         <small>Lorem ipsum dolor sit amet...</small>
  //     </div>
  // </div>
};
export const informationCapsuleReuseCounts = async (reuse_count) => {
  let div = document.createElement("div");
  div.classList.add("description__container");
  let divFirst = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", "../../../storage/img/icons/bx-reset.svg");
  divFirst.append(img);

  let divLast = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Recuento de reutilización";
  let small = document.createElement("small");
  small.textContent = reuse_count;
  divLast.append(h3, small);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
  // <div class="description__container">
  //     <div>
  //         <img src="http://www.example.com">
  //     </div>
  //     <div>
  //         <h3>Title</h3>
  //         <small>Lorem ipsum dolor sit amet...</small>
  //     </div>
  // </div>
};
export const informationCapsuleWaterLandings = async (water_landings) => {
  let div = document.createElement("div");
  div.classList.add("description__container");
  let divFirst = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "../../../storage/img/icons/bx-water.svg"
  );
  divFirst.append(img);

  let divLast = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Aterrizajes acuaticos";
  let small = document.createElement("small");
  small.textContent = water_landings;
  divLast.append(h3, small);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
  // <div class="description__container">
  //     <div>
  //         <img src="http://www.example.com">
  //     </div>
  //     <div>
  //         <h3>Title</h3>
  //         <small>Lorem ipsum dolor sit amet...</small>
  //     </div>
  // </div>
};
export const informationCapsuleLastUpdate = async (last_update) => {
  let div = document.createElement("div");
  div.classList.add("description__container");
  let divFirst = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", "../../../storage/img/icons/bxs-up-arrow-square.svg");
  divFirst.append(img);

  let divLast = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Ultima actializacion";
  let small = document.createElement("small");
  small.innerText = last_update;
  divLast.append(h3, small);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
  // <div class="description__container">
  //     <div>
  //         <img src="http://www.example.com">
  //     </div>
  //     <div>
  //         <h3>Title</h3>
  //         <a href="#" target="_blank">Lorem</a>
  //     </div>
  // </div>
};
export const informationCapsuleLaunches = async (launches, imagesMap) => {
    let section__information__container = document.querySelector(
        ".section__information__container"
    );
    section__information__container.innerHTML = " ";

    // Crear un contenedor principal para la información
    let div = document.createElement("div");
    div.classList.add("centro_del_main");
    div.style.display = "flex"; // Usar flexbox para alinear la imagen y el texto

    // Crear el elemento de encabezado para mostrar la información del lanzamiento
    let h3 = document.createElement("h3");
    h3.textContent = `ID Lanzamiento: ${launches}`;

    div.appendChild(h3);

    let divFirst = document.createElement("div");
    divFirst.classList.add("imageAgg")
    let img1 = document.createElement("img");

    // Cambiar la imagen según el ID del lanzamiento
    img1.setAttribute("src", imagesMap[launches] || "ruta_por_defecto.png"); // Ruta por defecto si no hay imagen
    img1.style.marginRight = "20px";
    divFirst.append(img1);

    div.append(h3);
    div.append(divFirst);

    // Agregar el contenedor principal en el DOM
    section__information__container.append(div);
};

