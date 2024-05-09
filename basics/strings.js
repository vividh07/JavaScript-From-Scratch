const name = "rahul"
const repoCount = 50

console.log(name + repoCount);    //concatenation not a good way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("mukesh");


// string methods

console.log(gameName[2]);   //this will give the key value of the string on 2 index
console.log(gameName.length)  // will give the length of the string
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))  // this will give the element on position on 2 index
console.log(gameName.indexOf('k'))   // this will give the index value of the word 

const newString = gameName.substring(0,3)
console.log(newString)                           // this will print the string from index 0 to 2

const anotherString = gameName.slice(-4,3)   // will give string from back   we can give negative value in slice
console.log(anotherString)

const url = "https://google.com/google%20chrome"
console.log(url.replace('%20','-'))

const para = 'this is a paragraph'
console.log(para.split(' '));