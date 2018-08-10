// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {}

module.exports = steps;

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// function steps(n) {
//   if (n < 2) {
//     console.log('#');
//   } else {
//     for (let i = 1; i <= n; i++) {
//       str = repeatString('#', i) + repeatString(' ', n - i);
//       console.log(str);
//     }
//   }
// }

// function repeatString(str, count) {
//   return new Array(count + 1).join(str);
// }
