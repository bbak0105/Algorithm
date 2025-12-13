const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

const [N, E] = raw[line++].split(' ').map(Number)

const graph = Array.from({ length: N+1 }, () => [])
for(let i=0; i<E; i++) {
    const [from, to, dir] = raw[line++].split(' ').map(Number)
    graph[from].push([to, dir])
    graph[to].push([from, dir])
}

class MinHeap {
    constructor() {
        this.heap = []
    }
    
    isEmpty() {
        return this.heap.length === 0
    }
    
    push(item) {
        this.heap.push(item)
        this._bubbleUp();
    }
    
    pop() {
        if(this.isEmpty()) return null
        
        const root = this.heap[0]
        const last = this.heap.pop();
        
        if(!this.isEmpty()) {
            this.heap[0] = last
            this._bubbleDown();
        }
        
        return root;
    }
    
    _bubbleUp() { // 밑 -> 위 : 부모를 찾아 올라감 
        let index = this.heap.length - 1;
        const value = this.heap[index]
        
        while(index > 0) {
            const parentIdx = Math.floor((index - 1)/2)
            const parentValue = this.heap[parentIdx]
            
            if(parentValue[0] <= value[0]) break;
            
            this.heap[index] = parentValue;
            index = parentIdx;
        }
        
        this.heap[index] = value
    }
    
    _bubbleDown() { // 위 -> 밑 : 자식을 찾아 내려감
        let index = 0;
        const value = this.heap[index]
        const length = this.heap.length;
        
        while(true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            let smallest = index;
            
            if(left < length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left
            }
            
            if(right < length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right
            }
            
            if(smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            index = smallest
        }   
    }
}

function dijkstra(start) {
    const dist = Array(N+1).fill(Infinity)

    dist[start] = 0;
    const node = [0, start]
    
    const mh = new MinHeap();
    mh.push(node)
    
    while(!mh.isEmpty()) {
        const [cost, d] = mh.pop();
        
        if(cost > dist[d]) continue;
        
        for(const [next, m] of graph[d]) {
            const nextCost = cost + m 
            if(nextCost < dist[next]) {
                dist[next] = nextCost
                mh.push([nextCost, next])
            }
        }
    }
    
    return dist
}

const [v1, v2] = raw[line++].split(' ').map(Number)

const dijkFrom1 = dijkstra(1)
const dijkFromV1 = dijkstra(v1)
const dijkFromV2 = dijkstra(v2)

// 1->v1, v1->v2, v2->v3
const cos1 = dijkFrom1[v1] + dijkFromV1[v2] + dijkFromV2[N]
// 1->v2, v2->v1, v1->v3
const cos2 = dijkFrom1[v2] + dijkFromV2[v1] + dijkFromV1[N]
const minCos = Math.min(cos1, cos2)

console.log(minCos === Infinity ? -1 : minCos)