const newEvaluationEvents = function () {
    this.initEvents = function() {
        const currentPageButton = document.getElementById("newEvaluationPage");
        currentPageButton.addEventListener("click", function(event) {
            event.preventDefault();
        });
        const switchPage = document.getElementById("evaluationsPageRef");
        
        //not finished yet
        
        switchPage.addEventListener("click", function() {
            return {
                view: new EvaluationsPage(),
                events: new EvaluationsEvents()
            }
        });
    }
}