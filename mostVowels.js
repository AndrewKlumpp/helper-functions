function mostVowels(sentence) {
  // your code here
}

function countVowels(word) {
  let count = 0;
  let vowels = "aeiou";
  for (i = 0; i < word.length; i++) {
    char = word[i];
    if (vowels.includes(char)) {
      count++
    }
  }
  return count;
};


console.log(mostVowels("what a wonderful life")); // "wonderful"
