

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

function calculateCartPrice (...num1){
    return num1;

}
//console.log(calculateCartPrice(200,400,500,5000))

const user ={
    usernames:"saurav",
    prize:200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.usernames} and price is ${anyobject.prize}`);
}
handleObject(user)

//Passing Arrays
const myNewArray=[200,400,100,500]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));