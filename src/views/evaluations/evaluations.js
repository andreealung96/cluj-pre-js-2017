function EvaluationsPage(options = {}) { 
    const evaluationsTableData = getEvaluationsTableData();
    this.markup = `
    ${NAVEvaluations()}
    ${EvaluationsTable(evaluationsTableData)}
    ${Footer()}
    `;
}

function NAVEvaluations(options = {}) {
    return `
    <header class="header skin-header">
        <img class="logo" src="assets/logo-v2.png" alt="The image cannot be displayed">
        <a id="evaluationsPage" class="nav-buttons current-page skin-current-page">Evaluations</a>
        <a id="newEvaluationPage" class="nav-buttons">New Evaluation</a>
        <a id="logout" class="nav-buttons" style="float: right">Logout</a>
    </header>
    `
}

function EvaluationsTable(options = {}) {
    return `
    <section>
        <table class="candidates-table skin-candidates-table">
            ${EvaluationsTableHeader(options)}
            ${EvaluationsTableBody(options)}
        </table>
    </section>
    `;
}

function EvaluationsTableHeader(options = {}) {
    const elements = options.itemHeadings.map(el => `<th class="candidates-table-header skin-candidates-table-header">${el}</th>`).join('');
    return `
    <tr>
        ${elements}
    </tr>
    `;
}

function EvaluationsTableBody(options = {}) {
    const rowsElements = options.items.map(rowObj => EvaluationsTableRow(rowObj));
    const rowsEl = rowsElements.join('');
    return `
    <tbody>    
        ${rowsEl}
    </tbody>
    `;
}

function EvaluationsTableRow(options = {}) {
    return `
    <tr class="rows skin-rows">
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td class="details">Detalii <button class="details-button skin-details-button">+</button></td>
    </tr>
    `;
}

// window.onload = function () {
//     const appEl = document.getElementById('app');
//     appEl.innerHTML = EvaluationsPage();
// };
