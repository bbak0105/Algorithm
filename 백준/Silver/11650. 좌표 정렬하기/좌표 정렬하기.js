let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [num, ...array] = input

function sorting(arr) {
    arr.sort((a,b) => {
        let [prevX, prevY] = a.split(' ').map(Number)
        let [nextX, nextY] = b.split(' ').map(Number)

        if(prevX < nextX) {
            return prevX - nextX  
        } else if (prevX === nextX) {
            return prevY - nextY
        }
    })

    console.log(arr.join('\n'))
}

sorting(array)