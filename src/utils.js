// src/utils.js
export function pointsForWord(word) {
  let points = 0;

  // Loop through each character in the word
  for (const char of word) {
    // Use regex to test vowels (case-insensitive)
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }

  return points;
}
