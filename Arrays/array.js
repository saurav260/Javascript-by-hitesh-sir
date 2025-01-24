//Array-->selection of multiple objects, Resizable,Mix datatypes are allowed

const myArr =[ 0, 1, 2, 3, 4, 5]
const myHeroes =["shaktiman","Hanuman"];

const myArr2 = new Array(1,2,3,4)

console.log(myArr[2])
console.log(myArr2[2])
console.log(myHeroes[1])

//Arrays Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr= myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice , splice

console.log("A", myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr)




const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("c",myArr)

const marvel_heroes=['Thor','Iron-man','Captain-America','Spiderman']
const dc_heroes =['superman','flash','batman']
// console.log(marvel_heroes)
// console.log(marvel_heroes[1])

// const heroes= marvel_heroes.concat(dc_heroes)
// console.log(heroes);

// using Spread operator(...)

const new_heroes=[...marvel_heroes,...dc_heroes]
console.log(new_heroes);


console.log(Array.isArray("saurav"))
console.log(Array.from("7410566657saurav"));
console.log(Array.from({name:"saurav"}));//Interesting

let score=100
let score1=200
let score2=300
console.log(Array.of(score,score1,score2));//Interesting