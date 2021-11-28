class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.first) return;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.length--;
  }

  getAt(index) {
    let count = 0;
    let indexNode = this.last;
    while (indexNode) {
      if (count == index) {
        return indexNode;
      }

      indexNode = indexNode.next;
      count++;
    }
  }

  deleteQueue() {
    this.first = null;
    this.last = null;
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.dequeue();
queue.dequeue();

console.log(queue.length);
console.dir(queue, { depth: null });
