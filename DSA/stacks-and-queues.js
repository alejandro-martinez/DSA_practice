// stacks and queues

// Data structure that permits storage and retrieval of data itemps independent of content.
// By contrast, Dictionaries (hash map) allow retrieval based on key values or content.

//  Stacks. Support retrieval by Last-in, first-out (LIFO) order.
// Use it when the retrieval order does not match.

// put - get usually called push - pop

// Push(x, s) -- Insert item x at the top of the stack s
// Pop(s) - return and remove the top item of stack s


// Queues - Support retrieval in FIFO.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.unshift(item);
  }

  pop() {
    return this.items.pop();
  }

  print() {
    for (let item of this.items) {
      console.log(item);
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(3);
stack.print();

class Queue {
  
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    while (this.items.length > 0) {
      console.log(this.items.shift());
    }
  }
}

const queue = new Queue();
queue.enqueue('Alejandro');
queue.enqueue('Ezequiel');
queue.dequeue();

