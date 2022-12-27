

const addLists = (head1, head2) => {
  // todo
  let current1 = head1;
  let current2 = head2;
  let sumHead = new Node(null);
  let currentSum = sumHead;

  while (current1 !== null && current2 !== null) {
    if (current1 === null) {
      current1.val = 0;
    }
    if (current2 === null) {
      current2.val = 0;
    }
    currentSum.next = new Node(current1.val + current2.val);
    currentSum = currentSum.next;
    current1 = current1.next;
    current2 = current2.next;
  }
  return sumHead.next;
};

module.exports = {
  addLists,
};

