class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const value = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent <= value) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = value;
  }

  bubbleDown(index = 0) {
    const length = this.heap.length;
    const value = this.heap[index];

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      // swap
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

// 사용 예시
const h = new MinHeap();
h.push(5);
h.push(2);
h.push(8);
h.push(1);

while (!h.isEmpty()) {
  console.log(h.pop()); // 1, 2, 5, 8
}
