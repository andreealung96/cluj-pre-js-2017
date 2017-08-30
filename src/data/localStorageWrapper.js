const LocalStorageWrapper = function() {
    this.set = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    this.remove = function(key) {
        localStorage.removeItem(key);
    }
    this.get = function(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}