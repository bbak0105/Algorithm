
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').filter(line => line.trim() !== '');

const [num, ...array] = input

function insertSort(arr) {
    for(let i=1; i<arr.length; i++) {
        let currentValue = arr[i] // 1
        let j;
            
        for(j=i-1; j>=0 && (arr[j].length > currentValue.length || 
                           (arr[j].length === currentValue.length && arr[j] > currentValue)); j--) { //j=0
            arr[j+1] = arr[j]
        }

        arr[j+1] = currentValue
    }

    return arr
}

new Set(insertSort(array)).forEach(item => console.log(item))
