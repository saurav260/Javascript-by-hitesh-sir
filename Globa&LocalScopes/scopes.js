const { Long } = require("mongodb");

let a =45
if (true){
    let a =10;
    const b =20;  //Block Scope
    var c= 30;
   // console.log("inner",a);
    
}


 //console.log(a);
// console.log(b);   //Global Scope
//console.log(c);

function one(){
    const username ="Saurav"
    function two(){
        const website ="Instagram"
      //  console.log(username);
        
    }
    // console.log(website);
    
    two()
}
one()

//Using if else

if (true){
    const username ="Saurav"
    if(username==="Saurav"){
        const website = " Youtube"
      //  console.log(username + website);
        
    }
    
}

//************************** Interesting**********************

function addone(num){
    return num +1 ;
}
console.log(addone(5));
