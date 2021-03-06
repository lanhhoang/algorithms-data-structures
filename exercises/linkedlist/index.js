// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
    // let last = this.head;
    // while (last && last.next) {
    //   last = last.next;
    // }
    // return last;
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    // this.head = this.head && this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      return (this.head = null);
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;

    // while (node) {
    //   if (!node.next) {
    //     previous.next = null;
    //   }

    //   previous = node;
    //   node = node.next;
    // }
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
    // const node = new Node(data);
    // const last = this.getLast();
    // if (!last) {
    //   // Empty LinkedList
    //   this.head = node;
    // }
    // last.next = node;
  }

  getAt(index) {
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) {
        return node;
      }

      count++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return null;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(func) {
    let node = this.head;
    let count = 0;

    while (node) {
      func(node, count);
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
