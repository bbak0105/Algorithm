let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').filter(line => line.trim() !== '');  

const [num, ...array] = input

function findVPS(array) {
    for(let i=0; i<array.length; i++) {
        const word = array[i].trim()
        let stack = 0
        let VPS = true

        for(let j=0; j<word.length; j++) {
            const text = word[j]

            if(text === '(') {
                stack++;
            } 

            if(text === ')') {
                stack--;

                if(stack < 0) {
                    VPS = false
                    break;
                }
            }
        }

        if(stack !== 0) {
            VPS = false
        }

        console.log(VPS ? 'YES' : 'NO')
    }
}

findVPS(array)
