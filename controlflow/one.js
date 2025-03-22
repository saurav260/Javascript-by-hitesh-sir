
//if
if(true){
    //Executes
}
if(false){
    // not Executes
}

const isAgeeligible=true;
if(2==2){
    console.log("Eligible");
    
}
// < ,>,>=,<=,==,===
// const balance =100;

//Implicit scope no do like this
// if(balance >500) console.log("balance is more");

// if(balance<500){
//     console.log("very less balance");
// }
// else if(balance<800){
//     console.log("less balance");
    
// }
// else if(balance>800){
//     console.log("more balance");
    
// }


const userLoggedIn =true;
const debitCard = true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn & debitCard){
    console.log("allow to buy course");
    
}
if(loggedInFromEmail || loggedInFromGoogle || true){
  console.log("user logged in")
}