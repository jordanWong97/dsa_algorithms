const mostFrequentChar = (s) => {
  // getFreqs is generic counter function
  let counter = getFreqs(s);
  let maxCount = 0;
  let maxLetter = '';
  console.log(counter);
  for (let letter in counter) {
    if (counter[letter] > maxCount) {
      maxCount = counter[letter];
      maxLetter = letter;
    }
  }
  return maxLetter;
};


module.exports = {
  anagrams, anagrams2
};