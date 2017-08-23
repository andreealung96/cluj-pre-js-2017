function EvaluationsPage (options = {}) {
    const headings = [
        'Nume','Tehnologie','Nivel'
    ]
    const rows = [
        {
            name: "Popescu Adrian",
            technology: "Javascript",
            level: "Mid 2"
        },
        {
            name: "Dragan Roxana",
            technology: "PHP",
            level: "Mid 1"
        },
        {
            name: "Florescu Mihai",
            technology: "Javascript",
            level: "Junior 3"
        },
        {
            name: "Gheorghe Andrei",
            technology: "Ruby",
            level: "Senior 1"
        }
    ]
    return `
    ${NAV()}
    ${EvaluationsTable({
        items: rows,
        itemHeadings: headings
    })}
    ${Footer()}
    `;
}

function EvaluationsTableHeader(options) {
    const headings = [];
    options.headings.forEach(function(el) {
        const generatedEl = `<th class="candidates_table_header">${el}</th>`;
        headings.push(generatedEl);
    });
    const headingsEl = `
    ${headings.join('')};`
    return `
    <tr>
        ${headingsEl}
    </tr>
    `;
}

function EvaluationsTableRow (options = {}) {
    return `
    <tr class="rows">
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td style="text-align: right">Detalii <button>+</button></td>
    </tr>
    `
}

function EvaluationsTableBody (options = {}) {
    //const rowsElements = [];
    const rowsElements = options.items.map(function(rowObj){
        return EvaluationsTableRow(rowObj)
    })
    // options.items.forEach(function(rowObj){
    // const generatedRow = EvaluationsTableRow(rowObj)
    // rowsElements.push(generatedRow)    
    const rowsEl = rowsElements.join('');
    return `
    <tbody>    
        ${rowsEl}
    </tbody>
    `
}

function EvaluationsTable (options = {}) {
    return `
    <section>
        <table class="candidates_table">
            ${EvaluationsTableHeader({
                headings: ['Nume','Tehnologie','Nivel'
            ]
        })}
            ${EvaluationsTableBody({
                items: options.items
            })}
        </table>
    </section>
    `
}

window.onload = function () {
    const appEl = document.querySelector("#app");
    appEl.innerHTML = EvaluationsPage();
}