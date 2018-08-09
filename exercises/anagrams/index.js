// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const charsA = buildCharMap(stringA);
//   const charsB = buildCharMap(stringB);

//   if (Object.keys(charsA).length !== Object.keys(charsB).length) {
//     return false;
//   }

//   for (let key in charsA) {
//     if (charsA[key] !== charsB[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   const cleanStr = str.replace(/[^\w]/g);

//   for (let char of cleanStr) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   if (stringA.length === 0 && stringB.length === 0) return true;
//   const modifiedA = stringA.replace(/[^\w]/g).toLowerCase();
//   const modifiedB = stringB.replace(/[^\w]/g).toLowerCase();
//   if (modifiedA.length !== modifiedB.length) {
//     return false;
//   }

//   const sortedA = modifiedA
//     .split('')
//     .sort()
//     .join('');
//   const sortedB = modifiedB
//     .split('')
//     .sort()
//     .join('');

//   return sortedA === sortedB;
// }

// function anagrams(stringA, stringB) {
//   if (stringA.length === 0 && stringB.length === 0) return true;
//   const modifiedA = stringA.replace(/[^\w]/g).toLowerCase();
//   const modifiedB = stringB.replace(/[^\w]/g).toLowerCase();
//   if (modifiedA.length !== modifiedB.length) {
//     return false;
//   }

//   const charsA = {};
//   const charsB = {};
//   const arr = [];

//   for (let char of modifiedA) {
//     if (charsA[char]) {
//       charsA[char] += 1;
//     } else {
//       charsA[char] = 1;
//     }
//   }

//   for (let char of modifiedB) {
//     if (charsB[char]) {
//       charsB[char] += 1;
//     } else {
//       charsB[char] = 1;
//     }
//   }

//   for (let key in charsA) {
//     if (charsB[key]) {
//       arr.push(charsA[key] === charsB[key]);
//     } else {
//       return false;
//     }
//   }

//   return arr.every(el => el === true);
// }
