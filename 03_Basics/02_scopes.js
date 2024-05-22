// LET  VAR CONST

if(true){
    let a = 2
    const b = 3
    var c = 5
}

//  console.log(a);   // this will not get print because let works inside the scope 
//  console.log(b) ;   //this will not get print because let works inside the scope
console.log(c)    // this will print because var is a globally defined variable

// var value can be changed at anytime

// let value cannot be chaged but it can be reinitialize in a scope

// const value cannot be changed or redeclared at any time 
 

// nested scope

 function one(){
    const username = "xyz"
    function two(){
        const user = "abc"

    }
    //console.log(user)    // this will not work because parent function cannot access child's variable
    two()

 }
 console.log(one())