// anagrams

const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  let obj1 = getFreq(s1);
  let obj2 = getFreq(s2);
  return Object.entries(obj1).sort().toString() === Object.entries(obj2).sort().toString();
};


function getFreq(items) {
  const freqs = {};
  for (let item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }
  return freqs;
}

// anagrams with O(n) time complexity, do not use sort method to compare

const anagrams2 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  let obj1 = getFreq(s1);

  for (let char of s2) {
    if (char in obj1) {
      obj1[char] -= 1;
    } else {
      return false;
    }
  }
  for (let char in obj1) {
    if (obj1[char] !== 0) {
      return false;
    }
  }
  return true;
};