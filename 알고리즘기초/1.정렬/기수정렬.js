function radixSort(arr) {
  const max = Math.max(...arr);
  let digit = 1; // 1의 자리수 부터

  while (Math.floor(max / digit) > 0) {
    countingSort(arr, digit);
    digit *= 10; // 다음 자리수로 이동
  }

  return arr;
}

function countingSort(arr, digit) {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  // 자릿수를 기준으로 count 배열 업데이트
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(arr[i] / digit) % 10; // 해당 자릿수 계산
    count[index]++;
  }

  // 누적 합 계산 (1부터 싹 더하기)
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // 정렬된 데이터를 output에 저장
  for (let i = arr.length - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / digit) % 10;
    const positionIdx = count[index] - 1;
    output[positionIdx] = arr[i]; // 해당 위치에 값 배치
    count[index]--;
  }

  // 정렬 결과를 원래 배열에 복사
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const digit = 1; // 1의 자리 기준
console.log("After Sort:", radixSort(arr));
