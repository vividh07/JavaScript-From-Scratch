// for loop


for(var i =0; i <10;i++){
    const val = i;
    console.log("*")
}

// console.log(val);  // we cant access this because this it out of the scope

// if in for loop

for(var a= 0; a<10; a++){
    if(a==5){
        console.log("5 is a best number")
    }
    console.log(a);

}

// // loop inside a loop 

for(i=0;i<3;i++){
    console.log(`outer loop ${i}`);
    for(j=0;j<3;j++){
        console.log(`inner loop ${j} and inner loop ${i}`); // we can access outer loop value because we can access parent value in child scope but cant use child value in parent scope
    }
}