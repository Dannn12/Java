'use strict'

console.log("Hello world!");

console.log("Daniel");

console.log("Murden");

console.log("Sudbury");

console.log("Aquaries");

const text = "this is a message";

console.log(text);

console.info(text);

console.dir(text);

console.warn(text);

console.error(text);

console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

console.log("%c" + text + "%c" + text, "color:red;", "color:yellow;");

let mycar = "Audi";

let mymodel = "A5";

console.log("My fav car is: " + mycar + " and the model is: " + mymodel);

console.log("My name is %c dan ", "color:orange;font-family:fantasy; font-style:bold; background-color:black;padding:10px;");

let myName = " Daniel Murden";
let myNumber = 20;
let myBigInt = 1234567891234567891234567890n;
let myBool = false; Boolean;
let myAge = null;
let dob;
let myObject = {firstname:"Felix", lastname: "Cited"};

console.log(myName + myNumber + myBigInt);

let answer1 = "It's alright";
let answer2 = " He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';


let cars = ["BMW","Mercedes","Audi"];


let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"Javascript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));


let totalmoney = 4000;
let moneypaidsofar = 2348;




for (let i =0; i < 10; i++) {
}





let strictA= true;
let strictB= 1;
console.log(strictA == strictB);
console.log(strictA === strictB);


let age = 67
if (age>=18 && age<=65) {
    console.log("Age is in range");
} else if (age < 18) {
    console.log("underage");
}
else {
    console.log("catch all else")
}

let age1 = 100;
let result = age1 >= 50 ? "50 or over" : "under 50";
console.log(result);
