const breadthFirstValues = (root) => {
  // todo
  //horizontal then vertical
  if (root === null) return [];
  let values = [];
  let queue = [root];
  while (queue.length !== 0) {
    const node = queue.shift();

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);

    values.push(node.val);
  }
  return values;
};

module.exports = {
  breadthFirstValues,
};