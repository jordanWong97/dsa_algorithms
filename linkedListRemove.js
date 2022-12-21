const removeNode = (head, targetVal) => {

  let current = head;
  let previousNode = null;

  if (head.val === targetVal) {
    return head.next;
  }

  while (head !== null) {

    if (current.val === targetVal) {
      previousNode.next = current.next;
      return head;
      //return head or break is fine
    }
    previousNode = current;
    current = current.next;
  }
  return head;
};

//recursive
// const removeNode = (head, targetVal) => {
//   if(head === null) return null;
//   if(head.val === targetVal){
//     return head.next;
//   }
//   head.next = removeNode(head.next, targetVal);
//   return head;
// }


module.exports = {
  removeNode,
};