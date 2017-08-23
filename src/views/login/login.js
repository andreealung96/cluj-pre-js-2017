const LoginForm = function (options) {
    return `
    <div class="login skin_login">
        <div class="login_header skin_login_header">Interview Feedback</div>
        <form action="" method="post">
            <input class="login_input" style="margin-top: 90px" type="text" name="username" placeholder="Username"><p>
            <input class="login_input" style="margin-bottom: 45px" type="password" name="password" placeholder="Password"><p>
            <button class="login_submit skin_login_submit" type="Submit">Login</button>
        </form>
    </div>
    `;
};

const LoginHeader = function (options) {
    return `
    <header>
    <img class="banner" src="assets/feedback-banner.jpg">
        ${LoginForm()};
    </header>
    `;
}

const SubmitFeedbackSection = function (options) {
    return `
    <section class="section1">
    <img id="img1" src="assets/new feedback.jpg">
    <h3 style="font-family: Arial" >Submit new feedback</h3>
    <p style="padding-top: 15px; font-family: Arial; font-size: 12px; vertical-align: middle">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
    nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
    tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
    nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
    tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
    sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
    amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
    arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
    </p>
    </section>
    `;
};

const SubmitFeedbackResults = function (options) {
    return `
    <section class="section2">
    <img id="img2" src="assets/results.jpg">
    <h3 style="font-family: Arial">View feedback results</h3>
    <p style="font-family: Arial; font-size: 12px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
    nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
    tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
    nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
    tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
    sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
    amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
    arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
    </p>
    </section>   
    `;
};

const Footer = function (options) {
    return `
    <footer class="skin_footer">
    Copyright@Softvision2017
    </footer>
    `;
}

const loginHTML = function () {
    return `
    ${LoginForm()}
    ${LoginHeader()}
    ${SubmitFeedbackSection()}
    ${SubmitFeedbackResults()}
    ${Footer()}
    `;
};

window.onload = function() {
    const body = document.querySelector("#app");
    body.innerHTML = loginHTML();
}






/* const DropdownSelector = function (options){
    const optionsEl = [];
    for (let i=0; i< options.items.length; i++) {
        optionsEl.push('<option>${options.items[i]}</option>');
    }
    return `
        ${options.label}
    <select>
    ${optionsEl.join('')}
    </select>
    `
}

const sel = DropdownSelector(
{
    label: 'Classes',
    items: ["0","1","2"]
}
)

window.onload = function() {
    const divEl = document.querySelector("#app");
    divEl.innerHTML = sel;
}
*/


