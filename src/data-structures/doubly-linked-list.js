class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  getAt(index) {
    if (index < (this.length - 1) / 2) {
      let count = 0;
      let node = this.head;

      while (count != index) {
        node = node.next;
        count++;
      }

      return node;
    }

    let count = this.length - 1;
    let node = this.tail;

    while (count != index) {
      node = node.previous;
      count--;
    }

    return node;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    this.tail = this.tail.previous;
    this.tail.next = null;

    this.length--;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  shift() {
    this.head = this.head.next;
    this.head.previous = null;

    this.length--;
  }

  insertAtIndex(value, index) {
    if (index == 0) return this.unshift(value);
    if (index == this.length - 1) return this.push(value);

    const newNode = new Node(value);
    const nodePrevious = this.getAt(index - 1);
    const nodeNext = this.getAt(index);

    nodeNext.previous = newNode;
    nodePrevious.next = newNode;

    newNode.next = nodeNext;
    newNode.previous = nodePrevious;

    this.length++;
  }

  removeAtIndex(index) {
    if (index == 0) return this.shift(value);
    if (index == this.length - 1) return this.pop(value);

    const nodePrevious = this.getAt(index - 1);
    const nodeNext = this.getAt(index + 1);

    nodeNext.previous = nodePrevious;
    nodePrevious.next = nodeNext;

    this.length--;
  }

  deleteWholeList() {
    this.head = null;
    this.tail = null;
  }
}

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(10);
doublyLinkedList.push(15);
doublyLinkedList.push(20);
// doublyLinkedList.unshift(5);
// doublyLinkedList.pop();
// doublyLinkedList.shift();
doublyLinkedList.insertAtIndex(10000, 1);
doublyLinkedList.removeAtIndex(1);

console.log(doublyLinkedList.length);
console.dir(doublyLinkedList, { depth: null });
