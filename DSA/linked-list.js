class Node {
  constructor(value) {
    this.value = value; // The data or value of the node
    this.next = null;   // Pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null;  // Head node of the linked list
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Traverse to the last node
      }
      current.next = newNode; // Add the new node at the end
    }
    this.size++;
  }

  removeNode(value) {
    if (this.head === null) return;
    let current = this.head;
    while (current) {
      if (current.next.value === value) {
        current.next = null;
      }
      if (current.next) {
        current = current.next;
      } else {
        current = null;
      }
    }
  }

  removeDuplicates() {
    if (!this.head) return;

    let current = this.head;
    let prev = null;
    const seenValues = new Set();

    while (current) {
      if (seenValues.has(current.value)) {
        prev.next = current.next;
      } else {
        seenValues.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }


  getSize() {
    let current = this.head;
    let size = 0;
    while (current) {
      if (current.next) {
        current = current.next;
      } else {
        current = null;
      }
      size++;
    }
    return size;
  }

   // Detect if there is a cycle in the list (Floyd's algorithm)
   hasCycle() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;            // Moves one step
      fast = fast.next.next;        // Moves two steps
      console.log('Slow', slow.value);
      console.log('fast', fast.value);
      if (slow === fast) {
        return true; // Cycle detected
      }
    }

    return false; // No cycle
  }

  // Print the values of the linked list
  print() {
    let current = this.head;
    let listValues = [];

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    console.log(listValues.join(' -> '));
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.append(60);
console.log(linkedList.head.next.next.next.value);
linkedList.head.next.next.next = linkedList.head.next; 
console.log(linkedList.head.next.value);

console.log('Has cycle', linkedList.hasCycle());