// 5 0
// -7 -3 -2 5 8
const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().split('\n')

let line = 0;

const [num, target] = raw[line++].split(' ').map(Number)
const arr = raw[line++].split(' ').map(Number)

let answer = 0;

function dfs(cur, sum) {
    // 타겟과 맞았음 !
    if(cur === num) {
        if(sum === target) {
            answer++;
        }
        return;
    }
        
    dfs(cur+1, sum + arr[cur]) // 현재 더하는 거에 속하기
    dfs(cur+1, sum) // 현재 더하는 거에 속하지 X
}

dfs(0, 0)

if(target === 0) answer--;

console.log(answer)