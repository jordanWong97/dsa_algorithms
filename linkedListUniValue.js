const isUnivalueList = (head) => {
  let curr = head;
  let original = head.val;
  while (curr !== null) {
    if (curr.val !== original) {
      return false;
    }
    curr = curr.next;
  }
  return true;
};

//resursive

// const isUnivalueList = (head, previousVal = null) => {
//   if(head === null) return true;

//   if(previousVal !== null && head.val !== previousVal) return false;

//   return isUnivalueList(head.next, head.val);
// }

module.exports = {
  isUnivalueList,
};

