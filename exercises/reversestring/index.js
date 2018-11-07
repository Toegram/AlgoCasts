// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let revArr = []
  debugger;
  str.split('').forEach( char => revArr.unshift(char) )
  return revArr.join('')
}

reverse("tony")

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str){
//   let reversed = ''
//   for (let char of str) {
//     reversed = char + reversed
//   }
//
//   return reversed
// }

// function reverse(str){
//   return str.split('').reduce( (rev, char) => char + rev
//   , '')
// }

module.exports = reverse;
