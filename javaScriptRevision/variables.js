//variable ko kaise banate hai

let name = "kritika";
let age = 20;
age = 30;
console.log(name, age);

const account = 1234;

console.log(account);

var v = 10;

//Datatypes

//1.primitive

//number
let a = 10;
let b = 2.36;
console.log(a, b);

// string
let c = "Kritika";
let d = "Kumari";
console.log(c, d);

//Boolean
let login = true;
let f = false;
console.log(login, f);

//undefined
let user;
console.log(user);

//bigint
let num = 4266548125631623;
console.log(num);

//null
let weather = null;
console.log(weather);

//symbol

const id1 = Symbol("id");
console.log(id1);

// Non primitive datatypes

//array
let arr = [10, 20, 30, "rohit", true];
console.log(arr);

//object
let user1 = {
    name:"Rohit",
    account: 123456,
    age:18,
    category:"gen"
}

//function
// in js  function can be stored inside the variables

 let s = function add(){
    console.log("hello"); 
}
// console.log(s());
s();
// console.log(typeof s);

