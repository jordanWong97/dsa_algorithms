//bfs
//use bfs because dfs will go down branch by branch, one of earlier branches
//can be longer/deeper, using bfs ensures goes to lowest leaf level and right
//will be last
const bottomRightValue = (root) => {
  // todo
  let queue = [root];
  let current = null;

  while (queue.length !== 0) {
    current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return current.val;
};


module.exports = {
  bottomRightValue,
};