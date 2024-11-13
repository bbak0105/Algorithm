// 나눠서 하는 이진탐색 느낌
// 작은애를 앞으로 뺀다.
// [a, b, c] 와 [d, e, f]가 있다고 할때, a와 d를 비교 - b와 e를 비교하는 것처럼 나란히 비교함
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2); // 중앙
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = []; 
  let leftIdx = 0; // const 상수로 선언하지 말 것!!!
  let rightIdx = 0; // const 상수로 선언하지 말 것!!!

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]); // 작은 애(left)를 앞으로
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx)); // 인덱스 바깥으로 빠져나간 아이템들 다 더하기
}

const array = [5, 9, 2, 8, 11, 5];
console.log(mergeSort(array));
