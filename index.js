//Problemas 1-5

//Write a fn that takes an argument and return that argument
const identity = (arg) => arg
//Write two binary fn add and mul, that takes two numbers and return their
//sum and product
const add = (arg1, arg2) => arg1 + arg2
const mul = (arg1, arg2) => arg1 * arg2
//Write a fn that takes an argument and returns fn that returns that argument
const idf = (arg) => ()=> arg
//Write a fn that adds from two invocation
const addf = (arg1) => (arg2) => arg1 + arg2
//Write a fn that takes a binary fn and makes it callable with two invocation
const applyf = (binary) => (arg1) => (arg2) => binary(arg1, arg2)

//test
console.log(identity(3))
console.log(add(3,5))
console.log(mul(3,5))
console.log(idf(identity(3))())
console.log(addf(3)(5))
console.log(applyf(add)(3)(5))
