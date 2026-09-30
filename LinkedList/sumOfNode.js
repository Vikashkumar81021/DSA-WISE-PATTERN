function sumofNodes(head, n) {
  let sum = 0;
  let curr = head;
  let count = 0;
  while (curr !== null) {
    count++;
  }
  let start = count - n + 1;
  curr = head;
  let pos = 1;
  while (pos < start) {
    curr = curr.next;
    pos++;
  }

  while (curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
}
