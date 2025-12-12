const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

const N = Number(raw[line++])
const triangle = Array.from({ length: N }, () => raw[line++].split(' ').map(Number))
const dist = Array.from({ length: N }, () => Array(N).fill(-1))

const dy = [1, 1]
const dx = [0, 1]

function dfs(y, x) {
    let max = -Infinity
    
    if(dist[y][x] !== -1) return dist[y][x]
    if(y === N-1) return triangle[y][x]

    for(let i=0; i<2; i++) {
        const ny = y + dy[i]
        const nx = x + dx[i]
        
        if(ny < 0 || nx < 0 || ny >= N || nx >= N) continue;
        
        const next = triangle[y][x] + dfs(ny, nx)
        max = Math.max(next, dist[y][x])
        dist[y][x] = max
    }  
    
    return dist[y][x]
}

console.log(dfs(0,0))