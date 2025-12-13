class MinHeap {
  constructor() {
    this.heap = []
  }

  getHeap() {
    return this.heap
  }

  isEmpty() {
    return this.heap.length === 0
  }

  push(item) {
    this.heap.push(item)
    this._bubbleUp()
  }

  pop() {
    if(this.isEmpty()) return -1
    // 가장 밑에 있는게 빠지고 위에서부터 차곡차곡 _bubbleDown
    const root = this.heap[0]
    const last = this.heap.pop()

    if(!this.isEmpty()) {
      this.heap[0] = last
      this._bubbleDown();
    }

    return root
  }

  _bubbleUp() { // 밑에 채우고 위에 부모를 비교하면서 올라간다.
    let index = this.heap.length - 1
    const value = this.heap[index] 

    while(index > 0) {
      const parentIndex = Math.floor((index-1)/2)
      const parentValue = this.heap[parentIndex] // parent가 더 크면 바꾼다

      if(value >= parentValue) break; // 바꿀 필요 X

      this.heap[index] = parentValue
      index = parentIndex 
    }

    this.heap[index] = value;
  }

  _bubbleDown() { //위에 채우고 밑에 자식을 비교하면서 내려간다.
    let index = 0
    const value = this.heap[index]
    const length = this.heap.length

    while(true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if(left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left
      }

      if(right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right
      }

      if(smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      index = smallest
    }

    this.heap[index] = value
  }
}


const mh = new MinHeap();

mh.push(5)
mh.push(3)
mh.push(8)
mh.push(1)
console.log(mh.pop()) // 1
console.log(mh.pop()) // 3
console.log(mh.pop()) // 5
console.log(mh.pop()) // 8
