const NewEvaluationEvents = function () {
    this.initEvents = function(buildPage) {
        
        const currentPageButton = document.getElementById("newEvaluationPage");
        currentPageButton.addEventListener("click", function(event) {
            event.preventDefault();            
        });

        const logoutButton = document.getElementById("logout");
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.dataStorage.remove("userData");
            page = "login"; //page = "login" -> for displaying login page
            buildPage();
        }); 

        const prevPageButton = document.getElementById("evaluationsPageRef");
        prevPageButton.addEventListener("click", function(event) {
            event.preventDefault();
            page = "prev"; //page = "prev" -> for switching to prev page (EvPage)
            buildPage();
        });

        const submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            getFormData();            
        });
    }
}



        