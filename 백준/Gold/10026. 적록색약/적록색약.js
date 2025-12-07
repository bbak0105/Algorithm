const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

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
        return this.queue[this.head++]
    }
}

let line = 0;
let answerA = 0;
let answerB = 0;

const num = Number(raw[line++]);
const graph = Array.from({ length: num }, () => raw[line++].split(''))

const visitedA = Array.from({ length: num }, () => Array(num).fill(false))
const visitedB = Array.from({ length: num }, () => Array(num).fill(false))

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

function isSameWeak(a, b) {
    if(a === b) return true
    
    const isA = a === 'R' || a === 'G'
    const isB = b === 'R' || b === 'G'
    
    return isA && isB
}

function bfs(y, x, visited, isWeak=false) {
    const queue = new Queue();
    
    visited[y][x] = true
    queue.push([y, x]);
    
    while(!queue.isEmpty()) {
        const item = queue.pop();
        const [cy, cx] = item;
        const cur = graph[cy][cx]
        
        for(let d=0; d<4; d++) {
            const ny = cy + dy[d]
            const nx = cx + dx[d]
                  
            if(ny < 0 || nx < 0 || ny >= num || nx >= num) continue;
            if(visited[ny][nx]) continue;
            
            const next = graph[ny][nx]
            if(isWeak) {
                if(!isSameWeak(cur, next)) continue;
            } else {
                if(cur !== next) continue;
            }
            
            visited[ny][nx] = true;
            queue.push([ny, nx])
        }
    }
}

for(let i=0; i<num; i++) {
    for(let j=0; j<num; j++) {
        if(!visitedA[i][j]) {
            bfs(i, j, visitedA)
            answerA++;
        }
        if(!visitedB[i][j]) {
            bfs(i, j, visitedB, true)
            answerB++;
        }
    }
}

console.log(`${answerA} ${answerB}`)