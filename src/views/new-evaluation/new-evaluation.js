function NewEvaluationPage(options = {}) {
    return `
    ${NAVNewEvaluations()}
    ${NewEvaluationForm()} 
    ${Footer()} 
    `;
}

function NAVNewEvaluations(options = {}) {
    return `
    <header class="header">
        <img class="logo" src="assets/logo-v2.png">
        <a class="menu_button" href="evaluations.html">Evaluations</a>
        <a class="menu_button current_menu_button" href="new-evaluation.html">New Evaluation</a>
        <a class="menu_button" href="login.html" style="float: right">Logout</a>
    </header>
    `;
}

function CandidateDetailsForm(options = {}) {
    return `
    <div>
        <input class="evaluation_form_header" type="text"  name="Candidate" placeholder="Candidate">
        <input class="evaluation_form_header" type="text" name="Interviewer" placeholder="Interviewer">
        <input class="evaluation_form_header" type="date" name="Date" value="04/22/2012">
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
    <h2 class="evaluation_category">${options.title}</h2>
    <table class="evaluation_form_table">
        <tr class="evaluation_form_table_header skin_evaluation_form_table_header">
            ${headersEl}
        </tr>
        <tr class="evaluation_form_table_content">
            ${tableData.join('')}
        </tr>
    </table>
    `;
}

function Textarea(options = {}) {
    const textareaEl = options.textarea.map(el => `
        <h2 class="evaluation_category">${el.label}</h2>
        <textarea class="evaluation_comments" rows="5" cols="132" placeholder="${el.placeholder}"></textarea>
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
        <fieldset class="evaluation_options">
            <legend class="evaluation_category">${el.legend}</legend>
            ${FieldsetRow(el.ul[0])}
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
        const optionsHTML = el.options.map( (option) => 
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

function NewEvaluationForm(options = {}) {
    const technical = getTechnicalLevel();
    const textarea = getTextarea();
    const fieldset = getFieldset();
    return `
    <div class="evaluation_form">
    <form method="post" action="action.php">
        ${CandidateDetailsForm()}
        ${TechnicalLevelPicker(technical)}
        ${Textarea(textarea)}
        ${Fieldset(fieldset)}
        <button class="evaluation_form_submit skin_evaluation_form_submit" type="submit">Submit</button>
        <div style="clear: both"></div> 
    </form>
    </div>
    `;
}

window.onload = function () {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = NewEvaluationPage();
};
