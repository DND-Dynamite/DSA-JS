class Set {
    constructor() {
        // Dictionary will hold the items of our set
        this.dictionary = {};
        this.length = 0;
    }

    // This method will check for the presence of an element and return true or false
    has(element) {
        return this.dictionary[element] !== undefined;
    }

    // This method will return all the values in the set
    values() {
        return Object.values(this.dictionary);
    }

    // Only change code below this line
    add(item) {
        if(item === null || item === undefined) return false;
        if(!this.has(item)){
            this.dictionary[item] = item;
            this.length++;
            return true;
        }
        return false;
    }

    remove(item) {
        if(this.has(item)){
            delete this.dictionary[item];
            if(this.length >= 0) this.length--;
            return true;
        }
        return false;
    }

    size() {
        return this.length;
    }
    // Only change code above this line
}

const set = new Set();
console.log("Debugging.....................");
set.add(1);
console.log(set.has(1));
console.log(set.values());
set.add(1);
console.log(set.has(1));
console.log(set.values());

set.remove(1);
console.log(set.has(1));
console.log(set.values());

set.remove(1);
console.log(set.has(1));
console.log(set.values());

console.log(set.dictionary);

console.log("Debugging.....................");