// const value =  Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(value);

const data = {
    name : "abc",
    cost : 234,
    isAvailabe : true
}

console.log(Object.getOwnPropertyDescriptor(data,"name"));
Object.defineProperty(data , 'name' ,{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(data,"name"));

for (const [key,value] of Object.entries(data)){
        console.log(`${key}   and  ${value}`);
}