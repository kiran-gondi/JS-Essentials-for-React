import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

/*
Uses of spread operator:
1. Copying an Array
2. Merging Arrays
3. Passing multiple arguments to a function
*/
//Spread Operator Examples
// const array = [1, 2, 3];
// console.log(...array);

//Rest Operator Example
/*display(1, 2, 3, 4, 5);

function display(first, second, ...restArguments){
  console.log(first);
  console.log(second);
  console.log(restArguments);
}*/

/*//Array destructuring
const fruits = ['apple', 'banana'];

//Array destructuring
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);*/

/*Types of Functions in JS
1. Named Function
2. Anonymous Function
3. Function Expression
4. Arrow Function
5. IIFE
6. Callback Function
7. High-Order Function
*/

/*Named Function
function sum(a, b){
  return a + b;
};
console.log(sum(2, 3));*/

/*Anonymous Function 
console.log(function(a,b){
  return a * b;
}(3, 4));*/

/*Anonymous Function Expression
const add = function(a, b){
  return a + b;
};
console.log(add(1, 2));*/

/*Named Function Expression
const add1 = function sum(a, b){
  return a + b;
};
console.log(add1(1,4));*/

/*Arrow Function
const add = (x,y) => x+y;
console.log(add(1,2));*/

/*Callback Functions

function add(x, y){
  return x + y;
}

function multiply(x, y){
  return x * y;
}

function display(x, y, operation)
{
  var result = operation(x,y);
  console.log(result);
}
display(1, 5, add);
display(3, 5, multiply);*/


/*Higher-order function
1. Take one or more functions as arguments(callback function) OR
2. Return a function as a result

function createAdder(number){
  
  return function(value){
    return value + number;
  }

}

const addFive = createAdder(5);
console.log(addFive(2));*/


/*Pure and Impure functions*/
//Pure Function
/*function add(a, b){
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));*/

//Impure Function
/*let total = 0;

function addTotal(value){
  total += value;
  return total;
}

console.log(addTotal(5));
console.log(addTotal(5));*/


/*Template Literal & string interpolation
var myName = "rahul";
var str3 = `Hello ${myName}`;
console.log(str3);*/

/*Object Example
let person = {
  name: "Rohit",
  hobbies: ["teach", "football", "code"],
  greet: function(){
    console.log(`Name is ${this.name}`);
  }
};

console.log(person.name);
console.log(person.hobbies);
console.log(person.greet());*/


/*Add or modify or delete properties of object
var person = {};
person.name = "rohit";
console.log(person.name);
person.name = "rachita";
console.log(person.name);
delete person.name;
console.log(person.name);*/

/*Asynchronous Programming
Uses of Asynchronous Programming
1. Fetching Data form API
2. Downloading Files
3. Uploading Files
4. Animations & Transitions
5. Time taking operations
BUT JS is a single threaded.
*/

//Synchronous Programming
/*function Function1(){
  //Loading data from API
  //Uploading files
  //Animations
}

function Function2(){
  console.log(100 + 250);
}

console.log("Start");
Function1();
Function2();
console.log("End");*/


/*Promises -> Fulfilled OR Rejected
Promises in JS are a way to handle asynchrounos opertions.
A promise can be in one of three states: pedning, resolved or reject.
A promise represents a value that may not be available yet but will be available as some point in the future.*/
/*const promise = new Promise((resolve, reject)=>{
  //perfrom asynch operation for eg: setTimeout();
  //Call `resolve` function when the operation succeeds
  //Call `reject' function when the operation encounters an error
});*/

/*const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=> {

    const randomNumber = Math.floor(Math.random() * 10);

    //Resolve the promise
    if(randomNumber < 5){
      resolve(`Success! Random number: ${randomNumber}`);
    }
    //Reject the promise
    else{
      reject(`Error! Random number: ${randomNumber}`);
    }
  },1000);
});

myPromise.then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.error(error);
});*/


/*Aysnc & Await*/
/*function fetchData(){
  return new Promise((resolve, reject)=>{

    //asynchronous operation
    setTimeout(()=>{
      resolve("Data has been fetched");
    }, 1000);
  });
}

//Promises
console.log("output from promises");
fetchData()
.then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
});

//async-await
console.log("output from async-await");
async function doSomethingASync(){
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
doSomethingASync();*/


/*Classes in JS*/
/*class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    console.log(`${this.name} - ${this.age}`);
  }
}

var person1 = new Person("Alice", 22);
console.log(person1.name);
person1.sayHello();
var person2 = new Person("Bobi", 23);
console.log(person2.name);
person2.sayHello();*/