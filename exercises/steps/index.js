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

//recursive solution
// function steps(n, row = 0, stair = '') {
//
//   if (n === row ) {
//     return;
//   }
//
//   if (n === stair.length){
//     console.log(stair)
//     return steps(n, ++row)
//   }
//
//   if (stair.length <= row){
//     stair += '#'
//   } else {
//     stair += ' '
//   }
//   // stair.length <= row ? stair += '#' : stair += ' '
//
//   steps(n, row, stair)
//
// }
//



function steps(n) {

  let stepArr = [...Array(n).keys()]

  stepArr.forEach( row => {

    let stair = ''

    stepArr.forEach( column => {

      if ( column <= row ) {
        stair += '#'
      } else {
        stair += ' '
      }

    })
    console.log(stair);
  })
}



module.exports = steps;
