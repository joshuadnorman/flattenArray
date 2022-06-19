const flatten = require('./flatten')

test('Flatten function should exist',()=>{
    typeof(flatten=="function")
})

test('Should return flattened array',()=>{
    let input = [1,7,[4,4,[3,6,4,6]],8565,987,[342]]
    let output = flatten(input)

    //Specify depth for test, can probably check depth using a function but for testing it is better to manually define
    expect(output).toStrictEqual(input.flat(3))
})

test('Length of flattened array should be greater nested array',()=>{
    let input = [4534,453,2342,4646,[564,345,23],[4,[64,23,[1868]]]]
    expect(flatten(input.length)).not.toBe(input.length)
})

test('Flatten should return an array',()=>{
    expect(flatten([1,2,3,[4,[5,6]]])).toBeInstanceOf(Array)
})

test('Flatten should only accept array',()=>{
    expect(flatten("random string")).toBeUndefined()
    expect(flatten(6584198,45435,435)).toBeUndefined()
    expect(flatten([1,2,3,[4,[5,6]]])).toBeInstanceOf(Array)
})