// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB){

  return cleanString(stringA) === cleanString(stringB)

}

//removes unwanted characters using regex, turns into array, sorts it, turns back into string
function cleanString(string){
  return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}





// function anagrams(stringA, stringB) {
//
//   const wordA = stringA.replace(/[^\w]/g, "").toLowerCase()
//   const wordB = stringB.replace(/[^\w]/g, "").toLowerCase()
//
//   const objA = {}
//   const objB = {}
//
//   let keyCountA = 0
//   let keyCountB = 0
//
//   let charCountA = []
//   let charCountB = []
//
//   for (let char in wordA) {
//     if (objA[char]){
//       objA[char]++
//       charCountB.push(char)
//
//     } else {
//       objA[char] = 1
//       keyCountA++
//     }
//   }
//
//   for (let char in wordB) {
//     if (objB[char]) {
//       objB[char]++
//       charCountA.push(char)
//     } else {
//       objB[char] = 1
//       keyCountB++
//     }
//   }
//
// //checks if number of keys is same in both objects && checks if array contains same keys
//   return keyCountA === keyCountB && charCountA.sort() === charCountB.sort()
// }


// function anagrams(stringA, stringB){
//
//   //creates objects with character keys and count values
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
//   //if the key lengths do not match return false
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//
//   //if the values do not match return false
//   for (let char in aCharMap){
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//
//   //do not forget the true case return
//   return true
// }
//
// //helper function returns object with character as key and character count as value
// function buildCharMap(string){
//
//   const charMap = {}
//
// //regex removes non letters, method lower cases string
//   for (let char of string.replace(/[^\w]/g).toLowerCase()) {
//     charMap[char] ? charMap[char]++ : charMap[char] = 1
//   }
//
//   return charMap
//
// }



module.exports = anagrams;
