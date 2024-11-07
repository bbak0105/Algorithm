let scores = [
    {name: '철수', score: 85},
    {name: '영희', score: 92},
    {name: '민수', score: 88},
    {name: '혜진', score: 97},
    {name: '진수', score: 90},
]

// 작은 애들을 앞으로 보낸다
function selectionSort(arrays) {
    let indexMin 

    for(let i=0; i<arrays.length -1; i++) {
        indexMin = i // 변경 기준이 되는 인덱스

        for(let j=indexMin + 1; j<arrays.length; j++) {
            if(arrays[j].score < arrays[indexMin].score) {
                indexMin = j
            }
        }

        temp = arrays[indexMin] // 작은 것 임시에 넣기
        arrays[indexMin] = arrays[i]
        arrays[i] = temp 
    }
    
    return arrays
}

console.log(selectionSort(scores))
