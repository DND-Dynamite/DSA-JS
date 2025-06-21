class CircularQueue {
    constructor(size) {

        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        return this.queue;
    }

    enqueue(item) {
        // Only change code below this line
        if (this.write >= this.read + this.max + 1) return null;
        this.queue[this.write % (this.max + 1)] = item;
        this.write++;
        return item;
        // Only change code above this line
    }

    dequeue() {
        // Only change code below this line
        if (this.read >= this.write) return null;
        const item = this.queue[this.read % (this.max + 1)];
        this.queue[this.read % (this.max + 1)] = null;
        this.read++;
        return item;
        // Only change code above this line
    }
}