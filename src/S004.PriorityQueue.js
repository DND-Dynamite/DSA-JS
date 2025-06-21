function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    this.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift().element; // Removes and returns the first (highest priority) element
    }

    this.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0].element;
    }

    this.isEmpty = function () {
        return this.items.length === 0;
    }

    this.size = function () {
        return this.items.length;
    }
    // Only change code above this line
}

const object = new PriorityQueue();

object.enqueue(['banana', 4]);
object.enqueue(['apple', 5]);
object.enqueue(['papaya', 6]);
object.enqueue(['grape', 1]);

let temp = object.dequeue();

console.log(temp);