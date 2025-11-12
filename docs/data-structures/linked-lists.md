### 📘 `linked-lists.md`

````markdown
# Linked List

A **Linked List** is a linear data structure where elements (called *nodes*) are connected using pointers.  
Unlike arrays, linked lists do not store elements in contiguous memory locations.

---

## 🧩 Structure of a Node

Each node typically contains:
- `data` — the actual value
- `next` — a pointer/reference to the next node

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
````

---

## 🪢 Example: Singly Linked List Implementation

```js
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    const nodes = [];
    while (current) {
      nodes.push(current.data);
      current = current.next;
    }
    console.log(nodes.join(" -> "));
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30
```

---

## 🔁 Types of Linked Lists

| Type                     | Description                                       |
| ------------------------ | ------------------------------------------------- |
| **Singly Linked List**   | Each node points to the next node.                |
| **Doubly Linked List**   | Each node points to both next and previous nodes. |
| **Circular Linked List** | The last node points back to the head node.       |

---

## 📊 Advantages

✅ Dynamic size
✅ Efficient insertions/deletions (compared to arrays)

## ⚠️ Disadvantages

❌ Random access is not possible
❌ Extra memory required for pointers

---

## 🧠 Common Operations

| Operation              | Time Complexity |
| ---------------------- | --------------- |
| Insertion at beginning | O(1)            |
| Insertion at end       | O(n)            |
| Deletion               | O(n)            |
| Search                 | O(n)            |

````