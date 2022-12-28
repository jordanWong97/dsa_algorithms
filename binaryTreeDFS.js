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

//recursive

//checks all left recursively, then checks right for each node
// return [root val, spread all left values then right]

// const depthFirstValues = (root) => {
//   if(root === null) return [];

//   const left = depthFirstValues(root.left);
//   const right = depthFirstValues(root.right);

//   return [root.val, ...left, ...right]
// }



module.exports = {
  depthFirstValues,
};

