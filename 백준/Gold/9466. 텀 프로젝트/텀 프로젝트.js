const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().split('\n')

let line = 0;
const testCount = Number(raw[line++])

function solve(n, arr) {
    const choice = [null, ...arr]
    const visited = Array(n+1).fill(false)
    const done = Array(n+1).fill(false)
    let teamCount = 0;
    
    function dfs(node) {
        visited[node] = true;
        const next = choice[node]
        
        if(!visited[next]) {
            dfs(next)
        } else if (!done[next]) { // 완료 X Cycle 찾기
            let cycleCount = 0;
            let cur = next 
            
            do {
                cycleCount++;
                cur = choice[cur]
            } while (cur !== next)
                teamCount += cycleCount;
        }
        
        done[node] = true
    }
    
    for(let i=1; i<=n; i++) {
        if(!visited[i]) {
            dfs(i)
        }
    }
    
    return n - teamCount;
}

for(let i=0; i<testCount; i++) {
    const stdCount = Number(raw[line++])
    const arr = raw[line++].trim().split(' ').map(Number)
    
    console.log(solve(stdCount, arr))
}