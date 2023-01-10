const levelAverages = (root) => {
  // todo
  let levels = [];
  _treeLevels(root, levels, levelNum = 0);

  let avgs = [];
  for (let level of levels) {
    avgs.push(average(level));
  }
  return avgs;
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

const average = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};

module.exports = {
  levelAverages,
};