# Trees

A **Tree** is a hierarchical data structure consisting of nodes, where each node has a parent (except the root) and zero or more children.

## 🌱 Basic Terminology

| Term | Description |
|------|--------------|
| **Root** | The topmost node of a tree |
| **Parent** | A node that has child nodes |
| **Child** | A node directly connected to another node when moving away from the root |
| **Leaf** | A node with no children |
| **Height** | The length of the longest path from the root to a leaf |

## 🌲 Binary Tree

A **Binary Tree** is a tree where each node can have at most **two children** — left and right.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (!node.left) {
        node.left = newNode;
        return;
      } else if (!node.right) {
        node.right = newNode;
        return;
      } else {
        queue.push(node.left, node.right);
      }
    }
  }

  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.inorder(); // Output: 20 10 30
````

## 🌿 Types of Trees

| Type                         | Description                                                                |
| ---------------------------- | -------------------------------------------------------------------------- |
| **Full Binary Tree**         | Every node has 0 or 2 children.                                            |
| **Complete Binary Tree**     | All levels are filled except possibly the last, filled from left to right. |
| **Binary Search Tree (BST)** | Left subtree < Root < Right subtree.                                       |
| **AVL Tree**                 | Self-balancing BST with height balance condition.                          |
| **N-ary Tree**               | A node can have up to N children.                                          |


## ⚙️ Traversal Methods

1. **Inorder (Left → Root → Right)**
2. **Preorder (Root → Left → Right)**
3. **Postorder (Left → Right → Root)**
4. **Level Order (Breadth-First Traversal)**

## 🧠 Use Cases

* Hierarchical data (file systems, org charts)
* Expression parsing (syntax trees)
* Database indexing (B-Trees)
* AI algorithms (decision trees, minimax trees)


## 📈 Time Complexity

| Operation | Average Case | Worst Case |
| --------- | ------------ | ---------- |
| Search    | O(log n)     | O(n)       |
| Insert    | O(log n)     | O(n)       |
| Delete    | O(log n)     | O(n)       |

```
