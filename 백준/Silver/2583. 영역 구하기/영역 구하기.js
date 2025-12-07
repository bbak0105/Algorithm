const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

const [Y, X, COUNT] = raw[line++].split(' ').map(Number)

const map = Array.from({ length: Y }, () => Array(X).fill(0))
const visited = Array.from({ length: Y }, () => Array(X).fill(false))

for(let i=0; i<COUNT; i++) {
    const [x1, y1, x2, y2] = raw[line++].split(' ').map(Number)
    for(let x=x1; x<x2; x++) {
        for(let y=y1; y<y2; y++) {
            map[y][x] = 1;
        }
    }
}

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

let count = 0;
let sizeArr = [];

function dfs(y, x) {
    let size = 1;
    visited[y][x] = true;
    
    for(let d=0; d<4; d++) {
        const ny = y + dy[d]
        const nx = x + dx[d]
        
        if(ny < 0 || nx < 0 || ny >= Y || nx >= X) continue;
        if(map[ny][nx] === 1 || visited[ny][nx]) continue;
        
        visited[ny][nx] = true;
        size += dfs(ny, nx)
    }
    
    return size
}

for(let i=0; i<Y; i++) {
    for(let j=0; j<X; j++) {
        if(!visited[i][j] && map[i][j] !== 1) {
            const size = dfs(i, j)
            count++;
            sizeArr.push(size)
        }
    }
}

sizeArr.sort((a, b) => a - b)

console.log(count)
console.log(sizeArr.join(' '))