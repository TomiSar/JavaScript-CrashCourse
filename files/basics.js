console.log("Hello from home");
alert("Hello this is alert from home.js");

//#region variables
// var b = 'smoothie';
// console.log(b);
// var someNumber = 45;
// console.log(someNumber);

// Manipulate DOM i.e. Change HTML with JavaScript
//document.getElementById('someText').innerHTML = 'Hello from (h2) Tag';
var age = prompt("What is your age?")
document.getElementById("ageOutput").innerHTML = `Fantastic you are ${age} years old`;
//#endregion

//#region Numbers in Javascript
// var num1 = 10;

// //+1
// num1++;
// console.log(num1);

// //-1
// num1--;
// console.log(num1);

// //remainder
// num1 %= 4
// console.log(num1);

// //num1+value;
// num1 += 8;
// console.log(num1);
//#endregion

//#region Functions
// function fun() {
//     alert("Hello from function");
// }

// //call function
// fun()

// setTimeout(function fun() {
//     alert("this is a funtion");
// }, 3000);

// function greeting(name) {
//     var result = 'Hello ' + name + '!'; //String concatenation
//     console.log(result);
//     //console.log(`Hello ${name}!`);
// }

// var name = prompt("What is your name?")
// greeting(name)

//sum function with null check
// function sumNumbers(number1, number2) {
//     if ((number1 == undefined && number2 == undefined) || (number1 == null && number2 == null)) return
//     return number1 + number2;
// }

// console.log(sumNumbers(null, null))
// console.log(9.7 + null);

// function sumNumbers(number1, number2) {
//     var result = number1 + number2;
//     return result;
// }

// console.log(sumNumbers(10, 2))
// console.log(sumNumbers('Hello ', 'World!'));

//#endregion

//#region Loops

// var num = 0;
// while (num < 100) {
//     console.log(num);
//     num++;
// }

// for (let num = 0; num < 100; num++) {
//     console.log(num);
// }
// console.log(num);

//#endregion

//#region Data types

// let yourAge = 19; //number
// let yourName = 'Bob'; //string
// let name = { first: 'Nancy', last: 'Sinatra' }; //Object
// //console.log(name.first + ' ' +  name.last);
// let statement = false; //boolean
// let groceries = ['banana', 'bread', 'milk']; //array
// let random; //undefined
// let nothing = null; //null

//#endregion