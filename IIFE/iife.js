//to remove pollution from global scope we use IIFE
(function cat(){
    console.log(`Cat meow's`);
    
})();  //to end we need to write ; 

//Syntax
// ()()

//using arrow function

( ()=> {
    console.log(`Cat meow's`)
})();

( (name)=> {
    console.log(`Cat meow's ${name}`)
})("Pucci");