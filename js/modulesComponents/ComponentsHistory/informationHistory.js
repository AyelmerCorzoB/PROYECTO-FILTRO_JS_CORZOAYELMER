let historyData = [];
const historyContainer = document.getElementById('history-container');

async function fetchHistory() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/history');
        historyData = await response.json();
    } catch (error) {
        console.error("Error al cargar los datos:", error);
        historyContainer.innerHTML = "<p>Error al cargar los datos.</p>";
    }
}


function displayHistory(page, itemsPerPage) {
    historyContainer.innerHTML = '';
    const paginatedItems = getPaginatedItems(page, itemsPerPage);

    paginatedItems.forEach(item => {
        historyContainer.appendChild(createHistoryItemElement(item));
    });
}

function getPaginatedItems(page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return historyData.slice(start, end);
}

function createHistoryItemElement(item) {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
        <h3 class="title-item">${item.title}</h3>
        <p>${item.details || 'No hay detalles disponibles.'}</p>
        <p><strong>Fecha:</strong> ${new Date(item.event_date_utc).toLocaleDateString()}</p>
        <p><strong>Fuente:</strong> <a href="${item.links?.article}" target="_blank">Leer más</a></p>
    `;
    return div;
}
