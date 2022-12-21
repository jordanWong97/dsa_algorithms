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

module.exports = {
  insertNode,
};