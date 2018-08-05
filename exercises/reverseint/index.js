// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}

module.exports = reverseInt;

function reverseInt(n) {
  let divided = Math.abs(n);
  let remained = 0;
  let rev = 0;

  while (divided !== 0) {
    remained = divided % 10;
    divided = Math.floor(divided / 10);
    rev = rev * 10 + remained;
  }

  return Math.sign(n) * rev;
}
