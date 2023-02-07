//recursive
const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;

  //check if values exist, if not return 0 for either instead of null
  const v1 = head1 === null ? 0 : head1.val;
  const v2 = head2 === null ? 0 : head2.val;

  //sum is sum of a column, digit stays, carry over as 1 to .next
  const sum = v1 + v2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;

  const result = new Node(digit);

  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;

  result.next = addLists(next1, next2, nextCarry);

  return result;
};

module.exports = {
  addLists,
};

