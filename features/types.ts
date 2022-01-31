// Types: Easy way to refer to the different 
// properties + functions that a value has

const today = new Date();
console.log(today.getMonth());

let apples: number; // type annotation
apples = 5;
let speed: string = 'fast';
let isHungry: boolean = true;
// one-line declaration
let myNum: number = 5, myString: string = "slow", myHungriness: boolean;
let nothing1: null = null; //nullable variable
let nothing2: undefined = undefined;

// Array
var myArray = ["John", 2, true, {}];
let colors: string[] = ['blue', 'green', 'red'];
let numbers: number[] = [1, 2, 3];

// Class
class Car {}
let volvo: Car = new Car(); //instance of a Car

// Object literal
let points: { x: number, y: number } = {
  x: 10,
  y: 20
};

// Function annotations
// after = is the actual function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}
logNumber(8);

// When to use type annotations?
// 1) Function that return the 'any' type
interface Coords {
  x: number;
  y: number;
}

const json = ' { "x": 10, "y": 25 } ';
const coordinates = JSON.parse(json) as {x: number; y: number};
console.log(coordinates.y);

// 2) When we declare a variable on a line and initialize later
let words: string[] = ['book', 'paper', 'shelf'];
let foundWord: boolean; //if "paper" is in the array --> true

for(let i=0; i < words.length; i++) {
  if(words[i] === 'paper') {
    foundWord = true;
  }
}

// 3) 
let nums: number[] = [-10, -1, 55];
let numberAboveZero: boolean | number = false;

for(let i=0; i<nums.length; i++) {
  if(nums[i] > 0) {
    numberAboveZero = nums[i]; //number
    // console.log(numberAboveZero)
  }
}

// 4) 
let profile = {
  name: 'John', 
  age: 58,
  likesKolbasz: true,
  coords: {
    lat: 0,
    lng: 88
  },
  getAge(): number {
    return this.age
  },
  setAge(newAge: number): void {
    this.age = newAge;
  }
}

// Access properties
const myAge = profile.age; //58
profile.setAge(33);

// const age = profile.age
const { age } = profile;
console.log(age);

// Type annotations for function
let add = (a: number, b: number): number => {
  return a+b;
}

console.log( add(15, 42) );