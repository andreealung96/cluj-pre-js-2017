const EvaluationsEvents = function () {
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

        const detailsButton = document.getElementById("details");
        detailsButton.addEventListener("click", function() {
            const modal = document.getElementById("modal");
            modal.style.display = "block";
        });

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}