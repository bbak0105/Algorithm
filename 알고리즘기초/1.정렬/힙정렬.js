// [1]. 일단 힙 구조 만들기
function heapify(arr, n, root) {
  let largestIdx = root; // 루트를 가장 큰 값으로 가정
  let leftIdx = 2 * root + 1; // 자식 노드의 인덱스 (왼)
  let rightIdx = 2 * root + 2; // 자식 노드의 인덱스 (오)

  // 왼쪽 자식이 root 보다 크다면
  if (leftIdx < n && arr[leftIdx] > arr[largestIdx]) {
    largestIdx = leftIdx;
  }

  // 오른쪽 자식이 root 보다 크다면
  if (rightIdx < n && arr[rightIdx] > arr[largestIdx]) {
    largestIdx = rightIdx;
  }

  // 가장 큰 값이 루트가 아니라면 교환
  if (largestIdx !== root) {
    [arr[root], arr[largestIdx]] = [arr[largestIdx], arr[root]];

    // 재귀적으로 영향을 받은 하위 트리를 정리
    heapify(arr, n, largestIdx);
  }
}

const number = 9;
const heap = [7, 6, 5, 8, 3, 5, 9, 1, 6];

// 전체 배열을 힙으로 변환 (9개지만 총 3번만 돌면 됨, 역순, Math.floor(number/2)는 부모 노드 중 마지막 노드의 인덱스)
for (let i = Math.floor(number / 2) - 1; i >= 0; i--) {
  heapify(heap, number, i);
}

// 하나씩 정렬
for (let i = number - 1; i > 0; i--) {
  // 현재 루트(가장 큰 값)를 배열 끝으로 보냄
  [heap[0], heap[i]] = [heap[i], heap[0]];

  // 축소된 힙에 대해 다시 정리
  heapify(heap, i, 0);
}

console.log("heap", heap);
