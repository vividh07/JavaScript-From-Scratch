 // for in loop on array
// for in loop on array gives the index of the values

const arr = ["a","b","c","d"]

for (const i in arr) {
    console.log(i)
}


// for in loop on objects

const myobject ={
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for(const y in myobject){
    console.log(`${y} shortcut for ${myobject[y]}`)
}