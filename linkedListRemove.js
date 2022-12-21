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
    }
    previousNode = current;
    current = current.next;
  }
  return head;
};


module.exports = {
  removeNode,
};