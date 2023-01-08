//using dfs iterative
const treeIncludes = (root, target) => {
  // todo
  if (root === null) return false;
  const stack = [root];
  while (stack.length !== 0) {
    const node = stack.pop();
    if (node.val === target) {
      return true;
    }
    node.right ? stack.push(node.right) : null;
    node.left ? stack.push(node.left) : null;
  }
  return false;
};

module.exports = {
  treeIncludes,
};

