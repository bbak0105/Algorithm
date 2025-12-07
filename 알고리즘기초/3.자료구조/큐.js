// 간략화 버전
class Queue {
  constructor() {
    this.queue = []
    this.head = 0
  }

  push(index) {
    this.queue.push(index)
  }

  pop() {
    if(this.head >= this.queue.length) return null
    return this.queue[this.head++]; 
  }

  isEmpty() {
    return this.head >= this.queue.length
  }
}

// shift가 시간 복잡도가 높으므로 이렇게 구현하는 것이 가장 알맞음
class Queue {
  constructor() {
    this.storage = {}; // 데이터를 저장할 객체
    this.head = 0; // 큐의 시작점
    this.tail = 0; // 큐의 끝점
  }

  enqueue(value) {
    this.storage[this.tail] = value; // 끝에 삽입
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const value = this.storage[this.head]; // 시작점의 값 가져오기
    delete this.storage[this.head]; // 시작점의 값 삭제
    this.head++;
    return value;
  }

  peek() {
    return this.isEmpty() ? undefined : this.storage[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log("queue.dequeueu()", queue.dequeue()); // 10
console.log("queue.peek()", queue.peek()); // 20
