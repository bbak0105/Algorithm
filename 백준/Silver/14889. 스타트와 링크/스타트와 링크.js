const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;
const n = Number(raw[line++])
const teamCount = n/2 // 분류하려는 개수, 즉 T로 될 수 있는 MAX

let visited = Array(n).fill(false) // T일 경우 스타트(start), F일 경우 링크(link)
let minScore = Infinity;
const scoreList = Array.from({ length: n }, () => raw[line++].split(' ').map(Number))

// [F, F, F, F, F, F] 기준은 스타트팀
// count는 스타트팀의 숫자
function dfs(index, count) {
    if(count === teamCount) {
        // 스타트팀과 링크팀이 잘 나눠진 상태
        let startScore = 0;
        let linkScore = 0;
        
        for(let i=0; i<n; i++) {
            for(let j=i+1; j<n; j++) {
                // 둘다 스타트팀
                if(visited[i] && visited[j]) {
                    startScore += scoreList[i][j] + scoreList[j][i]
                } else if(!visited[i] && !visited[j]) {
                    // 둘다 링크팀
                    linkScore += scoreList[i][j] + scoreList[j][i]
                }
            }
        }
        
        minScore = Math.min(minScore, Math.abs(startScore - linkScore));
        return;
    }
    
    if(index === n) return
    
    // 팀꾸리기 (스타트팀 count+1)
    visited[index] = true;
    dfs(index+1, count+1)
    
    // 팀꾸리기 (링크팀, 즉 count 변화 X)
    visited[index] = false;
    dfs(index+1, count)
}

dfs(0,0)
console.log(minScore)