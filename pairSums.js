const pairSum = (numbers, targetSum) => {
  let indexTracker = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const difference = targetSum - num;

    if (difference in indexTracker) {
      return [i, indexTracker[difference]];
    }
    indexTracker[num] = i;
  }
};

module.exports = {
  pairSum,
};

