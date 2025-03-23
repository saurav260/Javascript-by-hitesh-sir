const email=[]
if(email){
    console.log("valid email")
}else{
    console.log("Invalid email")
}

//falsy value

   // false , 0 ,-0, BigInt 0n ,"", null, undefined, NaN

//truthy value 
  
   // true,"0",'false'," ", [], {}, function()

//    if(email.length===0){
//     console.log("array is empty")
//    }

const emptyObj={}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty")
}

//Nullish coalscing opearator(??): Null undefined

let val1;
// val1=5 ?? 10;
// val1=null ?? 10;
// val1=undefined ?? 10;

console.log(val1);

// terniary operator 
// condition ? true:false

const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("less than 80"):console.log("more than 80")


