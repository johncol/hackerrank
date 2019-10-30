const getHeight = function(node) {
  if (!node) {
    return -1;
  }
  if (!node.right && !node.left) {
    return 0;
  }

  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};
