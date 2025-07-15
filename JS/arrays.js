// let obj ={
//     name : "Debesh",
//     age : 20,
//     weight : 70,
//     height : "5ft 8in",
//     greet : function(){
//         console.log("Hello Everyone");
//     }

// };

// console.log(obj);
// console.log(typeof(obj));
// obj.greet();


// let obj2 = obj;

// console.log(obj2)


// let arr = [1,2,3,4,5];
// console.log(arr)


// let br = new Array("Hello",3,"heu",true);

// console.log(typeof(br))

// br.push("Hello");
// console.log(br)
// br.pop();
// console.log(br)

// br.shift()
// console.log(br)


// br.unshift("Debesh")
// console.log(br)


// br.push(10)
// br.push(20)
// br.push(30)
// console.log(br)

// console.log(br.slice(4,7));


// br.splice(1,5,'behera')
// console.log(br)

let arr = [10,20,30,11,22,33,44,55];

// let ans = arr.filter((num)=>{
//     if(num %2 ==0){
//         return true;
//     }
//     else return false;
// })
// console.log(arr)
// console.log(ans);


// arr.map((num)=>{
//     console.log(num);
// })

// let square = arr.map((num)=>{
//     return num*num;
// })

// console.log(square)


// let ans = arr.reduce((acc,cur)=>{
//     return acc+cur;
// },0)

// console.log(ans)

let ans = arr.sort((a,b)=>a-b);
console.log(ans)
let ans1 = arr.sort((a,b)=>b-a);
console.log(ans1)