// different ways to write an array

const arr = [1,2,34,4]
const arr1 = ["he","ho","hadh"]
const arr2 = new Array(1,2,3,4,5)


console.log(arr[2]) // it will print the value on index value on 2

// methods

// to add a value

arr.push(8) // this will add 8 at the end of the array
arr.push(190)

console.log(arr)

// .pop removes the last value

arr.pop()
console.log(arr)

///more methods

let array = [1,2,3,4,5,6,7,8,9]

array.unshift(89)  // it add value in starting
console.log(array)

array.shift()
console.log(array); //it removes value from starting

array.includes(90)  // this will give true or false that wether the no is present in array or not 
console.log(array)

array.indexOf(3)  // this will give the index value of 3
console.log(array);

array.join(" ") // it adds all the values in string
console.log(array);



// difference between slice and aplice is---->   "slice() extracts elements into a new array without modifying the original. splice() changes the contents of the original array"

array.slice(0,3)  // this will give value form index value 0 to 2 only
console.log(array)

array.splice(0,5)  // this will give array from index value 0 to 5 
console.log(array);

