/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      let val = this.tail.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    } else {
      let val = this.tail.val;
      let currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    } else {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      return val;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length <= idx) {
      return null;
    } else {
      let currentNode = this.head;
      while (idx !== 0) {
        currentNode = currentNode.next;
        idx--;
      }
      return currentNode.val;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length <= idx) {
      return null;
    } else {
      let currentNode = this.head;
      while (idx !== 0) {
        currentNode = currentNode.next;
        idx--;
      }
      currentNode.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (this.length < idx) {
      return null;
    } else if (idx === 0) {
      return this.unshift(val);
    } else if (this.length === idx) {
      return this.push(val);
    } else {
      let currentNode = this.head;
      while (idx !== 1) {
        currentNode = currentNode.next;
        idx--;
      }
      let newNode = new Node(val);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length <= idx) {
      return null;
    } else if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let currentNode = this.head;
      while (idx !== 1) {
        currentNode = currentNode.next;
        idx--;
      }
      let val = currentNode.next.val;
      currentNode.next = currentNode.next.next;
      return val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let sum = 0;
    if (this.length === 0) {
      return 0;
    }
    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
