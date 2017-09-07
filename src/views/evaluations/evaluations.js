(function () {
    myApp.EvaluationsPage = function (options = {}) { 
        const evaluationsTableData = getEvaluationsTableData();
        const evData = localStorage.getItem("evaluationsData");
        const tableData = JSON.parse(evData);
        this.markup = `
        ${myApp.NAVEvaluations()}
        ${myApp.EvaluationsTable(evaluationsTableData, tableData)}    
        ${myApp.Footer()}
        `;
    }
    
    myApp.NAVEvaluations = function (options = {}) {
        return `
        <header class="header skin-header">
            <img class="logo" src="assets/logo-v2.png" alt="The image cannot be displayed">
            <a id="evaluationsPage" class="nav-buttons current-page skin-current-page">Evaluations</a>
            <a id="newEvaluationPage" class="nav-buttons">New Evaluation</a>
            <a id="logout" class="nav-buttons" style="float: right">Logout</a>
        </header>
        `
    }
    
    myApp.EvaluationsTable = function (options = {}, tableData) {
        return `
        <section>
            <table class="candidates-table skin-candidates-table">
                ${myApp.EvaluationsTableHeader(options)}
                ${myApp.EvaluationsTableBody(tableData)}
            </table>
        </section>
        `;
    }
    
    myApp.EvaluationsTableHeader = function (options = {}) {
        const elements = options.itemHeadings.map(el => `<th class="candidates-table-header skin-candidates-table-header">${el}</th>`).join('');
        return `
        <tr>
            ${elements}
        </tr>
        `;
    }
    
    myApp.EvaluationsTableBody = function (tableData) {
        const rowsElements = tableData.map((rowObj, i) => myApp.EvaluationsTableRow(rowObj, i));
        const rowsEl = rowsElements.join('');
        return `
        <tbody>    
            ${rowsEl}
        </tbody>
        `;
    }
    
    myApp.EvaluationsTableRow = function (rowObj) {
        const evData = localStorage.getItem("evaluationsData");
        const tableData = JSON.parse(evData);
        return `
        <tr class="rows skin-rows">
            <td>${rowObj.candidateInfo[0].value}</td>
            <td>Javascript</td>
            <td>${rowObj.techLevel[0].value}</td>
            <td class="details">Detalii <button id="details" class="details-button skin-details-button" data-name="${rowObj.candidateInfo[0].value}">+</button></td>
        </tr>
        `;
    }  
})();

