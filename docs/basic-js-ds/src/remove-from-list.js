const { ListNode } = require("../extensions/list-node.js");

const addNode = (node, listNode) => {
  if (node.next === null) {
    node.next = listNode;

    return;
  }

  addNode(node.next, listNode);
};

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l === null) return null;

  let copyL = null;

  while (l !== null) {
    if (l.value !== k) {
      const node = new ListNode(l.value);

      copyL === null ? (copyL = node) : addNode(copyL, node);
    }

    l = l.next;
  }

  return copyL;
}

module.exports = {
  removeKFromList,
};
