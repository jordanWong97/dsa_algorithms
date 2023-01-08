//dfs recursive
const pathFinder = (root, target) => {
  // todo
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const left = pathFinder(root.left, target);
  if (left !== null) return [root.val, ...left];

  const right = pathFinder(root.right, target);
  if (right !== null) return [root.val, ...right];

  return null;
};

module.exports = {
  pathFinder,
};