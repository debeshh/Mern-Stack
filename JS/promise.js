let firstPromise = new Promise((resolve,reject)=>{
    // console.log("hi")
    // reject(new Error("Mini Virus"))
    // resolve(1001)

    setTimeout(function sayMyName(){
    console.log("Debesh Behera")
    },10000)
    resolve(1);

})

// function sayMyName(){
//     console.log("Debesh Behera")
// }

// setTimeout(sayMyName,10000)



let promise1 = new Promise((resolve,reject)=>{
    let success = true;
    if(success == true){
        resolve("Promise Fulfilled")
    }
    else{
        reject("Promise Rejected")
    }
})

promise1.then((message)=>{
    console.log("the message is " + message);
    return 20;
}).then((message)=>{
    console.log("message: " + message)
}).catch((error)=>{
    console.log("Error " + error)
}).finally((mesage)=>{
    console.log("Main toh pakka Chalunga")
})