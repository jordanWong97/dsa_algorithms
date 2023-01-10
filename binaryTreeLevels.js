//dfs
const treeLevels = (root) => {

  if (root === null) return [];

  let levels = [];
  const stack = [{ node: root, level: 0 }];

  while (stack.length !== 0) {
    const { node, level } = stack.pop();

    if (levels.length === level) {
      levels[level] = [node.val];
    } else {
      levels[level].push(node.val);
    }

    if (node.right !== null) stack.push({ node: node.right, level: level + 1 });
    if (node.left !== null) stack.push({ node: node.left, level: level + 1 });
  }

  return levels;
};

//bfs
// const treeLevels = (root) => {
//   if (root === null) return [];

//   let levels = [];
//   const queue = [{ node: root, level: 0 }];

//   while (queue.length !== 0) {
//     const { node, level } = queue.shift();

//     if (levels.length === level) {
//       levels[level] = [node.val];
//     } else {
//       levels[level].push(node.val);
//     }

//     if (node.left !== null) queue.push({ node: node.left, level: level + 1 });
//     if (node.right !== null) queue.push({ node: node.right, level: level + 1 });
//   }

//   return levels;
// };

//recursive
// const treeLevels = (root) => {
//   // todo
//   const levels = [];
//   _treeLevels(root, levels, 0);
//   return levels;
// };

//recursive helper
// const _treeLevels = (root, levels, levelNum) => {
//   if (root === null) return;

//   if (levels.length === levelNum) {
//     levels[levelNum] = [root.val];
//   } else {
//     levels[levelNum].push(root.val);
//   }

//   _treeLevels(root.left, levels, levelNum + 1);
//   _treeLevels(root.right, levels, levelNum + 1);
// };

module.exports = {
  treeLevels,
};

