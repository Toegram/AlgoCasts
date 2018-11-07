// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


function fizzBuzz(n) {

  for (let num = 1; num <= n; num++) {

    //is the number divisible by 3 and by 5 ?
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('fizzbuzz')

    //is the number divisible by 3 ?
    } else if (num % 3 === 0) {
      console.log('fizz')

    //is the number divisibile by 5 ?
    } else if (num % 5 === 0) {
      console.log('buzz')

    //every other number must not be divisible by 3 or 5 ?
    } else {
      console.log(num)
    }
  }

}


module.exports = fizzBuzz;
