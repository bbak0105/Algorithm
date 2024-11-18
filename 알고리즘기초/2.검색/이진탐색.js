// 정렬이 되어있는 상태에서 해야한다.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      // 타겟이 중간값보다 크면
      left = mid + 1; // 좌측 절반 탐색
    } else {
      // 타겟이 중간값보다 작으면
      right = mid - 1; // 우측 절반 탐색
    }
  }

  return -1;
}

const array = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(array, 5)); // 2
console.log(binarySearch(array, 8)); // -1
