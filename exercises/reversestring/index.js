// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// function reverse(str) {
//   let rev = '';
//   for (let char of str) {
//     rev = char + rev;
//   }
//   return rev;
// }

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
//   return str
//     .split('')
//     .reverse()
//     .join('');
//   Solution 1
//   const reversedArr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedArr.push(str[i]);
//   }
//   return reversedArr.join('');
//   Solution 2
//   let rev = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return rev;
//   Solution 3
//   const strArr = [...str];
//   let tmp;
//   for (let i = 0; i < str.length / 2; i++) {
//     tmp = strArr[str.length - 1 - i];
//     strArr[str.length - 1 - i] = strArr[i];
//     strArr[i] = tmp;
//   }
//   return strArr.join('');
// }
