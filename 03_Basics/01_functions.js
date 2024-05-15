// syntax

//  function xyz(){
//     console.log(); }


//  function add(a,b){
//     result = a+b
//     return result
//  }

//  const addition = add(2,3)
//  console.log(addition)


//  function userInfo(username){ 
//     if(!username){
//         console.log("please enter a username")
//     }
//     return `${username}, just logged In` 
//  }

//  console.log(userInfo("xyz"))
//  console.log(userInfo(""))
//  console.log(userInfo())

// if arguments are unknown like in shopping 

// rest operator

function calculatorCartPrice(...num){
    return num
}
console.log(calculatorCartPrice(200,100,213,214))  // but this will be in  array form

// how to pass a object in a function

const user ={
    userName : "xyz",
    price : 332

}

function newObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}

newObject(user)


// how to pass an array in a function

const array =[100,200,400,12,1243]

function returnValue(getarray){
    return getarray[1]
}

console.log(returnValue(array));