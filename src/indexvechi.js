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
            // const submitButton = document.getElementById("submit");
            // submitButton.addEventListener("click", function (event) {
            //     event.preventDefault();
            // });
            // function DataObjConstructor() {
            //     var input =
            //     this.Candidate = document.getElementById("candidate").placeholder;
            // };
            // var data = new DataObjConstructor();
            // var input = data.get()
            // submitButton.addEventListener("click", function newObj(){
            //     alert(data.Candidate);
            // });
                // nume: "andreea",
                // varsta: 21
                //  = cand;
                // this.Interviewer = int;
                //this.InterviewDate = date;
                //const cand = 
                //const int = document.getElementById("interviewer").value;
                //const date = document.getElementById("date").value;
                // this.TechnicalLevel = 
                // this.HiringComments = 
                // this.GeneralImpression = 
                // this.SkillsComments =
                // this.EvaluationCategory = 
            const submitButton = document.getElementById("submit");
            submitButton.addEventListener("click",handleFormSubmit);         
            const evaluationsPageRef = document.getElementById("evaluationsPageRef");
            PreventEvPage(evaluationsPageRef);
            evaluationsPageRef.addEventListener("click", function () {
                DisplayEvPage();
            });
        });
    });    
}



