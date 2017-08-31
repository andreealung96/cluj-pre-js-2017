function NewEvaluationPage(options = {}) {
    this.markup = `
    ${NAVNewEvaluation()}
    ${NewEvaluationForm()} 
    ${Footer()} 
    `;
}

function NAVNewEvaluation(options = {}) {
    return `
    <header class="header skin-header">
        <img class="logo" src="assets/logo-v2.png">
        <a id="evaluationsPageRef" class="menu-button">Evaluations</a>
        <a id="newEvaluationPage"class="menu-button current-menu-button skin-current-menu-button">New Evaluation</a>
        <a id="logout" class="menu-button" style="float: right">Logout</a>
    </header>
    `;
}

function NewEvaluationForm(options = {}) {
    const technical = getTechnicalLevel();
    const textarea = getTextarea();
    const fieldset = getFieldset();
    return `
    <div class="evaluation-form">
    <form id="newEvaluationForm" method="post" action="">
        ${CandidateDetailsForm()}
        ${TechnicalLevelPicker(technical)}
        ${Textarea(textarea)}
        ${Fieldset(fieldset)}
        ${SubmitButton()}
        <div style="clear: both"></div> 
    </form>
    </div>
    `;
}

function CandidateDetailsForm(options = {}) {
    return `
    <div>
        <input id="candidate" class="evaluation-form-header skin-evaluation-form-header" type="text" name="Candidate" placeholder="Candidate">
        <input id="interviewer" class="evaluation-form-header skin-evaluation-form-header" type="text" name="Interviewer" placeholder="Interviewer">
        <input id="date" class="evaluation-form-header skin-evaluation-form-header" type="date" name="Date" value="04/22/2012">
    </div>
    `;
}

function TechnicalLevelPicker(options = {}) {
    const tableHeader = options.headers.map(el => `<th>${el}</th>`);
    const headersEl = tableHeader.join('');
    const tableData = options.columnData.map((el) => {
        const inputEl = el.inputValues.map(el => `<input type="radio" name="level" value="${el}"/>`).join('');
        return `<td>${inputEl}</td>`;
    });
    return `
    <h2 class="evaluation-category">${options.title}</h2>
    <table class="evaluation-form-table skin-evaluation-form-table">
        <tr class="evaluation-form-table-header skin-evaluation-form-table-header">
            ${headersEl}
        </tr>
        <tr class="evaluation-form-table-content skin-evaluation-form-table-content">
            ${tableData.join('')}
        </tr>
    </table>
    `;
}

function Textarea(options = {}) {
    const textareaEl = options.textarea.map(el => `
        <h2 class="evaluation-category">${el.label}</h2>
        <textarea class="evaluation-comments" rows="5" cols="132" placeholder="${el.placeholder}"></textarea>
        `).join('');
    return `
    <section>
    ${textareaEl}
    </section>
    `;
}

function Fieldset(options = {}) {
    const fieldset = getFieldset();
    const fieldsetEl = options.fieldset.map(el => `
        <fieldset class="evaluation-options skin-evaluation-options">
            <legend class="evaluation-category">${el.legend}</legend>
            ${FieldsetRow(el.ul[0])} 
            ${FieldsetRow(el.ul[1])}                               
        </fieldset>
        `).join('');
    return `
    <section>
    ${fieldsetEl}
    </section>
    `;
}

function FieldsetRow(options = {}) {
    const row = options.row.map(el => {
        const optionsHTML = el.options.map( option => 
            `<option>${option}</option>`).join('');
        return `<li>${el.label}</li>
         <li>
            <select>
                 ${optionsHTML}
            </select>
         </li>
        `
    }).join('');
    return `<ul>
        ${row}
    </ul>`;
}


function SubmitButton(options = {}) {
    return `
    <button id="submit" class="evaluation-form-submit skin-evaluation-form-submit" type="submit">Submit</button>
    `
}

// window.onload = function () {
//     const appEl = document.getElementById('app');
//     appEl.innerHTML = NewEvaluationPage();
// };
