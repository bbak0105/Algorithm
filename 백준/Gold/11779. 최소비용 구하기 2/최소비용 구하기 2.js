const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

const N = Number(raw[line++])
const M = Number(raw[line++])

const graph = Array.from({ length: N+1 }, () => [])
for(let i=0; i<M; i++) {
    const row = raw[line++].split(' ').map(Number)
    const [from, to, cost] = row
    graph[from].push([to, cost])
}

const dir = Array(N+1).fill(Infinity) // 최소값 담기
const prev = Array(N+1).fill(0) // 경로값 담기

class MinHeap {
    constructor() {
        this.heap = []
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    push(item) {
        this.heap.push(item)
        this._bubbleUp();
    }
    
    pop() {
        if(this.isEmpty()) return -1
        
        const root = this.heap[0]
        const last = this.heap.pop()
        
        if(!this.isEmpty()) {
            this.heap[0] = last
            this._bubbleDown()
        }
        
        return root
    }
    
    _bubbleUp() { // 밑에서 위로, 즉 부모를 보기
        let index = this.heap.length - 1
        const value = this.heap[index]
        
        while(index > 0) {
            const parentIdx = Math.floor((index-1)/2)
            const parentValue = this.heap[parentIdx] 
            
            if(parentValue <= value) break; // parent가 더 작으면 바꿀필요 X
            
            this.heap[index] = parentValue
            index = parentIdx
        }
        
        this.heap[index] = value
    }
    
    _bubbleDown() { // 위에서 아래로, 즉 자식을 보기
        let index = 0;
        const length = this.heap.length;
        const value = this.heap[index]
        
        while(true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            let smallest = index;
            
            if(left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            
            if(right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }
            
            if(smallest === index) break;
            
            this.heap[index] = this.heap[smallest];
            index = smallest
        }
        
        this.heap[index] = value
    }
}

function dikstra(start) { // ex) 1
    const mh = new MinHeap();
    dir[start] = 0
    mh.push([0, start])
    
    while(!mh.isEmpty()) {
        const [curCost, cur] = mh.pop(); // 0, 1
        
        if(dir[cur] < curCost) continue;
        
        for(const[next, m] of graph[cur]) {
            const nextCost = curCost + m
            
            if(nextCost < dir[next]) {
                dir[next] = nextCost;
                prev[next] = cur
                mh.push([nextCost, next])
            }
        }
    }
}

const [S, E] = raw[line++].split(' ').map(Number)
dikstra(S)

const path = []
let cur = E

while(cur !== 0) {
   path.push(cur)
   cur = prev[cur]
}

path.reverse();

console.log(dir[E])
console.log(path.length)
console.log(path.join(' '))

// 출력 예시
// 4 : 최소 비용 
// 3 : 도시의 개수 
// 1 3 5 : 경로 