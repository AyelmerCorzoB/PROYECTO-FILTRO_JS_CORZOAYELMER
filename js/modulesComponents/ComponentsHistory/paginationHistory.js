let currentPage = 1;
const itemsPerPage = 5;

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

async function init() {
    await fetchHistory();
    displayHistory(currentPage, itemsPerPage);
    setupEventListeners();
}

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

function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPerPage >= historyData.length;
}
