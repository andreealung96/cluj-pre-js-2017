//page = "login" -> for displaying login page
//page = "next" -> for switching to next page (NewEvPage)
//page = "prev" -> for switching to prev page (EvPage)
//page = "details" -> for displaying a new page with candidate details

var page = "login"; 

(function () {
    
    window.dataStorage = new LocalStorageWrapper();
    const appEl = document.getElementById("app");
    const appMg = new PageCreator();

    myApp.isLogged = function () {
        return !!window.dataStorage.get("userData");
    }

    myApp.isOnEv = function () {
        return true;
    }

    myApp.isOnDetails = function () {
        return true;
    }

    myApp.isOnNewEv = function () {
        return true;
    }

    const buildPage = function () {
        
        const component = appMg.app({
            isLogged: myApp.isLogged()
        });
        appEl.innerHTML = component.view.markup;
        if(component.events!==undefined) {
            component.events.initEvents(buildPage);
        };

        //page = "next" -> for switching to next page (NewEvPage)

        if(page === "next") {
            const switcher = appMg.app({
                isOnEv: myApp.isOnEv()
            });
            appEl.innerHTML = switcher.view.markup;
            if(switcher.events!==undefined) {
                switcher.events.initEvents(buildPage);
            };  
        }  

        //page = "prev" -> for switching to prev page (EvPage)

        if(page === "prev") {
            const switcher = appMg.app({
                isOnNewEv: myApp.isOnNewEv()
            });
            appEl.innerHTML = switcher.view.markup;
            if(switcher.events!==undefined) {
                switcher.events.initEvents(buildPage);
            };  
        }

        //page = "details" -> for displaying a new page with candidate details

        if(page === "details") {
            const switcher = appMg.app({
                isOnDetails: myApp.isOnDetails()
            });
            appEl.innerHTML = switcher.view.markup;
        }
    }
    buildPage();
})();
 