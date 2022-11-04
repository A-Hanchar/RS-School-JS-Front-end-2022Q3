const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.tree === null) {
      this.tree = newNode;

      this.rootNode = newNode;

      return;
    }

    this.insertNode(newNode);
  }

  insertNode(newNode, workTree = this.tree) {
    if (workTree.data > newNode.data) {
      workTree.left === null
        ? (workTree.left = newNode)
        : this.insertNode(newNode, workTree.left);
    }

    if (workTree.data <= newNode.data) {
      workTree.right === null
        ? (workTree.right = newNode)
        : this.insertNode(newNode, workTree.right);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, workTree = this.tree) {
    if (workTree === null) return null;

    if (workTree.data > data) return this.find(data, workTree.left);
    if (workTree.data < data) return this.find(data, workTree.right);

    return { data };
  }

  remove(data, workTree = this.tree) {
    if (workTree === null) return null;

    if (workTree.data > data) {
      workTree.left = this.remove(data, workTree.left);

      return workTree;
    }

    if (workTree.data < data) {
      workTree.right = this.remove(data, workTree.right);

      return workTree;
    }

    if (workTree.right === null && workTree.left === null) {
      workTree = null;

      return workTree;
    }

    if (workTree.right === null) {
      workTree = workTree.left;

      return workTree;
    }

    if (workTree.left === null) {
      workTree = workTree.right;

      return workTree;
    }

    let newRoot = this.min(workTree.right);

    workTree.data = newRoot;
    workTree.right = this.remove(newRoot, workTree.right);

    return workTree;
  }

  min(root = this.tree) {
    return root.left === null ? root.data : this.min(root.left);
  }

  max(root = this.tree) {
    return root.right === null ? root.data : this.max(root.right);
  }
}

module.exports = {
  BinarySearchTree,
};
