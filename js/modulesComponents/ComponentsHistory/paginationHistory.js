let currentPage = 1;
const itemsPorPagina = 4;

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

async function init() {
    await fetchHistory();
    displayHistory(currentPage, itemsPorPagina);
    setupEventListeners();
}

function setupEventListeners() {
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayHistory(currentPage, itemsPorPagina);
            updatePaginationButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage * itemsPorPagina < historyData.length) {
            currentPage++;
            displayHistory(currentPage, itemsPorPagina);
            updatePaginationButtons();
        }
    });

    updatePaginationButtons();
}

function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPorPagina >= historyData.length;
}

init();