const intersection = (a, b) => {
  let result = [];
  let set1 = new Set();
  for (let num of a) {
    set1.add(num);
  }

  for (let num of b) {
    if (set1.has(num)) {
      result.push(num);
    }
  }
  return result;
};

module.exports = {
  intersection,
};

