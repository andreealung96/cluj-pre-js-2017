const EvaluationsEvents = function () {
    this.initEvents = function(buildPage) {
        const logoutButton = document.getElementById("logout");
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.dataStorage.remove("userData");
            buildPage();
        });
        const currentPageButton = document.getElementById("evaluationsPage");
        currentPageButton.addEventListener("click", function(event) {
            event.preventDefault();
        });
    }
}