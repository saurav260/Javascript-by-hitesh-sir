//Objects Singleton

const { Long } = require("mongodb");

const tinderUser=new Object()//-->Singleton
// const tinderUser={}              //-->non singleton

tinderUser.id="123abc";
tinderUser.name="Hello";
tinderUser.isLogegedIn =false;

// console.log(tinderUser)

const regularUser={
    email:"mee@swag.com",
    fullname:{
        useFullname:{
            firstName:"saurav",
            lastName:"doke"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.useFullname);
// console.log(regularUser.fullname.useFullname.firstName);
// console.log(regularUser.fullname.useFullname.lastName);


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={ obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"om@asd"
    }
]
