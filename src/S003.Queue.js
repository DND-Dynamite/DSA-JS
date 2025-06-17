function Queue() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(item) {
        collection.unshift(item);
    }

    this.dequeue = function() {
        let temp = collection[collection.length - 1];
        collection.shift();
        return temp;
    }

    this.front = function() {
        return collection[collection.length - 1];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0;
    }


}