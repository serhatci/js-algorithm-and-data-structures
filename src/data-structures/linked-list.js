class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  getAt(index) {
    let count = 0;
    let indexNode = this.head;
    while (indexNode) {
      if (count == index) {
        return indexNode;
      }

      indexNode = indexNode.next;
      count++;
    }
  }

  insertHead(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  insertTail(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = new Node(value);
    }
    this.length++;
  }

  insertAtIndex(value, index) {
    if (index == 0) return this.insertHead(value);

    if (index == this.length - 1) return this.insertTail(value);

    const newNode = new Node(value);
    const previous = this.getAt(index - 1);

    newNode.next = this.getAt(index);
    previous.next = newNode;

    this.length++;
  }

  deleteHead() {
    if (!this.head) return;

    this.head = this.head.next;
    this.length--;
  }

  deleteTail() {
    if (!this.head) return;
    if (this.length == 1) return this.deleteHead();

    const previous = this.getAt(this.length - 2);
    previous.next = null;

    this.length--;
  }

  deleteLinkedList() {
    this.head = null;
  }
}

let linkedList = new SinglyLinkedList();

linkedList.insertHead(10);
linkedList.insertHead(15);
linkedList.insertHead(20);
linkedList.insertTail(5);
linkedList.insertAtIndex(10000, 1);
linkedList.insertAtIndex(25, 0);
linkedList.insertAtIndex(0, 5);
linkedList.deleteHead();
linkedList.deleteTail();

console.log(linkedList.length);
console.dir(linkedList, { depth: null });
