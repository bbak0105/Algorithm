const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let line = 0;
const [M, N] = raw[line++].split(' ').map(Number); // M은 행(y), N은 컬럼(x)

// map  
const map = Array.from({ length: M }, () => raw[line++].split(' ').map(Number));

// df 
const df = Array.from({ length: M }, () => Array(N).fill(-1)) 
    
const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

function dfs(y, x) {
    if(y === M-1 && x === N-1) return 1 // 경로 완성 
  
    if(df[y][x] !== -1) { // 메모이제이션 
        return df[y][x]
    }
    
    df[y][x] = 0

    for(let dir=0; dir<4; dir++) {
        const ny = y + dy[dir]
        const nx = x + dx[dir]
        
        if(ny < 0 || ny >= M || nx < 0 || nx >= N) continue; 
           
        if(map[ny][nx] < map[y][x]) {
            df[y][x] += dfs(ny, nx)
        }
    }
    
    return df[y][x]
}

const result = dfs(0,0)
console.log(result)