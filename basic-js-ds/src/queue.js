const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let listNode = new ListNode(value);

    if (this.queue === null) {
      this.queue = listNode;

      return;
    }

    this.addNode(this.queue, listNode);
  }

  addNode(node, listNode) {
    if (node.next === null) {
      node.next = listNode;

      return;
    }

    this.addNode(node.next, listNode);
  }

  dequeue() {
    const topElementValue = this.queue.value;

    this.queue = this.queue.next;

    return topElementValue;
  }
}

module.exports = {
  Queue,
};
