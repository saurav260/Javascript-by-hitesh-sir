//Date

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString()); 
console.log(myDate.toLocaleString()); 
console.log(typeof myDate); 

let myCreatedDate =new Date(2023, 0, 23);
let myCreated1Date =new Date("01-14-2023");
console.log(myCreatedDate.toDateString());
console.log(myCreated1Date.toLocaleString());


//Time

let myTimeStamp= Date.now();
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());  //In milisecond

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);

// console.log(`the date is`)

newDate.toLocaleDateString(`default`,{
    weekday:"long",
    
})
