myApp.LoginEvents = function () {
    this.initEvents = function(buildPage) {
        
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", function(event){
            event.preventDefault();
            const userData = {};
            Array.prototype.forEach.call(loginForm.children, function(item) {
                if (item.name) {
                    userData[item.name] = item.value
                }
            });
            window.dataStorage.set('userData', userData);   
            buildPage();
        });
    }
}