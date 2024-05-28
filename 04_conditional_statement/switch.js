const month = 3

switch (month) {
    case 1:
        console.log("Jan")
        
        break;
    case 2:
        console.log("Feb")
        
        break;
    case 3:
        console.log("Mar")
        
        break;
    case 4:
        console.log("Apr")
        
        break;

    default:
        console.log("no value")
        break;
}

// ternary operator

const age = 19

const result = (age >= 18) ? "you are allowed to vote":"you are not allowed to vote";

console.log(result);