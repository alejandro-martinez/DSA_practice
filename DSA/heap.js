// Heap

// A heap is a binary tree-based data structure that follows the heap property. 
// In a heap, the value of each node is compared to the values of its children in a specific way:

// Max-Heap: The value of each node is greater than or equal to the values of its children,
// ensuring that the root node contains the maximum value. As you move down the tree, the values decrease.

// Min-Heap: The value of each node is less than or equal to the values of its children,
// ensuring that the root node contains the minimum value. As you move down the tree, the values increase.

// A heap can be represented with an array:
/*
         0

    1           2

 3    5      4    6  

 0 1 2 3 5 4 6

 children of x:
  left node = 2n + 1
  right node 2 n + 2

*/

class Heap {
  constructor(items) {
    this.items = items;
  }

  getNodeChildren(nodeValue) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === nodeValue) {
        return [
          this.items[2 * i + 1],
          this.items[2 * i + 2],
        ];
      }
    }
  }

  getChildrenParent(nodeValue) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === nodeValue) {
        return this.items[Math.floor((i - 1) / 2)];
      }
    }
  }
}

const heap = new Heap([0, 1, 2, 3, 5, 4, 6]);

console.log(heap.getNodeChildren(1)); // [3, 5]
console.log(heap.getNodeChildren(2)); // [4, 6]

console.log(heap.getChildrenParent(6)); // 2
console.log(heap.getChildrenParent(3)); // 1