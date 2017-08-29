const Footer = function () {
    return `
    <footer class="footer skin-footer">
        Copyright@Softvision2017
    </footer>
    `;
}

const NAV = function (options = {}) {
    return `
    <header class="header skin-header">
        <img class="logo" src="assets/logo-v2.png" alt="The image cannot be displayed">
        <a class="nav-buttons current-page" href="evaluations.html">Evaluations</a>
        <a class="nav-buttons" href="new-evaluation.html">New Evaluation</a>
        <a class="nav-buttons" style="float: right" href="login.html">Logout</a>
    </header>
    `
}

const LoginForm = function (options) {
    return `
    <div class="login skin-login rounded-border">
        <div class="login-header skin-login-header rounded-border text-center">Interview Feedback</div>
        <form action="" method="post">
            <input class="login-input skin-login-input login-input-1" type="text" name="username" placeholder="Username"><p>
            <input class="login-input skin-login-input login-input-2" type="password" name="password" placeholder="Password"><p>
            <button class="login-submit skin-login-submit rounded-border" type="Submit">Login</button>
        </form>
    </div>
    `;
};


