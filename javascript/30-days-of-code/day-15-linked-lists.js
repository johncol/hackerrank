function insert(head, data) {
  const newNode = { data };
  if (!head) {
    return newNode;
  }

  let pointer = head;
  while (pointer.next) {
    pointer = pointer.next;
  }

  pointer.next = newNode;

  return head;
}
