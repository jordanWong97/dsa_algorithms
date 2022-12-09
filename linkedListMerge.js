const mergeLists = (head1, head2) => {

  const tempHead = new Node(null);
  let tail = tempHead;
  let curr1 = head1;
  let curr2 = head2;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
  }
  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;

  return tempHead.next;
};


//recursively

// const mergeLists = (head1, head2) => {
//   if(head1 === null && head2 === null) return null;
//   if(head1 === null) return head2;
//   if(head2 === null) return head1;
//   if(head1.val < head2.val){
//     const nextHead1 = head1.next;
//     head1.next = mergeLists(nextHead1, head2);
//     return head1;
//   } else{
//     const nextHead2 = head2.next;
//     head2.next = mergeLists(head1, nextHead2)
//     return head2;
//   }
// }

module.exports = {
  mergeLists,
};
