export const informationCompany = async (name) => {

    let h1 = document.createElement('h1');
    h1.textContent = name;
    let titulo = document.querySelector("#caja1");

    titulo.append(h1);
};



export const informationIzquierdaCard1 = async (headquarters_address, headquarters_city, headquarters_state) => {
    const caja2 = document.getElementById("caja2");
    const card1 = document.createElement("div");
    card1.classList.add("card1");

    const createInfoSection = (title, description) => {
        const section = document.createElement("div");
        section.classList.add(title.toLowerCase()); 
    
        const titleElement = document.createElement("h3");
        titleElement.textContent = `${title}: `;
    
        const descriptionElement = document.createElement("small");
        descriptionElement.textContent = description;
    
        section.append(titleElement, descriptionElement);
        return section;
    };
    const header = document.createElement("h2");
    header.textContent = "Headquarters";

    const addressSection = createInfoSection("Address", headquarters_address);
    const citySection = createInfoSection("City", headquarters_city);
    const stateSection = createInfoSection("State", headquarters_state);

    card1.append(header, addressSection, citySection, stateSection);
    caja2.append(card1);
};

export const informationIzquierdaCard2 = async (website, flickr, twitter) => {
    const caja2 = document.getElementById("caja2");
    const card2 = document.createElement("div");
    card2.classList.add("card2");

    const header = document.createElement("h2");
    header.textContent = "Links";

    const websiteSection = createLinkSection("Website", website);
    const flickrSection = createLinkSection("Flickr", flickr);
    const twitterSection = createLinkSection("Twitter", twitter);

    card2.append(header, websiteSection, flickrSection, twitterSection);
    caja2.append(card2);
};

const createLinkSection = (title, url) => {
    const section = document.createElement("div");
    section.classList.add(title.toLowerCase()); 

    const titleElement = document.createElement("h3");
    titleElement.textContent = `${title}: `;

    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.textContent = url; 

    section.append(titleElement, linkElement);
    return section;
};


import { iniciarCarrusel } from "./carrusel.js";

export const informationCenterCarrusel = async () => {
    let caja3 = document.getElementById("caja3");

    
    let carrusel = document.createElement("div");
    carrusel.className = "carrusel";

    
    let imagenes = [
        'https://static01.nyt.com/images/2023/09/09/multimedia/09isaacson-book-2-bpcw-esp1/09isaacson-book-2-bpcw-mediumSquareAt3X.jpg',
        'https://www.elcomercio.com/wp-content/uploads/2024/08/elon-musk-2-1024x683.jpg',
        'https://image.cnbcfm.com/api/v1/image/104504783-GettyImages-494548555.jpg?v=1533926309',
        'https://wallpaperaccess.com/full/983904.jpg',
        'https://wallpaperaccess.com/full/983911.jpg',
    ];
    

    
    imagenes.forEach((src, index) => {
        let img = document.createElement("img");
        img.src = src;
        img.className = "carrusel-img";
        if (index !== 0) img.style.display = 'none'; 
        carrusel.appendChild(img);
    });

    
    caja3.append(carrusel);

    iniciarCarrusel(carrusel);
}
export const informationCenterElonk = async (ceo,cto) => {
    let caja3 = document.getElementById("caja3");
    let informationCenterElonk = document.createElement("div");
    informationCenterElonk.classList.add("informationElon")
    let ceoContent = document.createElement("p");
    ceoContent.textContent = `CEO:  ${ceo}`;
    let ctoContent = document.createElement("p");
    ctoContent.textContent = `CTO: ${cto}` ;

    informationCenterElonk.append(ceoContent,ctoContent);
    caja3.append(informationCenterElonk)
} 
export const informationCenterSummary = async (summary) => {
    let caja3 = document.getElementById("caja3");
    let summaryContent = document.createElement("div");
    summaryContent.classList.add("summary");
    let summaryParrafo = document.createElement("p");
    summaryParrafo.textContent = summary;
    summaryContent.append(summaryParrafo);
    caja3.append(summaryContent)
    
} 

export const informationDerecha = async (founder, founded, employees, vehicles, launch_sites, test_sites, valuation) => {
    let caja4 = document.getElementById("caja4");
    let informationDerecha = document.createElement("div");
    informationDerecha.classList.add("informationDerecha");

    const createSection = (label, value, imgUrl) => {
        let section = document.createElement("div");
        section.classList.add("infoSection");

        let img = document.createElement("img");
        img.src = imgUrl; // Use the provided image URL
        img.alt = `${label} Image`;

        let content = document.createElement("p");
        content.innerHTML = `<span>${label}:</span> ${value}`;

        section.appendChild(img);
        section.appendChild(content);
        return section;
    };

    const images = {
        founder: 'storage/img/icons/founder.svg', 
        founded: 'storage/img/icons/founded.svg', 
        employees: 'storage/img/icons/employees.svg', 
        vehicles: 'storage/img/icons/vehicle.svg', 
        launch_sites: 'storage/img/icons/launchSites.svg', 
        test_sites: 'storage/img/icons/testSites.svg', 
        valuation: 'storage/img/icons/valuation.svg' 
    };

    informationDerecha.append(
        createSection("Founder", founder, images.founder),
        createSection("Founded", founded, images.founded),
        createSection("Employees", employees, images.employees),
        createSection("Vehicles", vehicles, images.vehicles),
        createSection("Launch Sites", launch_sites, images.launch_sites),
        createSection("Test Sites", test_sites, images.test_sites),
        createSection("Valuation", valuation, images.valuation)
    );

    caja4.append(informationDerecha);
}

export const informationIcons = async (website, twitter, elon_twitter) => {
    let caja5 = document.getElementById("caja5");

    let iconsDiv = document.createElement("div");
    iconsDiv.classList.add("iconsDiv");

    let websiteLink = document.createElement("a");
    websiteLink.href = website;
    websiteLink.target = "_blank"; 

    let websiteIcon = document.createElement("img");
    websiteIcon.src = "storage/img/icons/world.svg";
    websiteIcon.alt = "Website Icon";

    websiteLink.appendChild(websiteIcon);
    iconsDiv.appendChild(websiteLink);

    let twitterLink = document.createElement("a");
    twitterLink.href = twitter;
    twitterLink.target = "_blank"; 

    let twitterIcon = document.createElement("img");
    twitterIcon.src = "storage/img/icons/twitter.svg"; 
    twitterIcon.alt = "Twitter Icon";

    twitterLink.appendChild(twitterIcon);
    iconsDiv.appendChild(twitterLink);

    let elonTwitterLink = document.createElement("a");
    elonTwitterLink.href = elon_twitter;
    elonTwitterLink.target = "_blank"; 

    let elonTwitterIcon = document.createElement("img");
    elonTwitterIcon.src = "storage/img/icons/elon_twitter.svg"; 
    elonTwitterIcon.alt = "Elon Twitter Icon";

    elonTwitterLink.appendChild(elonTwitterIcon);
    iconsDiv.appendChild(elonTwitterLink);

    caja5.appendChild(iconsDiv);
}

