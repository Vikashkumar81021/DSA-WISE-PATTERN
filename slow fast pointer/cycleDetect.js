class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);

head.next = second;
second.next = third;
third.next = fourth;
//4 dubra aa rha hai 2nd pe so cyccle create ho rha
fourth.next = second;
function isCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
console.log(isCycle(head));
