/*
JS - JIT Compilation - Just in time 

// Environment setup

- TypeScript compiler is necessary to our Web Browser
- it compiles the source code to JavaScript
npm install ts-node

*/


// Example of Type Usage
// var firstName: string = 'Anna';
// console.log(firstName);

// We need to compile to plain JS -> terminal, use TS compiler
// tsc index.ts
// run with "node index.js"
// OR instead of two commands, we can use simply ts-node index.ts

/*
/// Startup Application: Make a network request to fetch some JSON and print the result
/// Introduce 1-2 bugs what TypeScript can catch (and JS cannot)

STEPS:
- API: https://jsonplaceholder.typicode.com/
- new directory
- package.json
- install axios as npm module (used to make network request)

- npm init -y
- npm install axios

*/

import axios from 'axios';

// used to define the structure of an object
interface Data {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Promise in return: waits until data fetch completes
axios.get(url).then( response => {
  console.log(response.data);
  const data = response.data as Data;

  const ID = data.id;
  const title = data.title;
  const completed = data.completed;

  logTodo(ID, title, completed);
});

// How can I run this application?
// tsc --init

// arrow function
let logTodo = (ID: number, title: string, completed: boolean) => {
  console.log(`
  The data with ID: ${ID}
  Has a title of: ${title}
  Is it completed? ${completed}
`);
}
