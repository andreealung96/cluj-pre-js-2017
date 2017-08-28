function EvaluationsPage(options = {}) { 
    const evaluationsTableData = getEvaluationsTableData();
    return `
    ${NAV()}
    ${EvaluationsTable(evaluationsTableData)}
    ${Footer()}
    `;
}

function EvaluationsTableHeader(options = {}) {
    const elements = options.map(el => `<th class="candidates-table-header skin-candidates-table-header">${el}</th>`).join('');
    return `
    <tr>
        ${elements}
    </tr>
    `;
}

function EvaluationsTableRow(options = {}) {
    return `
    <tr class="rows">
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td class="details">Detalii <button class="details-button skin-details-button">+</button></td>
    </tr>
    `;
}

function EvaluationsTableBody(options = {}) {
    const rowsElements = options.map(rowObj => EvaluationsTableRow(rowObj));
    const rowsEl = rowsElements.join('');
    return `
    <tbody>    
        ${rowsEl}
    </tbody>
    `;
}

function EvaluationsTable(options = {}) {
    return `
    <section>
        <table class="candidates-table">
            ${EvaluationsTableHeader(options.itemHeadings)}
            ${EvaluationsTableBody(options.items)}
        </table>
    </section>
    `;
}

window.onload = function () {
    const appEl = document.getElementById('app');
    appEl.innerHTML = EvaluationsPage();
};
