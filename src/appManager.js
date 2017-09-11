var myApp = {};

const PageCreator = function () {}

PageCreator.prototype.app = function(options) {
    if(options.isLogged === false) 
        return {
            view: new myApp.LoginPage(),
            events: new myApp.LoginEvents()
        }
    if(options.isOnEv === true)
        return {
            view: new myApp.NewEvaluationPage(),
            events: new myApp.NewEvaluationEvents()
        }  
    if(options.isLogged === true)
        return {
            view: new myApp.EvaluationsPage(),
            events: new myApp.EvaluationsEvents()
        }
    if(options.isOnDetails === true)
        return {
            view: new myApp.DetailsPage()
        }   
};

