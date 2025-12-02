const fs = require('fs')
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

class MinHeap {
    constructor() {
        this.heap = []
    }
    
    push(value) {
        this.heap.push(value);
        this._bubbleUp();
    }
    
    pop() {
        if(this.heap.length === 0) return 0
        
        const min = this.heap[0]
        const last = this.heap.pop();
        
        if(this.heap.length > 0) {
            this.heap[0] = last
            this._bubbleDown(0);
        }
        
        return min;
    }
    
    _bubbleUp() {
        // 부모를 찾아올라갈꺼야 lastIndex 
        let index = this.heap.length - 1;
        const value = this.heap[index];
        
        while(index > 0) {
            const parentIdx = Math.floor((index - 1)/2)
            const parent = this.heap[parentIdx]
            
            if(parent <= value) break;
            
            this.heap[index] = parent;
            index = parentIdx;
        }
        
        this.heap[index] = value;
    }
    
    _bubbleDown(index = 0) {
        // 자식 찾아 내려갈꺼야 
        const length = this.heap.length
        let smallest = index;
        
        while(true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            
            if(left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            
            if(right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }
            
            if(smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            
            index = smallest;
        }
    }
}

const num = arr[0]
const mh = new MinHeap();
const output = []

for(let i=1; i<=num; i++) {
    const item = arr[i]
    if(item === 0) {
        output.push(mh.pop())
    } else {
        mh.push(item)
    }
}

console.log(output.join('\n'))