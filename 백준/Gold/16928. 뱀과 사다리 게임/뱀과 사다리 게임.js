const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
    }    
    
    isEmpty() {
        return this.head >= this.queue.length;
    }
     
    push(item) {
        this.queue.push(item)
    }
    
    pop() {
        if(this.isEmpty()) return undefined;
        return this.queue[this.head++];
    }
}

const [S, B] = raw[line++].split(' ').map(Number)
const visited = Array(101).fill(false)
const jump = {}
const queue = new Queue();

for(let i=0; i<S+B; i++) {
    const [prevP, newP] = raw[line++].split(' ').map(Number)
    jump[prevP] = newP
}

function bfs(cur, curCount) {
    visited[cur] = true;
    queue.push([cur, curCount]);
    
    while(!queue.isEmpty()) {
        const [pos, cnt] = queue.pop();
        
        if(pos === 100) return cnt;
        
        for(let i=1; i<=6; i++) {
            let next = pos + i 
            next = jump[next] || next;
            
            if(next > 100) continue;
            
            if(!visited[next]) {
                visited[next] = true;
                queue.push([next, cnt + 1])
            }
        }
    }
    
    return -1
}

console.log(bfs(1, 0))