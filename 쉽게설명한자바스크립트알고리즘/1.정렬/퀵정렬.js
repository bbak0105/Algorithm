// 퀵정렬과 합병정렬은 비슷하나 차이가 있다.
// 퀵정렬: 피벗을 임의로 둔다 (비균등), 합병정렬: 언제나 배열을 절반으로 나누어 비교한다 (균등)
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // 임의로 첫번째로 선택한다. 그리고 얘보다 작은애들을 왼쪽으로 넣는다.
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [5, 9, 2, 8, 11, 5];
console.log(quickSort(array));
