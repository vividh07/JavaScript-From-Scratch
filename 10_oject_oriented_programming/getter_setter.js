class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
    return this._password.toUpperCase()
    }
    set password(val){
        this._password = val
    }
}

const vividh = new User("vividh@gmail.com" , "abcd")
console.log(vividh.password);