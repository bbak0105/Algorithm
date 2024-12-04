const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
const cardNums = Number(input)
    
class Queue {
    constructor() {
        this.items = {}
        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        this.items[this.tail] = item
        this.tail++;
    }

    dequeue() {
        const deletedItem = this.items[this.head]
        if(deletedItem === undefined) return 

        delete this.items[this.head]
        this.head++;
        return deletedItem
    }

    peek() {
        return this.items[this.head]
    }

    isEmpty() {
        return this.head === this.tail
    }

    size() {
        return this.tail - this.head
    }

    getItems() {
        return this.items
    }
}

const queue = new Queue()

for(let i=1; i<=cardNums; i++) {
    queue.enqueue(i)
}

let size = queue.size();

if ( size === 1 ) return console.log(cardNums)

do {
    queue.dequeue(); 
    const deletedItem = queue.dequeue(); 
    queue.enqueue(deletedItem);
    size = queue.size(); 

    if(size === 1) {
        console.log(queue.peek())
    }
} while (size > 1); 
