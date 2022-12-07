
const zipperLists = (head1, head2) => {
  //2 pointers, 1 for l1 and 1 for l2
  let tail = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let count = 0;

  while (curr1 !== null && curr2 !== null) {
    if (count % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    count++;
  }

  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;

  return head1;
};



module.exports = {
  zipperLists,
};

