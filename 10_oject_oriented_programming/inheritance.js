class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const data = new Teacher("abcd","email.com","123")
data.addCourse()

const data2 = new user("abftxz")
data2.logMe()