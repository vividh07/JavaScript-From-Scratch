let myName = "vividh    "
let myCar = "gtr"

console.log(myName.truelength);


let myHeros = ["thor","spiderman"]
 
let heroPower = {
   thor : "hammer",
   spiderman : "sling",
    
   getSpiderPower : function(){
    console.log(`spidy power is ${this.spiderman}`);
   }
}

Object.prototype.vividh = function(){
    console.log(`vividh is present in all objects`);
}

Array.prototype.heyVividh = function(){
    console.log(`vividh says hello`);
}

heroPower.vividh()
myHeros.heyVividh()





const user = {
    name : "vividh",
    email :"vividhcho"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvaliable : false
}

const TASupport = {
    makeAssignments : 'js assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__  = user




// new apporach

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "abcdasef    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.truelength()