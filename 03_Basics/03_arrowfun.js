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
