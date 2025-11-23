# ✅ Min-Heap Insert (Trickle Up) — Tree Visualization

### **Step 0 — Before Insert**

```mermaid
graph TD
    A((3))
    B((5))
    C((8))
    D((7))
    E((9))
    F((10))
    G((15))

    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
```

---

### **Step 1 — Insert 1 at the bottom**

```mermaid
graph TD
    A((3))
    B((5))
    C((8))
    D((7))
    E((9))
    F((10))
    G((15))
    H(("1"))

    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    D --> H
```

---

### **Step 2 — 1 < 7 → Swap**

```mermaid
graph TD
    A((3))
    B((5))
    C((8))
    D(("1"))
    E((9))
    F((10))
    G((15))
    H((7))

    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    D --> H
```

---

### **Step 3 — 1 < 8 → Swap**

```mermaid
graph TD
    A((3))
    B((5))
    C(("1"))
    D((7))
    E((9))
    F((10))
    G((15))
    H((8))

    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    D --> H
```

---

### **Step 4 — 1 < 3 → Final Swap**

```mermaid
graph TD
    A(("1"))
    B((5))
    C((3))
    D((7))
    E((9))
    F((10))
    G((15))
    H((8))

    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    D --> H
```

---

## ✔ These all render correctly

— No nested subgraphs
— No invalid structures
— Mermaid-compatible tree layout
— Easy to follow swaps

---

If you'd like, I can combine them into:
✨ A carousel-style sequence
✨ A side-by-side array + tree representation
✨ A compact animation-like flow

Just tell me!
