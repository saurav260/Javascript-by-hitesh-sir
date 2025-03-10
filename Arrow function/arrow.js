const user ={
   username :"Saurav",
   price :999,
   welcomeMessage : function(){
//    console.log(`${this.username}, Welcome to website`);
//    console.log(this);


   }
}
// user.welcomeMessage()
// user.username="Om"
// user.welcomeMessage()

// function chai(){
//     console.log(this)
// }
// chai()

// const chai = function(){
//     let username ="Saurav"
//     console.log(this.username);
    
// }

const chai = () => {
    let username ="Saurav"
    console.log(this);
    
}
// chai()


//*********Arrow function **** */
// const addTwo =(n1,n2) =>{
//     return n1+n2
// }

//impilicit return
// const addTwo =(n1,n2) =>n1+n2
// console.log(addTwo(2,3));

// const addTwo =(n1,n2) =>(n1+n2)
// console.log(addTwo(2,3));

// object
const addTwo =(n1,n2) =>({username :"Saurav"})
console.log(addTwo(2,3));