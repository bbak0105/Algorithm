
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').filter(line => line.trim() !== '');  

const [num, ...array] = input

function findVPS(array) {
    for(let i=0; i<array.length; i++) {
        const word = array[i]
        let stack = 0

        for(let j=0; j<word.length; j++) {
            const text = word[j]

            if(text === '(') {
                stack++;
            } 

            if(text === ')') {
                stack--;
                
                if(stack < 0) break;
            }
        }

        console.log(stack === 0 ?  'YES' : 'NO')
    }
}

findVPS(array)