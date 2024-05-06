let number = "1"
console.log(typeof(number))

let newNumber = Number(number)
console.log(typeof(newNumber))   // this will convert string into a number


let num = 1
let newNum = Boolean(num)
console.log(newNum)   // if 1 is written in a number than boolean value of it wil be true

let num1 = 0
let newNum1 = Boolean(num1)
console.log(newNum1)     // if 0 is written in a number than boolean value of it wil be false

let a = ""
let newA = Boolean(a)
console.log(newA)   // if we convert a empy string into a boolean than the boolean type is false

let b = "hello"
let newB = Boolean(b)
console.log(newB)   // if anything is written inside string than the boolean value will be true


let num2 = 12
let newNum2 = String(num2)       // by this we can change a number to string
console.log(newNum2)
console.log(typeof(newNum2))  




                           //// OPERATIONS ////


let value = 3
let negValue = -value     // to change the positive or negative sign of a value
console.log(negValue)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")


console.log(true)
console.log(+true)
