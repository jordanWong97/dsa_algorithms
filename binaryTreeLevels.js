const treeLevels = (root) => {
  // todo
  const levels = [];
  _treeLevels(root, levels, 0);
  return levels;
};

const _treeLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  _treeLevels(root.left, levels, levelNum + 1);
  _treeLevels(root.right, levels, levelNum + 1);
};

module.exports = {
  treeLevels,
};

