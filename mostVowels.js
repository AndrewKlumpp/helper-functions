function mostVowels(sentence) {
  let words = sentence.split(' ');
  let largest = 0;
  for (let j = 0; j < words.length; j++) {

    if (countVowels(words[j]) > largest) {
      largest = j;
    }
  }
  return words[largest];
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
