const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};


//recursive
// const reverseList = (head, prev = null) => {
//   if(head === null) return prev;
//   const next = head.next;
//   head.next = prev;
//   return reverseList(next, head);
// };

module.exports = {
  reverseList,
};

