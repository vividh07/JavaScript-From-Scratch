// ES6

// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const vividh = new user("vividh","vd@gmail.com","123")

// console.log(vividh.encryptPassword());
// console.log(vividh.changeUserName());



//behind the scene

// function user(username,email,password){
//     this.username = username
//         this.email = email
//         this.password = password
// }

// user.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// const gaurav = new user("vividh","eamil.com","4536")

// console.log(gaurav.encryptPassword());