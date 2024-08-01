const User = {
    _email : "vividhcho@gmail.com",
    _password : "abcde",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}


const data = Object.create(User)
console.log(data.email);