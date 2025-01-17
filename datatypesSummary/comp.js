//Primitive 
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score= 500;
const scoreValue=500.24;

const isLoggedIn= false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId)

const bigNumber=4569875321555n;



//Reference (Non premitive)
//array,vObjects, Functions

const heros=['shaktiman','naagraj','doga'];

let myObj={
    name:"saurav",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber,typeof myObj)

