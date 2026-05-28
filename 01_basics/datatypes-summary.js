// data types classified on the basis of how data is stored in the memory and fetch data from memory
// javascript is dynamically typed
// primitive 

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// stack(primitive(pass by value)) and heap(Non primitive(pass by reference))

let myYoutubename = "raunak@google.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    // heap
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne // stack

userTwo = userOne
userTwo.email = "raunak@google.com"

console.log(userOne.email);
console.log(userTwo.email);

