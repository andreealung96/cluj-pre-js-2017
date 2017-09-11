myApp.EvaluationsEvents = function () {
    this.initEvents = function(buildPage) {
        
        const currentPageButton = document.getElementById("evaluationsPage");
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

        const nextPageButton = document.getElementById("newEvaluationPage");
        nextPageButton.addEventListener("click", function(event) {
            event.preventDefault();
            page = "next"; //page = "next" -> for switching to next page (NewEvPage)
            buildPage();
        });

        const detailsButton = document.getElementsByClassName("details-button");
        for(let i=0; i<detailsButton.length; i++) {
            detailsButton[i].addEventListener("click", function() {
                page = "details"; //page = "details" -> for displaying a new page with candidate details
                buildPage();
            });
        };
    }
}