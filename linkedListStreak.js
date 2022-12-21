
const longestStreak = (head) => {
  // todo
  //highest count
  //streak value
  let maxCount = 0;
  let count = 0;
  let previousVal = null;
  let current = head;

  while (current !== null) {

    if (current.val === previousVal) {
      count++;
    } else {
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
    }

    previousVal = current.val;
    current = current.next;
  }
  return maxCount;
};

module.exports = {
  longestStreak,
};

