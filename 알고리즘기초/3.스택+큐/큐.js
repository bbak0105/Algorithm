/**
 * 시간 복잡도
 * push: O(1)
 * shift: 배열의 모든 값을 한 칸씩 앞으로 당겨야 함
 * (=> 선형시간, O(n)) => 만약 배열이 아닌 연결 리스트를 사용한다면 굳이 shift를 쓸 필요가 없음
 * (=> O(1)) => 상수로 줄일 수 있음
 */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue);

queue.dequeue();
queue.dequeue();
console.log(queue);

console.log("queue.size()", queue.size());
