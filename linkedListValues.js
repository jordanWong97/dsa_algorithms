// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    console.log(result);
    current = current.next;
  }
  return result;
};

module.exports = {
  linkedListValues,
};

