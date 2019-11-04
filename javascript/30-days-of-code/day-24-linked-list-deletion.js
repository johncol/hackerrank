function removeDuplicates(head) {
  let node = head;
  while (node) {
    while (node.next && node.data === node.next.data) {
      node.next = node.next.next;
    }
    node = node.next;
  }

  return head;
}
