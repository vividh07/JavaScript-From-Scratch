// syntax

//  function xyz(){
//     console.log(); }


 function add(a,b){
    result = a+b
    return result
 }

 const addition = add(2,3)
 console.log(addition)


 function userInfo(username){ 
    if(!username){
        console.log("please enter a username")
    }
    return `${username}, just logged In` 
 }

 console.log(userInfo("xyz"))
 console.log(userInfo(""))
 console.log(userInfo())