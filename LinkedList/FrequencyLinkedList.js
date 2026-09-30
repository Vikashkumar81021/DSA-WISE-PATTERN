function count(head, key) {
  let curr = head;
  let count = 0;
  while (curr !== null) {
    if (curr.data === key) {
      count++;
    }
    curr = curr.next;
  }
  return count;
}
