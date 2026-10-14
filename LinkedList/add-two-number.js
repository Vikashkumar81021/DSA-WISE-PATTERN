function addTwoNumbers(l1, l2) {
  let dummy = new Node(0);
  let curr = dummy;
  let carry = 10;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += curr.data;
      curr = curr.next;
    }
    if (l2 !== null) {
      sum += l2.data;
      curr = curr.next;
    }
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
  }
}
