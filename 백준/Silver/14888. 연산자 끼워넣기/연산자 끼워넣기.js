const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

const num = Number(raw[line++]) // 6
const arr = raw[line++].split(' ').map(Number) // 1 2 3 4 5 6
const opt = raw[line++].split(' ').map(Number) // 2 1 1 1 

let min = Infinity;
let max = -Infinity;

function divide(a, b) {
    const result = Math.floor(Math.abs(a)/Math.abs(b))
    const sign = a * b < 0 ? -1 : 1
    if (result === 0) return 0;
    return result * sign
}

// 재귀라고 생각해보자
function backTracking(now, index) { // now: 현재 값, index: 숫자를 몇까지 썼는가
    if(index === num) {
        min = Math.min(now, min)
        max = Math.max(now, max)
        return;
    }
    
    // +
    if(opt[0] > 0) {
        opt[0]--;
        backTracking(now + arr[index], index+1)
        opt[0]++;
    }
    
    // -
    if(opt[1] > 0) {
        opt[1]--;
        backTracking(now - arr[index], index+1)
        opt[1]++;
    }
    
    // *
    if(opt[2] > 0) {
        opt[2]--;
        backTracking(now * arr[index], index+1)
        opt[2]++;
    }
    
    // %
    if(opt[3] > 0) {
        opt[3]--;
        backTracking(divide(now, arr[index]), index+1);
        opt[3]++;
    }
}

backTracking(arr[0], 1)

console.log(max)
console.log(min)