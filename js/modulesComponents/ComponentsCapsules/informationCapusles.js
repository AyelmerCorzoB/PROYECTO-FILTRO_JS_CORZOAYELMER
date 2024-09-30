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
  img.setAttribute("src", "../../../storage/img/icons/bx-water.svg");
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
  div.style.alignItems = "center"; // Alinear verticalmente al centro
  div.style.gap = "20px"; // Espacio entre los elementos


  
  // Crear un contenedor para la imagen
  let divFirst = document.createElement("div");
  divFirst.classList.add("imageAgg");
  let img1 = document.createElement("img");

  // Cambiar la imagen según el ID del lanzamiento
  img1.setAttribute("src", imagesMap[launches] || "../../../storage/img/Capsules/c101.jpg"); // Ruta por defecto si no hay imagen
  img1.style.marginRight = "20px";
  img1.style.width = "200px"; // Ajusta el tamaño de la imagen si es necesario
  img1.style.height = "auto";
  divFirst.append(img1);

  // Contenedor para el astronauta
  let astronauta = document.createElement("div");

  astronauta.innerHTML = `
    <div class="backg">
      <div class="planet">
        <div class="r1"></div>
        <div class="r2"></div>
        <div class="r3"></div>
        <div class="r4"></div>
        <div class="r5"></div>
        <div class="r6"></div>
        <div class="r7"></div>
        <div class="r8"></div>
        <div class="shad"></div>
      </div>
      <div class="stars">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5"></div>
        <div class="s6"></div>
      </div>
      <div class="an">
        <div class="tank"></div>
        <div class="astro">
          <div class="helmet">
            <div class="glass">
              <div class="shine"></div>
            </div>
          </div>
          <div class="dress">
            <div class="c">
              <div class="btn1"></div>
              <div class="btn2"></div>
              <div class="btn3"></div>
              <div class="btn4"></div>
            </div>
          </div>
          <div class="handl">
            <div class="handl1">
              <div class="glovel">
                <div class="thumbl"></div>
                <div class="b2"></div>
              </div>
            </div>
          </div>
          <div class="handr">
            <div class="handr1">
              <div class="glover">
                <div class="thumbr"></div>
                <div class="b1"></div>
              </div>
            </div>
          </div>
          <div class="legl">
            <div class="bootl1">
              <div class="bootl2"></div>
            </div>
          </div>
          <div class="legr">
            <div class="bootr1">
              <div class="bootr2"></div>
            </div>
          </div>
          <div class="pipe">
            <div class="pipe2">
              <div class="pipe3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Agregar el encabezado, imagen y astronauta al contenedor principal
  div.append(divFirst);
  div.append(astronauta);

  // Agregar el contenedor principal en el DOM
  section__information__container.append(div);
};

