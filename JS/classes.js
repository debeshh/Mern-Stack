// class Human {
//     //properties
//     age = 30 ; //public
//     #wt = 70 ; //. #  private
//     height = 168 ;

//     //behaviour

//     walking(){
//         console.log("I am Walking", this.#wt);
//     }

//     running(){
//         console.log("I am Running");
//     }
// }

// let obj = new Human();
// console.log(obj.age)

// obj.walking();
// console.log(obj.wt)


// function sayName(myName = "Tyrion Leninster"){
//     console.log("My name is :" ,myName);
// }

// sayName()

let src={
    age : 10,
    wt : 20,
    height : 168,
}

let des = Object.assign({},src);
console.log(des)

// let des = {...src}

// console.log(des)