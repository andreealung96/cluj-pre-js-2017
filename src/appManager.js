const PageCreator = function () {}

PageCreator.prototype.app = function(options) {
    if(options.isLogged === false) 
        return {
            view: new LoginPage(),
            events: new LoginEvents()
        }
    if(options.isOnEv === true)
        return {
            view: new NewEvaluationPage(),
            events: new NewEvaluationEvents()
        }  
    if(options.isLogged === true)
        return {
            view: new EvaluationsPage(),
            events: new EvaluationsEvents()
        };     
};

