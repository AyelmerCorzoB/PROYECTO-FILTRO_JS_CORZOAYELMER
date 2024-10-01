export const informationCompany = async (name) => {

    let h1 = document.createElement('h1');
    h1.textContent = name;
    let titulo = document.querySelector("#caja1");

    titulo.append(h1);
};


export const informationIzquierdaCard1 = async (headquarters_address, headquarters_city, headquarters_state) => {
    let caja2 = document.getElementById("caja2");

    let card1 = document.createElement("div");
    card1.classList.add("card1")
    let h2 = document.createElement("h2")
    h2.textContent = "Headquarters"

    let address = document.createElement("div");
        address.classList.add("addres");

        let adressTit = document.createElement("h3");
        adressTit.textContent = "Adress: ";

        let adressDes = document.createElement("small");
        adressDes.textContent = headquarters_address;
        
        address.append(adressTit, adressDes)

    let city = document.createElement("div");
        city.classList.add("city")

        let cityTit = document.createElement("h3");
        cityTit.textContent = "City: ";

        let cityDes = document.createElement("small");
        cityDes.textContent = headquarters_city;

        city.append(cityTit,cityDes)


    let state = document.createElement("div");
        state.classList.add("state")

        let stateTit = document.createElement("h3");
        stateTit.textContent = "City: ";

        let stateDes = document.createElement("small");
        stateDes.textContent = headquarters_state;

        state.append(stateTit,stateDes)

    card1.append(h2,address, city, state)


    caja2.append(card1)
}


export const informationIzquierdaCard2 = async (website,flickr,twitter,elon_twitter) => {
    let caja2 = document.getElementById("caja2");
    let card2 = document.createElement("div");
    card2.classList.add("card2")
    let links = document.createElement("h2")
    links.textContent = "links"

    let websiteContent = document.createElement("div");
        websiteContent.classList.add("website");

        let websiteTit = document.createElement("h3");
        websiteTit.textContent = "WebSite: ";

        let websiteDes = document.createElement("a");
        websiteDes.href = website;
        websiteDes.textContent = website;
        
        websiteContent.append(websiteTit, websiteDes)

    let flickrContent = document.createElement("div");
        flickrContent.classList.add("flickr")

        let flickrTit = document.createElement("h3");
        flickrTit.textContent = "Flickr: ";

        let flickrDes = document.createElement("a");
        flickrDes.href = flickr;
        flickrDes.textContent = flickr;

        flickrContent.append(flickrTit,flickrDes)


    let twitterContent = document.createElement("div");
        twitterContent.classList.add("twitter")

        let twitterTit = document.createElement("h3");
        twitterTit.textContent = "Twiter: ";

        let twitterDes = document.createElement("a");
        twitterDes.href = twitter;
        twitterDes.textContent = twitter

        twitterContent.append(twitterTit,twitterDes)

    
    card2.append(links, websiteContent, flickrContent, twitterContent)
    caja2.append(card2)
}

export const informationCenterCarrusel = async () => {
    
} 