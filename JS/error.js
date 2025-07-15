// console.log(1;     compile time error


// console.log(x);  runtime error



// try{
//     console.log("Try Block Starts Here");
//     console.log(x);
//     console.log("Try Block Ends Here")
// }
// catch(e){
//     //custom error
//     //fallback
//     console.log("I am inside the Catch Block");
//     console.log("Your error is here", e)
// }


try{
    //reference error
    console.log(x);
    
}
catch(e){
    throw new Error("First Declare and then Print")
}

let errorCode =100;
if(errorCode == 100){
    throw new Error("Invalid JSON")
}