// This keyword

const user = {
    userName : "xyz",
    price : 1000,
   
    welcomeMessage :function(){
        console.log(`${this.userName}`)   //this refers to the current contxt or current function

    }
  
}
user.welcomeMessage()

// arrow function

const abc = ()=>{
    name : "nvc"
    age : 12
}

abc()

const add = (num1,num2) =>{
   return num1+num2
}

console.log(add(2,4));

// Implicit arrow function

const addNew = (num3,num4) => num3 + num4

console.log(addNew(4,6))