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


//Problems 6-9

//(6) Write a fn that takes a fn and an argument, and returns a fn that can
//supply a second argument.
//const curry = (fn, arg1) => applyf(fn)(arg1)
const curry = (fn, ...arg1) => (...arg2) => fn(...arg1, ...arg2)

//(7) Without writing any new fn show three ways to create the inc fn.
const inc1 = curry(add, 1)
const inc2 = addf(1)
const inc3 = applyf(add)(1)

//(8) Write a methodize, a fn that converts a binary fn to a methodize
const methodize = (fn) => {
    return function(...arg) {
        return fn(this, ...arg)
    }
}
Number.prototype.add = methodize(add)

//(9) Write demethodize, a fn that convert a method to a binary fn
const demethodize = (fn) => (that, ...arg) => fn.apply(that, arg)

//test
console.log(curry(mul, 3)(5))
console.log(inc1(5))
console.log(inc2(5))
console.log(inc3(5))
console.log((3).add(8))
console.log(demethodize(Number.prototype.add)(3, 8))

//Problems 10-12

//(10) Write a fn twice that takes a binary fn and return an urany fn that
//passes its argument to the binary fn twice
const twice = (binary) => (arg) => binary(arg, arg);

//(11) Write a fn composeu that takes two unary fn and returns an unary fn
//that calls them both.
const composeu = (f, g) => (arg) => g(f(arg))

//(12) Write a fn composeb that takes two binary fn and return a fn that calls
//them both.

const composeb = (f, g) => (arg1, arg2, arg3) => g(f(arg1, arg2), arg3)

//test
const double = twice(add)
console.log(double(11)) //22
const square = twice(mul)
console.log(square(11)) //121
console.log(composeu(double, square)(3)) //36
console.log(composeb(add, mul)(2, 3, 5)) //25
