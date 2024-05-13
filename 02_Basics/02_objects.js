//object inside a object

const user = {
    email :  "xya.com",
    fullName : {
        userName : "abc",
        lastName : "def"
    }
}

console.log(user.fullName.userName);

//how to merge two object

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4:"d"
}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}  // good option
console.log(obj3);

