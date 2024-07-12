// object litreal

const user = {
    username : "abc",
    pass : 123,
  getUserDetails : function (){
    console.log("got user details from database");
    console.log(this.username);
  }
  
}

console.log(user.pass);
console.log(user.getUserDetails());



// constructor function like new keyword 

function user1(name,loginCount,isLoggedIn){
    this.name = name;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.name}`);
    }
return this  // by using this we can access all the values  but not nessasory
}

const userOne = new user1("vividh",2,true)
const userTwo = new user1("gaurav",12,false)
console.log(userTwo.constructor);
console.log(userOne);

