const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const df = Array.from({ length: 21 }, () => 
    Array.from({ length: 21 }, () => (
      Array(21).fill(0)
  ))
)
  
function w(input) {
  const [a, b, c] = input
  if(a <= 0 || b <= 0 || c <= 0) return 1
  if(a > 20 || b > 20 || c > 20) return w([20, 20, 20])

  if(df[a][b][c]) return df[a][b][c]

  if(a <b && b < c) {
 	   df[a][b][c] = w([a, b, c-1]) + w([a, b-1, c-1]) - w([a, b-1, c])
   } else {
     df[a][b][c] = w([a-1, b, c]) + w([a-1, b-1, c]) + w([a-1, b, c-1]) - w([a-1, b-1, c-1])
   }

   return df[a][b][c]
}

function solve(input) {
  const result = w(input)
  const [a, b, c] = input
  if(a === -1 && b === -1 && c === -1) return 
  
  console.log(`w(${a}, ${b}, ${c}) = ${result}`)
}

for(let i=0; i<raw.length; i++) {
  const input = raw[i].split(' ').map(Number)
  solve(input)
}