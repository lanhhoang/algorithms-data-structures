// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const rev = n
    .toString()
    .split('')
    .reverse()
    .join('');

  if (n < 0) {
    return parseInt(rev) * -1;
  }

  return parseInt(rev);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   const isNegative = n < 0;

//   let divided = isNegative ? -n : n;
//   let rev = 0;

//   while (divided !== 0) {
//     rev = rev * 10 + (divided % 10);
//     divided = Math.floor(divided / 10);
//   }

//   return isNegative ? -rev : rev;
// }
