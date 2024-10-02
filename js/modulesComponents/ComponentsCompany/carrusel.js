
export const iniciarCarrusel = (carrusel) => {
    let index = 0;
    const imagenes = carrusel.querySelectorAll(".carrusel-img");
    const totalImagenes = imagenes.length;

    setInterval(() => {
        imagenes[index].style.display = 'none'; 
        index = (index + 1) % totalImagenes;
        imagenes[index].style.display = 'block'; 
    }, 3000); 
}