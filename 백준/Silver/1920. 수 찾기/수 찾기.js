const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [ANum, AArr, MNum, MArr] = input 

function sorting(arr) {
    const answer = arr.split(' ').sort((a, b) => {
        const aN = Number(a)
        const bN = Number(b)

        return aN - bN
    })

    return answer
}
const sortedArr = sorting(AArr).map(Number)

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] === target) {
            return 1
        } else if(arr[mid] < target) { 
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return 0
}

const answer = []
MArr.split(' ').forEach((m) => {
    answer.push(binarySearch(sortedArr, Number(m)))
});

console.log(answer.join('\n'))