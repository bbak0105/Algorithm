// bubble sort

let scores = [
  { name: "철수", score: 85 },
  { name: "영희", score: 92 },
  { name: "민수", score: 88 },
  { name: "혜진", score: 97 },
  { name: "진수", score: 90 },
];

/**
버블 정렬에서 j의 최대 인덱스를 arr.length - i - 1로 설정하는 이유는 이미 정렬된 요소를 다시 비교할 필요가 없기 때문입니다. 
이 설정을 통해 불필요한 비교를 줄여 효율성을 높일 수 있습니다.

버블 정렬에서는 한 번의 반복문이 끝날 때마다 가장 큰 값이 배열의 마지막으로 이동하게 됩니다. 
i가 증가할수록 배열의 끝부분에 있는 요소들이 이미 정렬된 상태가 되므로, 
매번 반복문에서 i번째로 큰 요소가 제자리를 찾습니다. 

따라서 다음 반복에서는 그 부분까지 갈 필요가 없고, j의 최대 인덱스를 arr.length - i - 1로 제한해줍니다.
**/
이렇게 하면 정렬이 이미 끝난 부분을 다시 비교하지 않아도 되어, 코드의 효율성을 높이고 불필요한 연산을 피하게 됩니다.
const bubbleSort = (arr) => {
  // 점수가 낮은 순으로 정렬하기
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // j 마지막 인덱스 주의하기
      if (arr[j].score > arr[j + 1].score) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const bubbleSortInverse = (arr) => {
  // 점수가 높은 순으로 정렬하기
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].score < arr[j + 1].score) {
        // 앞에 있던게 뒤보다 작으면
        const temp = arr[j]; // 작은 거 저장
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(scores));
console.log(bubbleSortInverse(scores));
