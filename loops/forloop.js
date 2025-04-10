// for

for(let i =1;i<=11;i++){
    const element =i;
    if(i==5)  { 
        //console.log("5 is best");
    }
   // console.log(element);
}
//    console.log(element);  not access here
//Table from 1 to 10
for( let m =1;m<=10;m++){
    //console.log(`Outer Loop value ${m}`)
    for(let i =1;i<=10;i++){
        //console.log(`Inner Loop value ${i} and inner loop ${m}`);
        //console.log(m + '*'+ i + "=" + m*i);
        
    }
}
let myArray =["om","Shanti","Om"]
for (let index = 1; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}

//Break and Continue
for (let index = 1; index <=20; index++) {
    if(index ==5){
        console.log(`5 is detected`);
        continue;
        
    }
    console.log(`Value of index is : ${index}`);
    
    
}
for (let index = 1; index <=20; index++) {
    if(index ==5){
        console.log(`5 is detected`);
        break;
        
    }
    console.log(`Value of index is : ${index}`);
    
    
}