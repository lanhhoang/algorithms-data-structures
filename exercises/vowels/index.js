// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// function vowels(str) {
//   const filteredStr = str.match(/[aeiou]/gi);

//   if (filteredStr) {
//     return filteredStr.length;
//   } else {
//     return 0;
//   }
// }

// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let char of str) {
//     if (vowels.indexOf(char.toLowerCase()) !== -1) {
//       count++;
//     }
//   }

//   return count;
// }
