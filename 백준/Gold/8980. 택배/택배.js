const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;

const [n, cap] = raw[line++].split(' ').map(Number)
const num = Number(raw[line++])  
const list = Array.from({ length: num }, () => raw[line++].split(' ').map(Number))

list.sort((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0]
    return a[1] - b[1]
})

// [40, 40, 40, 40]
const remains = Array(n).fill(cap)
let total = 0;

// 구간별로 허용 범위 가능한 것 빼기
for(const [s, e, count] of list) {
    // 출발지부터 도착지까지
    const possible = Math.min(...remains.slice(s, e), count);
    if(possible > 0) {
        for(let i=s; i<e; i++) {
            remains[i] -= possible;
        }
        total += possible;  
    }
}

console.log(total)