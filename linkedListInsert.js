const insertNode = (head, value, index) => {
  // todo
  let current = head;
  let count = 0;

  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }

  while (current !== null) {
    if (count === index - 1) {
      const newNode = new Node(value);
      newNode.next = current.next;
      current.next = newNode;
    }
    count++;
    current = current.next;
  }
  return head;
};

//recursive
// const insertNode = (head, value, index, count = 0) => {

//   if(index === 0){
//     const newNode = new Node(value);
//     newNode.next = head;
//     return newNode;
//   }

//   if(count === index - 1){
//     const nextNode = head.next;
//     head.next = new Node(value);
//     head.next.next = nextNode;
//     return head;
//   }

//   insertNode(head.next, value, index, count + 1);
//   return head;
// }

module.exports = {
  insertNode,
};