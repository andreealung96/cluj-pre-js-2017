function EvaluationsPage(options = {}) { 
    const evaluationsTableData = getEvaluationsTableData();
    const evData = localStorage.getItem("evaluationsData");
    const tableData = JSON.parse(evData);
    this.markup = `
    ${NAVEvaluations()}
    ${EvaluationsTable(evaluationsTableData, tableData)}
    ${Modal(tableData)}
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

function EvaluationsTable(options = {}, tableData) {
    return `
    <section>
        <table class="candidates-table skin-candidates-table">
            ${EvaluationsTableHeader(options)}
            ${EvaluationsTableBody(tableData)}
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

function EvaluationsTableBody(tableData) {
    const rowsElements = tableData.map(rowObj => EvaluationsTableRow(rowObj));
    const rowsEl = rowsElements.join('');
    return `
    <tbody>    
        ${rowsEl}
    </tbody>
    `;
}

function EvaluationsTableRow(rowObj) {
    return `
    <tr class="rows skin-rows">
        <td>${rowObj.candidateInfo[0].value}</td>
        <td>Javascript</td>
        <td>${rowObj.techLevel[0].value}</td>
        <td class="details">Detalii <button id="details" class="details-button skin-details-button">+</button></td>
    </tr>
    `;
}

function Modal(tableData) {
    return `
    <div id="modal" class="modal">
            <span class="close">&times;</span>
            <p>Candidate Info:</p>
            <table class="modal-table">
                <tr>
                    <td class="modal-table-data">Candidate Name</td>
                    <td class="modal-table-data"></td>
                </tr>
                <tr>
                    <td class="modal-table-data">Interviewer</td>
                    <td class="modal-table-data"></td>
                </tr>
                <tr>
                    <td class="modal-table-data">Interview Date</td>
                    <td class="modal-table-data"></td>
                </tr>
                <tr>
                    <td class="modal-table-data">Should the candidate be hired?</td>
                    <td class="modal-table-data"></td>
                </tr>
                <tr>
                    <td class="modal-table-data">General Impression</td>
                    <td class="modal-table-data"></td>
                </tr>
                <tr>
                    <td class="modal-table-data">Workflow, Leadership & Softskills</td>
                    <td class="modal-table-data"></td>
                </tr>                
            </table>
    </div>
    `
}

// window.onload = function () {
//     const appEl = document.getElementById('app');
//     appEl.innerHTML = EvaluationsPage();
// };