//Created this to add and run some manual tests

const flatten = require('./flatten')

//Example provided from assessment desciption
console.log(flatten([ 1, [ 2, [ 3 ] ], 4 ]))

//Random example -> Depth = 3 
console.log(flatten([1,7,[4,4,[3,6,4,6]],8565,987,[342]]))

//JS flat() does not work unless depth specified 
console.log([1,7,[4,4,[3,6,4,6]],8565,987,[342]].flat(3))
