export const load = async () => {
    document.querySelector("#header__title").innerHTML = `
        <div class="load"></div>
    `;

    document.querySelector("#description__item").innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    document.querySelector("#section__information__1").innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    document.querySelector("#section__image").innerHTML = `
        <div class="load" style="height: 350px;"></div>
    `;

    document.querySelector("#information__table__2").innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    document.querySelector("#information__2").innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
};

export const clear = async () => {
    let elementsToClear = [
        "#header__title",
        "#description__item",
        "#section__information__1",
        "#section__image",
        "#information__table__1",
        "#information__table__2",
        "#information__2"
    ];

    elementsToClear.forEach(selector => {
        let element = document.querySelector(selector);
        if (element) element.innerHTML = ``;
    });
};
