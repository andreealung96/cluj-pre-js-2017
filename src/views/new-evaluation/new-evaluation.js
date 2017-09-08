function getPromise(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.readyState === 4) {
                if (this.status < 400) {
                    try {
                        let data = JSON.parse(xhr.responseText);
                        myApp.NewEvaluationPage(data);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }
        xhr.open(method, url);
        xhr.send();
    }
    )
}


  (function() {
    myApp.NewEvaluationPage = function(options = {}) {
        this.markup = `
        ${myApp.NAVNewEvaluation()}
        ${myApp.NewEvaluationForm(options)} 
        ${myApp.Footer()} 
        `;
    }
    
    myApp.NAVNewEvaluation = function() {
        return `
        <header class="header skin-header">
            <img class="logo" src="assets/logo-v2.png">
            <a id="evaluationsPageRef" class="menu-button">Evaluations</a>
            <a id="newEvaluationPage"class="menu-button current-menu-button skin-current-menu-button">New Evaluation</a>
            <a id="logout" class="menu-button" style="float: right">Logout</a>
        </header>
        `;
    } 
    
    myApp.NewEvaluationForm = function (options = {}) {
        const technical = options.technicalLevel;
        const textarea = options.textarea;
        const fieldset = options.fieldset;
        return `
        <div class="evaluation-form">
        <form id="newEvaluationForm" method="post" action="">
            ${myApp.CandidateDetailsForm()}
            ${myApp.TechnicalLevelPicker(technical)}
            ${myApp.Textarea(textarea)}
            ${myApp.Fieldset(fieldset)}
            ${myApp.SubmitButton()}
            <div style="clear: both"></div> 
        </form>
        </div>
        `;
    }
    
    myApp.CandidateDetailsForm = function() {
        return `
        <div>
            <input class="evaluation-form-header skin-evaluation-form-header" type="text" name="Candidate" placeholder="Candidate">
            <input class="evaluation-form-header skin-evaluation-form-header" type="text" name="Interviewer" placeholder="Interviewer">
            <input class="evaluation-form-header skin-evaluation-form-header" type="date" name="Date" value="04/22/2012">
        </div>
        `;
    }
    
    myApp.TechnicalLevelPicker = function(options = {}) {
        const tableHeader = options.headers.map(el => `<th>${el}</th>`);
        const headersEl = tableHeader.join('');
        const tableData = options.columnData.map((el) => {
            const inputEl = el.inputValues.map(el => `<input class="radioButtons" type="radio" name="level" value="${el}"/>`).join('');
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
    
    myApp.Textarea = function(options = {}) {
        const textareaEl = options.textarea.map(el => `
            <h2 class="evaluation-category">${el.label}</h2>
            <textarea class="evaluation-comments"  name="textarea" rows="5" cols="132" placeholder="${el.placeholder}"></textarea>
            `).join('');
        return `
        <section>
        ${textareaEl}
        </section>
        `;
    }
    
    myApp.Fieldset = function(options = {}) {
        //const fieldset = getFieldset();
        const fieldsetEl = options.fieldset.map(el => `
            <fieldset class="evaluation-options skin-evaluation-options">
                <legend class="evaluation-category">${el.legend}</legend>
                ${myApp.FieldsetRow(el.ul[0])} 
                ${myApp.FieldsetRow(el.ul[1])}                               
            </fieldset>
            `).join('');
        return `
        <section>
        ${fieldsetEl}
        </section>
        `;
    }
    
    myApp.FieldsetRow = function(options = {}) { 
        const row = options.row.map(el => {
            const optionsHTML = el.options.map( option => 
                `<option>${option}</option>`).join('');
            return `<li>${el.label}</li>
             <li>
                <select class="evaluation-select" name="dropdown-selector">
                     ${optionsHTML}
                </select>
             </li>
            `
        }).join('');
        return `<ul>
            ${row}
        </ul>`;
    }
    
    
    myApp.SubmitButton = function() {
        return `
        <button id="submit" class="evaluation-form-submit skin-evaluation-form-submit" type="submit">Submit</button>
        `
    }
  })();      
       
        
    getPromise('GET', '../../src/data/data.json')
    .then(function (what) {
        console.log(what);
    })
    .catch(function (e) {
        console.log(e);
    });       
       