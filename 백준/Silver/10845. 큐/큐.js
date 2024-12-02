const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 
const [num, ...array] = input

class Queue {
    constructor() {
        this.items = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(item) { // 끝에 삽입
        this.items[this.tail] = item
        this.tail++;
    }
 
    dequeue() { // 가장 앞에꺼 빼기
        if (this.head === this.tail) {
            return -1; // 큐가 비었을 때
        }
        
        const deletedValue = this.items[this.head]
        delete this.items[this.head]
        this.head++;
        
        return deletedValue
    }

    size() { 
        return this.tail - this.head
    }

    isEmpty() {
        return this.tail === this.head ? 1 : 0
    }

    front() { // 가장 앞 없으면 -1
        return this.items[this.head] === undefined ? -1 : this.items[this.head]
    }

    back() { // 가장 뒤 없으면 -1
        return this.items[this.tail - 1] === undefined ? -1 : this.items[this.tail - 1]
    }

    getItem() {
        return this.items
    }
}

const queue = new Queue()
const results = []

for(let i=0; i<array.length; i++) {
  const [code, item] = array[i].split(' ');
    
  if(code === 'push') {
    queue.enqueue(Number(item))
  }

  if(code === 'pop') {
    results.push(queue.dequeue())
  }

  if(code === 'front')  {
    results.push(queue.front())
  }

  if(code === 'back') {
    results.push(queue.back())
  }
 
  if(code === 'size') {
    results.push(queue.size())
  }
 
  if(code === 'empty') {
    results.push(queue.isEmpty())
  }
}

console.log(results.join('\n'));
