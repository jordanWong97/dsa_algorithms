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

module.exports = {
  createLinkedList,
};

