// bubble sort

let scores = [
    {name: '철수', score: 85},
    {name: '영희', score: 92},
    {name: '민수', score: 88},
    {name: '혜진', score: 97},
    {name: '진수', score: 90},
]

const bubbleSort = (arr) => {
    // 점수가 낮은 순으로 정렬하기
    for(let i=0; i<arr.length; i++) {
        for(let j=1; j<arr.length; j++) {
            if(arr[j-1].score > arr[j].score) { // 앞에 있던게 뒤보다 크면
                const temp = arr[j].score; // 작은 거 temp 에 저장
                arr[j].score = arr[j-1].score
                arr[j-1].score = temp
            }
        }
    }
    return arr
}

const bubbleSortInverse = (arr) => {
    // 점수가 높은 순으로 정렬하기
    for(let i=0; i<arr.length; i++) {
        for(let j=1; j<arr.length; j++) {
            if(arr[j-1].score < arr[j].score) { // 앞에 있던게 뒤보다 작으면
                const temp = arr[j-1].score; // 작은 거 저장
                arr[j-1].score = arr[j].score
                arr[j].score = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(scores))
console.log(bubbleSortInverse(scores))
