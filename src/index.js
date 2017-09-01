//page = "login" -> for displaying login page
//page = "next" -> for switching to next page (NewEvPage)
//page = "prev" -> for switching to prev page (EvPage)

var page = "login"; 

(function () {
    window.dataStorage = new LocalStorageWrapper();
    const appEl = document.getElementById("app");
    const appMg = new PageCreator();

    const isLogged = function () {
        return !!window.dataStorage.get("userData");
    }

    const isOnEv = function () {
        return true;
    }

    const isOnNewEv = function () {
        return true;
    }

    const buildPage = function () {
        
        const component = appMg.app({
            isLogged: isLogged()
        });
        appEl.innerHTML = component.view.markup;
        if(component.events!==undefined) {
            component.events.initEvents(buildPage);
        };

        //page = "next" -> for switching to next page (NewEvPage)

        if(page === "next") {
            const switcher = appMg.app({
                isOnEv: isOnEv()
            });
            appEl.innerHTML = switcher.view.markup;
            if(switcher.events!==undefined) {
                switcher.events.initEvents(buildPage);
            };  
        }  

        //page = "prev" -> for switching to prev page (EvPage)

        if(page === "prev") {
            const switcher = appMg.app({
                isOnNewEv: isOnNewEv()
            });
            appEl.innerHTML = switcher.view.markup;
            if(switcher.events!==undefined) {
                switcher.events.initEvents(buildPage);
            };  
        }
    }
    buildPage();
})();
 