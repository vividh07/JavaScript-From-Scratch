// immediately invoked functions expression
// named IIFE
 (function abc(){
    console.log('hello')
 })(); 

 // to pass something in IIFE arrow function
// unamed IIFE
 ((name)=>{
    console.log(`hello ${name}`)
 })('amit')