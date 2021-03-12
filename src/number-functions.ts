// -----------------------------------------
// Number, Functions, Function Types

// Numbers can be stored like this
const number1: number = 5;
const number2 = 10;
let addNum: Function; // we can only assign a function to this variable

// Parameters must be passed numbers, and it must return value as string
function add(n1: number, n2: number): string {
    return (n1 + n2).toString()
}

// Parameters must be passed numbers, and it must not return anything
function add2(n1: number, n2: number): number {
    return 5
}

// We can define function like this
// Part1 is the function definition that what should function look like
// Part2 is the function
// Part1 = (firstNumber: number, secondNumber: number) => number
// Part2 = function (n1: number, n2: number): number
let add3: (firstNumber: number, secondNumber: number) => number = function (
    n1: number,
    n2: number
): number {
    return n1 + n2
}

// Parameters must be passed numbers, and in the third argument we can pass a callback function to do with the result of this number
function addNumbers(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

// if we try to pass string it would give us error because 
let result = add(number1, number2)
console.log(result)

addNumbers(25, 50, (result) => {
    console.log(result)
})