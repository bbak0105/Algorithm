function solution(array, commands) {
    let answer = [];
    
    function quickSort(arr) {
        if(arr.length <= 1) return arr;
        
        const pivot = arr[0]
        const left = []; // 피벗보다 작은 값
        const right = []; // 피벗보다 높은 값
        
        for(let i=1; i<arr.length; i++) { // 0을 넣었으니 빼주자 1부터 하셈
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        
        return [...quickSort(left), pivot, ...quickSort(right)]
    }
    
    for(let i=0; i< commands.length; i++) {
        const [fc, sc, idx] = commands[i]
        const cuttedArr = array.slice(fc-1, sc)
        const sortAndFindIdx = quickSort(cuttedArr)[idx-1]
        
        answer.push(sortAndFindIdx)
    }
        
    return answer;
}