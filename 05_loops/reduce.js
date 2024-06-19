const nums = [1,2,3,4]

const total = nums.reduce( function(initialValue,currentValue){

    return initialValue+currentValue

},0 )

console.log(total);


// with arrow function

const myNums = [1,2,3,4,5,6]

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);