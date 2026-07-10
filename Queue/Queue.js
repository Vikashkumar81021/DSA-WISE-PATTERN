class Queue {
  #item = [];
  enqueue(element) {
    this.#item.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Element not found on Queue");
    }
    return this.#item.shift();
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Element is not founf");
    }
    return this.#item[0];
  }
  isEmpty() {
    return this.#item.length === 0;
  }
  print() {
    console.log(this.#item);
  }
}

// const Q = new Queue();
// Q.enqueue(10);
// Q.enqueue(20);
// Q.enqueue(30);
// Q.enqueue(40);
// Q.enqueue(50);
// Q.dequeue();
// Q.print();
// Q.peek();
// Q.isEmpty();
// console.log(Q.isEmpty());
module.exports = Queue;
