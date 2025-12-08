const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

const [N, MAX] = raw[line++].split(' ').map(Number)

const homes = []
const chickens = []

for(let i=0; i<N; i++) {
    const row = raw[line++].split(' ').map(Number)
    for(let j=0; j<N; j++) {
        if(row[j] === 1) {
            homes.push([i, j])
        } else if(row[j] === 2) {
            chickens.push([i, j])
        }
    }
}

let answer = Infinity;

function dfs(cur, picked) { // chickens의 3가지 조합 구하기
    if(picked.length === MAX) {
        // 조합 다 구한 상태, 각 좌표별 최소 값 뽑아내기 
        let city = 0;
        for(let h=0; h<homes.length; h++) {
            let min = Infinity;
            for(let c=0; c<picked.length; c++) {
                const dir = Math.abs(homes[h][0] - picked[c][0]) + Math.abs(homes[h][1] - picked[c][1])
                min = Math.min(dir, min)
            }
            city += min
        }
        answer = Math.min(city, answer)
        return;
    }
    
    // 조합 구하기
    for(let i=cur; i<chickens.length; i++) {
        picked.push(chickens[i])
        dfs(i+1, picked)
        picked.pop()
    }
}

dfs(0, [])
console.log(answer)