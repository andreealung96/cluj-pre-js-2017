(function () {
    window.dataStorage = new LocalStorageWrapper();
    const appEl = document.getElementById("app");
    const appMg = new PageCreator();
    const isLogged = function () {
        return !!window.dataStorage.get("userData");
    }
    const buildPage = function() {
        const component = appMg.app({
            isLogged: isLogged()
        });
        appEl.innerHTML = component.view.markup;
        if(component.events!==undefined) {
            component.events.initEvents(buildPage);
        }
    }
    buildPage();
})();