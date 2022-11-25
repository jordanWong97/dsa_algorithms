const pairProduct = (numbers, targetProduct) => {
  let indexTracker = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const factor = targetProduct / num;

    if (factor in indexTracker) {
      return [i, indexTracker[factor]];
    }
    indexTracker[num] = i;
  }
};

module.exports = {
  pairProduct,
};


