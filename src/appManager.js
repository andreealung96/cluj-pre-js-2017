const PageCreator = function () {}

PageCreator.prototype.app = function(options) {
    if(options.isLogged === false) 
        return {
            view: new LoginPage(),
            events: new LoginEvents()
        }
    return {
        view: new EvaluationsPage(),
        events: new EvaluationsEvents()
    }
};