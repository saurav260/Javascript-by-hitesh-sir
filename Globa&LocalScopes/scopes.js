
let a =45
if (true){
    let a =10;
    const b =20;  //Block Scope
    var c= 30;+
    console.log("inner",a);
    
}


 console.log(a);
// console.log(b);   //Global Scope
console.log(c);