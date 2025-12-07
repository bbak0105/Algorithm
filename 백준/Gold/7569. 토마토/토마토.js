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
        this.queue.push(item);
    }
    
    pop() {
        if(this.isEmpty()) return undefined;
        return this.queue[this.head++]
    }
}

let line = 0;
let unTomato = 0;

const [X, Y, Z] = raw[line++].split(' ').map(Number)

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0]
const dz = [0, 0, 0, 0, 1, -1]

const queue = new Queue();
let box = Array.from({ length: Z } , () => Array.from({ length: Y }, () => Array(X).fill(0)))

for(let z=0; z<Z; z++) {
    for(let y=0; y<Y; y++) {
        const row = raw[line++].split(' ').map(Number)
        for(let x=0; x<X; x++) {
            box[z][y][x] = row[x]
            
            if(row[x] === 1) {
                queue.push([z, y, x, 0])
            } else if(row[x] === 0) {
                unTomato++;
            }
        }
    }
}

function solve() {
    // 다 익으면 0
    if(unTomato === 0) return 0;
    let answer = 0;
    
    // 익은애들 큐에서 목록 빼내기
    while(!queue.isEmpty()) {
        const item = queue.pop();
        if(!item) break;
        const [z, y, x, num] = item;
     
        for(let d=0; d<6; d++) {
            const nx = x + dx[d]
            const ny = y + dy[d]
            const nz = z + dz[d]
            
            if(nx <0 || ny< 0 || nz <0 || nx >= X || ny >= Y || nz >= Z) continue;
            if(box[nz][ny][nx] !== 0) continue;
            
            box[nz][ny][nx] = 1;
            unTomato--;
            
            const newDay = num + 1;
            answer = Math.max(newDay, answer)
            
            queue.push([nz, ny, nx, newDay])
        }
    }
    
    if(unTomato > 0) return -1
    return answer
}

console.log(solve());