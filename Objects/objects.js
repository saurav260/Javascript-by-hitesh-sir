//singleton -done by constructor
//object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"saurav",
    "fullname":"Saurav Doke",
    [mySym]:"mykey1", //use mySym as key Interview question
    age:20,
    location:"Pune",
    email:"saurav@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["fullname"])

console.log(JsUser[mySym])


JsUser.email="doke@gmail.com" //overright any value

// Object.freeze(JsUser)//Freeze any vale
// console.log(JsUser);
// JsUser.name="gotya"//it willl not change the name

JsUser.greeting= function() {
    console.log("hello JS user")
}
console.log(JsUser.greeting());
