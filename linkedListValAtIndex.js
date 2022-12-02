const getNodeValue = (head, index) => {
  let current = head;
  while (current !== null) {
    if (index === 0) {
      return current.val;
    }
    current = current.next;
    index--;
  }
  return null;
};


//recursive
// const getNodeValue = (head, index) => {
//   if(head === null) return null;
//   if(index === 0) return head.val;
//   return getNodeValue(head.next, index-1);
// }

module.exports = {
  getNodeValue,
};