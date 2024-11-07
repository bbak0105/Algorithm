// 삽입정렬 최선의 시간복잡도 O(n), 최악의 시간복잡도 O(n2)
// 역순으로 조사하므로 0보다 큰지 확인할 것
let scores = [
    {name: '철수', score: 85},
    {name: '영희', score: 92},
    {name: '민수', score: 88},
    {name: '혜진', score: 97},
    {name: '진수', score: 90},
]

function insertSort(arrays) {
    let i, j, key

    // 인덱스 0은 이미 정렬되었다고 본다.
    for(i=1; i<arrays.length; i++) {
        key = arrays[i].score

        // 역순으로 검사한다.
        for(j=i-1; j>=0 && arrays[j].score > key; j--) {
            arrays[j+1].score = arrays[j].score // 5 1 ~~ -> 5 5 ~~~
        }

        arrays[j+1].score = key
    }

    return arrays
}

console.log(insertSort(scores))
