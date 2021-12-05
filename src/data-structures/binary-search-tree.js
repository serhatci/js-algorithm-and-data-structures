class Node {
  constructor(value = null) {
    this.value = value;
    this.lower = null;
    this.higher = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
    this.size = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.tree) {
      this.tree = newNode;
      return this;
    } else {
      let searchNode = this.tree;

      while (true) {
        if (newNode.value == searchNode.value) return undefined;

        if (newNode.value > searchNode.value) {
          if (searchNode.higher) {
            searchNode = searchNode.higher;
          } else {
            searchNode.higher = newNode;
            break;
          }
        } else {
          if (searchNode.lower) {
            searchNode = searchNode.lower;
          } else {
            searchNode.lower = newNode;
            break;
          }
        }
      }
    }

    this.size++;
  }

  find(value) {
    let searchNode = this.tree;

    while (true) {
      if (!searchNode) return false;
      if (value == searchNode.value) return true;

      if (value > searchNode.value) {
        searchNode = searchNode.higher;
      } else if (value < searchNode.value) {
        searchNode = searchNode.lower;
      }
    }
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(18);
binarySearchTree.insert(8);
binarySearchTree.insert(9);
binarySearchTree.insert(4);

console.dir(binarySearchTree, { depth: null });
console.log(binarySearchTree.find(4));
