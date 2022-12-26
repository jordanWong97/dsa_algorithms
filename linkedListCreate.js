const createLinkedList = (values) => {
  // todo
  //create linked list with each value in arr values
  const head = new Node(null);
  let current = head;
  for (let value of values) {
    const nextNode = new Node(value);
    current.next = nextNode;
    current = current.next;
  }
  return head.next;
};

//resursive

//must pre-increment when passing argument in recursive function, or will
//increment after assignment

// const createLinkedList = (values, i = 0) => {
//   if(i === values.length) return null;
//   const head = new Node(values[i]);
//   head.next = createLinkedList(values, ++i);
//   return head;
// }

module.exports = {
  createLinkedList,
};

