function Stack() {
    let collection = [];
    this.print = function() {
        console.log(collection);
    }

    this.push = function(element) {
        collection.push(element);
    }

    this.pop = function() {
        return collection === 0 ? null : collection.pop();
    }

    this.peek = function(){
        return collection[collection.length - 1];
    }

    this.isEmpty = function(){
        return collection.length === 0;
    }

    this.clear = function() {
        collection = [];
    }
}

const stack_var = new Stack();
stack_var.push(1);
stack_var.push(2);
stack_var.push(3);
stack_var.push(4);

stack_var.print();