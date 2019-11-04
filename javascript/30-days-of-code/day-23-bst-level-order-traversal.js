const queue = [];
let output = '';

function levelOrder(root) {
  queue.push(root);

  while (queue.length > 0) {
    printNext();
  }
}

function printNext() {
  const node = queue.shift();
  if (node == null) return;

  output += node.data + ' ';

  queue.push(node.left);
  queue.push(node.right);
}
