class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.first) return;

    this.first = this.first.next;
    this.length--;
  }

  getAt(index) {
    let count = 0;
    let indexNode = this.first;
    while (indexNode) {
      if (count == index) {
        return indexNode;
      }

      indexNode = indexNode.next;
      count++;
    }
  }

  deleteStack() {
    this.first = null;
    this.last = null;
  }
}

let stack = new Stack();

stack.push(10);
stack.push(15);
stack.push(20);
stack.pop();
stack.push(20);

console.log(stack.length);
console.dir(stack, { depth: null });
