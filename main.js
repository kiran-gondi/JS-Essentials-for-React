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

//Array destructuring
const fruits = ['apple', 'banana'];

//Array destructuring
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
