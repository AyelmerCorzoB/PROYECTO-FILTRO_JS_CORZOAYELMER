let currentPage = 1;
const itemsPerPage = 5;

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Inicializa la aplicación
async function init() {
    await fetchHistory();
    displayHistory(currentPage, itemsPerPage);
    setupEventListeners();
}

// Configura los escuchadores de eventos para los botones de paginación
function setupEventListeners() {
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayHistory(currentPage, itemsPerPage);
            updatePaginationButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage * itemsPerPage < historyData.length) {
            currentPage++;
            displayHistory(currentPage, itemsPerPage);
            updatePaginationButtons();
        }
    });

    updatePaginationButtons();
}

// Actualiza los botones de paginación
function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPerPage >= historyData.length;
}
