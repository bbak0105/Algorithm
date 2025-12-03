const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0;
const cases = [];

const dx = [1, -1, 0, 0, 1, 1, -1, -1]
const dy = [0, 0, 1, -1, 1, -1, 1, -1]

function dfs(y, x, w, h, map) {
    if(map[y][x] === 0) return 
    
    map[y][x] = 0;
    
    for(let i=0; i<8; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        
        if(nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
        
        if(map[ny][nx] === 1) {
            dfs(ny, nx, w, h, map)
        }
    }
}

while(true) {
    const nums = input[line++].split(' ').map(Number)
    const [W, H] = nums
    const map = [];
    
    if(W === 0 && H === 0) break;
    
    for(let i=0; i<H; i++) {
        map.push(input[line++].split(' ').map(Number))
    }
   
    cases.push({ w: W, h: H, map: map })
}

for(let i=0; i<cases.length; i++) {
    const { w, h, map } = cases[i];
    let sum = 0;
    
    for(let x=0; x<w; x++) {
        for(let y=0; y<h; y++) {
            if(map[y][x] === 1) {
                dfs(y, x, w, h, map)
                sum++;
            }
        }
    }
    
    console.log(sum);
}