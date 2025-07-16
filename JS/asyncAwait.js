// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set TimenOut Block")
//     },3000);
// }

// let output = getData();


async function fetchData() {

    // get request - async
    let response = fetch('https://jsonplaceholder.typicode.com/posts');


    let data = await (await response).json();
    console.log(data);
}

fetchData();
