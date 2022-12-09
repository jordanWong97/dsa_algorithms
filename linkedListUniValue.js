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


