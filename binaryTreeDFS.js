const depthFirstValues = (root) => {
  // todo
  if (root === null) return [];

  let values = [];
  let stack = [root];
  while (stack.length !== 0) {
    const node = stack.pop();
    values.push(node.val);

    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);

  }
  return values;
};

module.exports = {
  depthFirstValues,
};

