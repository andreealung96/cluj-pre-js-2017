window.onload = function () {
    
    function DisplayEvPage() {
        appEl.innerHTML = EvaluationsPage();
    }

    function DisplayNewEvPage() {
        appEl.innerHTML = NewEvaluationPage();
    }

    function PreventEvPage(el) {
        el.addEventListener("click", function (event) {
            event.preventDefault();
        });
    }

    function PreventNewEvPage() {
        newEvaluationPage.addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
    
    const appEl = document.getElementById("app");
    appEl.innerHTML = LoginPage();
    const loginEl = document.getElementById("login-button");
    loginEl.addEventListener("click", function () {
        DisplayEvPage();        
        const evaluationsPage = document.getElementById("evaluationsPage");
        PreventEvPage(evaluationsPage);
        const newEvaluationPage = document.getElementById("newEvaluationPage");
        PreventNewEvPage();
        newEvaluationPage.addEventListener("click", function () {
            DisplayNewEvPage();
            const evaluationsPageRef = document.getElementById("evaluationsPageRef");
            PreventEvPage(evaluationsPageRef);
            evaluationsPageRef.addEventListener("click", function () {
                DisplayEvPage();
            });
        });
    });    
}


