const userEmail = [];
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false,0,-0, BigInt 0n,"",null,undefined,NaN

// truthy values

// "0"," ",[],{},function(){},true,1,-1,BigInt 1n

const emptyobj = {}
if(object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

// Nullish coalescing operator (??): null defined

let val1;

// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10; // 10

val1 = null ?? 10 ?? 20; // 10

console.log(val1);

// Ternary operator

const age = 19;
const canDrive = age >= 18 ? "can drive" : "cannot drive";
console.log(canDrive);
