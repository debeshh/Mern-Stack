const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const PI = 3.14;

// module.exports = 123;
// we can also do
// module.exports.sum = (a,b) => a+b;
//or
//exports.sum = (a,b) => a+b;
//but cant do exports = 5 it will give error

let obj = {
    sum : sum,
    mul : mul,
    g : g,
    PI : PI,
};

module.exports = obj;