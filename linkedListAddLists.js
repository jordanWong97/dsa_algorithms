//recursive
// const addLists = (head1, head2, carry = 0) => {
//   if (head1 === null && head2 === null && carry === 0) return null;

//   //check if values exist, if not return 0 for either instead of null
//   const v1 = head1 === null ? 0 : head1.val;
//   const v2 = head2 === null ? 0 : head2.val;

//   //sum is sum of a column, digit stays, carry over as 1 to .next
//   const sum = v1 + v2 + carry;
//   const nextCarry = sum > 9 ? 1 : 0;
//   const digit = sum % 10;

//   const result = new Node(digit);

//   const next1 = head1 === null ? null : head1.next;
//   const next2 = head2 === null ? null : head2.next;

//   result.next = addLists(next1, next2, nextCarry);

//   return result;
// };

//iterative approach
const addLists = (head1, head2) => {
  // todo
  const result = new Node(null);
  let tail = result;

  let carry = 0;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null || current2 !== null || carry !== 0) {

    const v1 = current1 === null ? 0 : current1.val;
    const v2 = current2 === null ? 0 : current2.val;
    const sum = v1 + v2 + carry;
    carry = sum > 9 ? 1 : 0;

    const digit = sum % 10;
    tail.next = new Node(digit);

    tail = tail.next;
    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;
  }
  return result.next;
};

module.exports = {
  addLists,
};

