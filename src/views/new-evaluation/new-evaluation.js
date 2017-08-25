function NewEvaluationPage (options = {}) {
    return `
    ${NAVNewEvaluations()}
    ${NewEvaluationForm()} 
    ${Footer()} 
    `;
}

function NAVNewEvaluations (options = {}) {
    return `
    <header class="header">
        <img class="logo" src="assets/logo-v2.png">
        <a class="menu_button" href="evaluations.html">Evaluations</a>
        <a class="menu_button current_menu_button" href="new-evaluation.html">New Evaluation</a>
        <a class="menu_button" href="login.html" style="float: right">Logout</a>
    </header>
    `;
}

function CandidateDetailsForm (options = {}) {
    return `
    <div>
        <input class="evaluation_form_header" type="text"  name="Candidate" placeholder="Candidate">
        <input class="evaluation_form_header" type="text" name="Interviewer" placeholder="Interviewer">
        <input class="evaluation_form_header" type="date" name="Date" value="04/22/2012">
    </div>
    `;
}

function TechnicalLevelPicker (option = {}) {
    return `
    <h2 class="evaluation_category">Technical level</h2>
        <table class="evaluation_form_table">
            <tr class="evaluation_form_table_header skin_evaluation_form_table_header">
                <th>Trainee</th>
                <th>Junior</th>
                <th>Middle</th>
                <th>Senior</th>
            </tr>
            <tr class="evaluation_form_table_content">
                <td>
                    <input type="radio" name="level" value="Trainee"></td>
                <td>
                    <input type="radio" name="level" value="Junior1">
                    <input type="radio" name="level" value="Junior2">
                    <input type="radio" name="level" value="Junior3">
                </td>
                   <td>
                    <input type="radio" name="level" value="Middle1">
                    <input type="radio" name="level" value="Middle2">
                    <input type="radio" name="level" value="Middle3">
                   </td>
                    <td>
                    <input type="radio" name="level" value="Senior1">
                    <input type="radio" name="level" value="Senior2">
                    <input type="radio" name="level" value="Senior3">
                </td>
            </tr>
        </table>
    `;
}

function Textarea (options = {}) {
    return `
    <h2 class="evaluation_category">${options.label}</h2>
    <textarea class="evaluation_comments" rows="5" cols="132" placeholder="${options.placeholder}"></textarea>
    `;
}

function NewEvaluationForm (option = {}) {
    return `
    <div class="evaluation_form">
    <form method="post" action="action.php">
        ${CandidateDetailsForm()}
        ${TechnicalLevelPicker()}
        ${Textarea()}
        ${Textarea()}
        ${Textarea()}
        <fieldset class="evaluation_options">
            <legend class="evaluation_category">OOP, Design Patterns</legend>
            <ul>
                <li>Classes</li>
                <li>
                    <select name="classes">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Exception handling</li>
                <li>
                    <select name="exception_handling">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Version Control</li>
                <li>
                    <select name="version_control">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>Access modifiers</li>
                <li>
                    <select name="access_mod">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Design Patterns</li>
                <li>
                    <select name="des_patt">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Issue Tracking</li>
                <li>
                    <select name="issue_track">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>Polymorphism</li>
                <li>
                    <select name="polymorphism">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>RegEx</li>
                <li>
                    <select name="regex">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
        </fieldset>
        <fieldset class="evaluation_options">
            <legend class="evaluation_category">HTTP</legend>
            <ul>
                <li>Protocol</li>
                <li>
                    <select name="http"> 
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Response codes</li>
                <li>
                    <select name="response_codes">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>REST</li>
                <li>
                    <select name="rest">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>HEADERS</li>
                <li>
                    <select name="headers">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Request methods</li>
                <li>
                    <select name="req_meth">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Sessions &amp; Cookies</li>
                <li>
                    <select name="sessions_cookies">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
        </fieldset>
        <fieldset class="evaluation_options">
            <legend class="evaluation_category">HTML</legend>
            <ul>
                <li>Doctype</li>
                <li>
                    <select name="doctype">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Tags</li>
                <li>
                    <select name="tags">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Basic SEO</li>
                <li>
                    <select name="seo">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul><ul>
                <li>Syntax rules</li>
                <li>
                    <select name="syntax">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Attributes</li>
                <li>
                    <select name="attributes">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
        </fieldset>
        <fieldset class="evaluation_options">
            <legend class="evaluation_category">CSS</legend>
            <ul>
                <li>Usage</li>
                <li>
                    <select name="usage">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Box modeling</li>
                <li>
                    <select name="box">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>CSS 3.0</li>
                <li>
                    <select name="css">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>Selectors</li>
                <li>
                    <select name="selectors">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Styling</li>
                <li>
                    <select name="styling">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Dynamic Stylesheets</li>
                <li>
                    <select name="dyn_stylesheets">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
        </fieldset>
        <fieldset class="evaluation_options">
            <legend class="evaluation_category">Javascript</legend>
            <ul>
                <li>Data types &amp; variables</li>
                <li>
                    <select name="js">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Object manipulation</li>
                <li>
                    <select name="manipulation">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>DOM Manipulation</li>
                <li>
                    <select name="dom">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>Functions</li>
                <li>
                    <select name="functions">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Templating</li>
                <li>
                    <select name="templating">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Event Handling</li>
                <li>
                    <select name="event">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>Prototype &amp; OOP</li>
                <li>
                    <select name="prototype">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Testing (unit, E2E)</li>
                <li>
                    <select name="testing">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>AJAX</li>
                <li>
                    <select name="ajax">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>Debugging</li>
                <li>
                    <select name="debugging">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Websockets</li>
                <li>
                    <select name="websockets">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Tooling</li>
                <li>
                    <select name="tooling">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>Libraries</li>
                <li>
                    <select name="libraries">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Promises</li>
                <li>
                    <select name="promises">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Browser Engines</li>
                <li>
                    <select name="browser">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
            </ul>
            <ul>
            <li>Frameworks</li>
            <li>
                <select name="frameworks">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
            </li>
            </ul>
        </fieldset>
        <fieldset class="evaluation_options">
            <legend class="evaluation_category">NodeJS</legend>
            <ul>
            <li>Backend frameworks</li>
            <li>
                <select name="backend">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
            </li>
            <li>Templating</li>
            <li>
                <select name="templating">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
            </li>
            <li>DOM Manipulation</li>
            <li>
                <select name="dom_manip">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
            </li>
            </ul>
            <ul>
            <li>Unit Testing</li>
            <li>
                <select name="unit_test">
                        <option selected disabled hidden>Evaluation</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
            </li>
            </ul>
        </fieldset>
        <button class="evaluation_form_submit skin_evaluation_form_submit" type="submit">Submit</button>
        <div style="clear: both"></div> 
    </form>
    </div>
    `;
}

window.onload = function () {
    const appEl = document.querySelector("#app");
    appEl.innerHTML = NewEvaluationPage();
}