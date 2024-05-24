// immediately invoked functions expression

 (function abc(){
    console.log('hello')
 })(); 

 // to pass something in IIFE arrow function

 ((name)=>{
    console.log(`hello ${name}`)
 })('amit')