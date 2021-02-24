//#region String (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(fruit.length); //6
console.log(fruit.indexOf('z'));
console.log(fruit.indexOf('nan')); //2 --> if found returns index else -1 
console.log(fruit.slice(1, 5)); //anan
console.log(fruit.replace('ban', 'Santa ')); //Santa ana
console.log(fruit.toUpperCase()); //BANANA
console.log(fruit.toLowerCase()); //banana
console.log(fruit.charAt(1)); //a
console.log(fruit[1]); //a
console.log(fruit.split(',')); //split by a comma 
console.log(fruit.split('')); //split by a character

let fruits = 'banana,orange,apple,mango,watermelon';
fruits.split(',').forEach(fr => {
    console.log(fr);
});

for (let i = 0; i < fr.length; i++) {
    console.log(fr[i]);
}

//#endregion

//#region Array

let fruits = ['banana', 'apple', 'oranges', 'pineappes'];
fruits = new Array('banana', 'apple', 'oranges', 'pineappes');

console.log(fruits[1]); //access value
fruits[0] = "pear";
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
}

//array (common methods)
console.log('to string', fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('blackberries'), fruits); //append
console.log(fruits[4]);
fruits[4] = 'new fruit';
console.log(fruits);
fruits.shift(); //removes the first element from a array
console.log(fruits);
fruits.unshift('kiwi'); //removes the first element from a array
console.log(fruits);

let vegetables = ['asparagus', 'carrott', 'cucumber', 'tomato'];

//combining arrays
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b})); //ascending
console.log(someNumbers.sort(function(a, b) {return b-a})); //descending

let newArray = new Array();
for (let i = 1; i <= 10; i++) {
    newArray.push(i);
}
console.log(newArray);

//#endregion

//#region Objects in JavaScript dictionaries in python

let student = { 
    first: 'John' , 
    last: 'Hammond', 
    age: 34, 
    height: 175,
    studentInfo() {
        return this.first + "\n" + this.last + "\n" + this.age;
    }
};

console.log(student.first);
console.log(student.last);
console.log(student.age);
console.log(student.height);
console.log(student.studentInfo());


student.first = 'Robert';   //change
student['last'] = 'Jackson';
student.age = 45;           //change
console.log(student.studentInfo());

student.age++;              //increment
console.log(student.first);
console.log(student.age);

// //These are equivalent
// console.log(student['first']);
// console.log(student['last']);
// console.log(student['age']);
// console.log(student['height']);

//#endregion