// syntax

const value = {

}   // it is a emply object
// how to declare symbol
const mySym = Symbol("key1")

const user ={
    [mySym] : "myKey1",   // to write a symbol in object
    name : "xyz",
    age :23,
    location : "delhi",
    email : "xyz@gmail.com",
}
// how to access objects

console.log(user.name)
console.log(user["age"]);  // best way to access a value
console.log(user["email"]);
console.log(user[mySym]); // to access a symbol

user.email = "abc@gmail.com"  // to change a object
// Object.freeze(user)   // to freeze a value
console.log(user);

// user.email = "abcd@google.com"
// console.log(user);

user.greeting = function(){
    console.log(`hello user, ${this.name}`)  // using this keyword we can use a object value we can access all the properties of object using this
} 
console.log(user.greeting());