** start of script.js **

var Map = function() {
    this.collection = {};
    // Only change code below this line
    this.add = function(key, value) {
        this.collection[key] = value;
    }

    this.remove = function(key, value) {
        delete this.collection[key];
    }

    this.get = function(key) {
        return this.collection[key];
    }

    this.has = function(key) {
        if(key in this.collection) {
            return true;
        }
        return false;
    }

    this.values = function() {
       return Object.values(this.collection);
    }

    this.size = function() {
        return Object.keys(this.collection).length;
    }

    this.clear = function clear() {
        this.collection = {};
    }
    // Only change code above this line
};

** end of script.js **

