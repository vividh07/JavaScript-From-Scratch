// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())

console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate)

/// for the format in mm/dd//yy

let ndate = new Date("2023-02-4")
console.log(ndate)  /// mm//dd//yy



// to get ony day or month

let wDate = new Date()
console.log(wDate.getDay())

console.log(wDate.getMonth())

wDate.toLocaleString('default',{
    weekday : "long",
})

