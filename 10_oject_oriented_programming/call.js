function setUsername(username){
    this.username = username
}

function createUser(username,email,pass){
    setUsername.call(this,username)
    
    this.email = email
    this.pass = pass
}

const vividh = new createUser("chai","chai.com","123")
console.log(vividh);