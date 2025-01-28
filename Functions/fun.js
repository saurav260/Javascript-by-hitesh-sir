

function sayMyname(){
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}
   sayMyname  ();
//Reference   //Execution
// of
//  function
                        //parameters
function addTwoNumbers(number1,number2){
    //console.log( number1 + number2);
    return number1 + number2;
    console.log("hello"); //not working after return
    
}
addTwoNumbers(6,7)
          //(arguments)


const result = addTwoNumbers(6,7);
// console.log("result is",result);
// console.log(typeof result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("pleaase Enter Username")
        return;
    }
    
}
console.log(loginUserMessage("saurav"));
console.log(loginUserMessage());