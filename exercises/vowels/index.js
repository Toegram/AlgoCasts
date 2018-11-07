// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  // const vowelChecker = ['a', 'e', 'i', 'o', 'u']
  // let vowelCount = 0
  //
  // str
  //   .toLowerCase()
  //   .split('')
  //   .forEach( char => {
  //     if ( vowelChecker.includes(char) ){
  //       vowelCount++
  //     }
  //   })
  // return vowelCount

  const matches = str.match(/[aeiou]/gi)

  //match uses regex.. check for any matches of characters inside the /[ ]/
  //'g' makes it not stop at the first match found
  //'i' stands for insensitive or CASE insensitive

  return matches === null ? 0 : matches.length

}

module.exports = vowels;
