//recursive check for bin tree height
//basis: give all end nodes val of -1 for empty left and right
//if left/right has a node, the value bubbles up 0
const howHigh = (node) => {
  // todo
  if (node === null) return -1;

  const left = howHigh(node.left);
  const right = howHigh(node.right);

  return 1 + Math.max(left, right);
};

module.exports = {
  howHigh,
};

