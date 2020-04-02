## Functions 

#### Function Declaration vs Expression 

Function Declaration 
```
function walk() {
  console.log('walk')
}
walk()
```


Anonimus Function Expression 
Doesnt have a name 
```
const run = function () {
  console.log('run')
}
run() // 'run'
```

Named Function Expression 
Does have a name
```
const stand = function stand() {
  console.log('stand')
}
stand() // 'stand'
```

We can also declare another varibales and set those to other functions

```
const move = run
//we call anonimos function 
move() // 'run' 
```
---

#### Hoisting 

Function declaration VS Function Expression 


Function declaration -> We can call a function before it's defined 
```
walk() // 'walk

function walk() {
  console.log('walk')
}
```

Function Expression -> We cannot call a function before it's defined only after its defined  
```
run() // Cannot access 'run' before initialization
const run = function () {
  console.log('run')
}
```

Why? 
> Becase when JS- engine reads the code it puts all function declaration on top! 
> This is what we call hoisting - it's the proccess of moving function declaratino on the top of the file and it is done automatically by the JS Engine, executing this code. 
---

#### Arguments 

JS is a dynamic language so we can re-assign variables 
```
let x = 1
x = 'a'
```

Argumets in function 
```
function some(a, b) {
  return a + b
}
console.log(some(1, 2)) // 3 
console.log(some(1)) // NaN cuz the second is indefined 
console.log(some(1, 3, 4)) //4 will sum only first two 
```

Argument kweyword
```
function sum(a, b) {
  console.log(arguments)
  return a + b
}
sum() // [Arguments] {} is an Object 
// the keys are the arguments that we pass  to this function 
```
What if we want to add more than two arginets and return its sum ?
```
function sumOfArg() {
  let total = 0
  for (let value of arguments)
    total += value
  return total
}

console.log(sumOfArg(1, 2, 3, 4)) // 10
```
--- 
#### The Rest Operator 
... args 
We can modify the declaration of a parameter with the rest operator 
> ! if we console log args it will return an array of elemets 

```
function sumOfArg(...args) {
  console.log(args)
}
console.log(sumOfArg(1, 2, 3, 4)) // [ 1, 2, 3, 4 ] 

```
Implementing rest operator to find sum of elements 

```
function sumOfArgWReduce(...args) {
  return args.reduce((a, b) => a + b)
}
console.log(sumOfArgWReduce(1, 2, 3, 4)) // 10 
```

What if we want to calculate a total prce in a shoplling cart with the dicsount factor 
```
function priceDiscout(dicsount, ...price) {
  const total = price.reduce((a, b) => a + b)
  return total * (1 - dicsount)
}

console.log(priceDiscout(0.5, 20, 30)) // 25 
```
 >(we have discount and the rest) hence the reason it's called rest operator 
---

#### Default parameters  
Interest rate calculator

```
function interest(principle, rate, years) {
  return principle * rate / 100 * years
}
console.log(interest(10000, 3.5, 5)) // 1750 
```
What if we want to have a defsult rate? 
```
function rateWithDefault(principle, rate, years) {
  rate = rate || 3.5
  years = years || 5
  // If we exclude the varibles rate and year they will be assigned form the default valuses identified in function body 

  return principle * rate / 100 * years
}
console.log(rateWithDefault(10000)) // 1750
```
But started with JS 6 we have a clenar way of defninig Default Values 
```

function rateWithDefaultJS6(principle, rate = 3.5, years = 5) {

  // If we exclude the varibles rate and year they will be assigned form the default valuses identified in function body 

  return principle * rate / 100 * years
}
console.log(rateWithDefaultJS6(10000)) // 1750
```

> BUT if you give a default values in arguments they MUST be at the end 
example with throwen ERROR: // Unexpected identifier // NaN
```

function rateWithDefaultJS6(principle, rate = 3.5, years) {
  return principle * rate / 100 * years
}
console.log(rateWithDefaultJS6(10000)) // Unexpected identifier // NaN
```
This will throw an ERROR NaN: 
```
function rateWithDefaultJS6(principle, rate = 3.5, years) {
  return principle * rate / 100 * years
}
console.log(rateWithDefaultJS6(10000, 5)) // NaN
```
This will be accurate // 1750 
>  Using Undefind instead of missing value 
```
function rateWithDefaultJS6(principle, rate = 3.5, years) {
  return principle * rate / 100 * years
}
console.log(rateWithDefaultJS6(10000, undefined, 5)) // 1750
```
---
#### Getters and Setters 

Method with Getters and Setters 
```
const person = {
  name: 'Ustin',
  lastName: 'Vaskin'
}

console.log(`${person.name} ${person.lastName}`) // Ustin Vaskin
// But this is read only and we cannot set full name from the outside
```
> Getters => access properties 
> Setters => change (mutate) them 

Define a methids in an object to get a full name and set 
```
const person = {
  name: 'Ustin',
  lastName: 'Vaskin',
  get fullName() {
    return `${person.name} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ')
    this.name = parts[0]
    this.lastName = parts[1]
  }
}

console.log(person) // { name: 'Ustin', lastName: 'Vaskin', fullName: [Getter/Setter] }
person.fullName = 'John Smith'
console.log(person) // { name: 'John', lastName: 'Smith', fullName: [Getter/Setter] }
console.log(person.fullName) // John Smith
```
---
#### Local VS Global Scope 
```
const message = 'hi'
console.log(message)
```
But if the message is in the code block we will not get the value 
```
{
  const message = 'hi'
}
console.log(message) // message is not defined
```
> ! Let Const will be accesible only in the block where they are defined 

> ! local varibles and constance take precient over global: Example 
```
const color = 'red'

function start() {
  const message = 'hi'
  console.log(color)
}
function stop() {
  const message = 'bye'
}
start() // red
```
```
const color = 'red'

function start() {
  const message = 'hi'
  const color = 'blue'
  console.log(color)
}
function stop() {
  const message = 'bye'
}
start() // blue !!!!  
```

> Avoid identifying global varibles and/ or constants because each function can accidentally change thir value

---

#### Let VS Var
Before es6 there was only var and now  
let and const 

var => function - scoped 
ES6 (ES2015): let, const => block-scoped 

```
function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = 'red'
    }
  }
  console.log(color)
}

start() // 'red' 
```
```
function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      let color = 'red'
    }
  }
  console.log(color)
}

start() // color is not defined
```
```
var color = 'red' // global variable (Window Object)
let age = 30 // it's NOT attached to a Window Object 
```
 > We should avoid adding stuff to the window object because sometime 3rd party APIs might have the same property and ours can overwrite it. 

 > Also functions are also added to the windiow object 
 ```
 function sayHi() {
  console.log('hi')
}

window.sayHi() // hi
```
> We can prevent it by having modules! 

---
#### The 'this' keyword 

This references to the object that is executing the current function 

- In objects function is a method and 'this' keyword refers -> to an object 
```
const video = {
  title: 'a',
  play() {
    console.log('play')
  }
}

video.play() // play 


video.stop = function () {
  console.log(this)
}

video.stop() // { title: 'a', play: [Function: play], stop: [Function] } !! 
// 'THIS 'Refers to the video object
```
- In function (not in an object) 'this' keyword refers -> to window object or global object in Node 
```
function playVideo() {
  console.log(this)
}

playVideo() // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
```

Constructor Function 
```
function Video(title) {
  this.title = title
  console.log(this)
}
```

We get a new object instead of the window object 
New operator creates new emply obj {} and sets 'this' in the 
constructor function to point to this empty object 
```
const vid1 = new Video('B') // Video { title: 'B' }
```
Another interesting example:
```
const video = {
  title: 'title',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag)
    })
  }
}

video.showTags()
// title a
// title b
// title c
```
---

#### Exercise 1 Sum of Arguments 
```
function sum(...args) {
  return args.reduce((a, b) => a + b)
}

console.log(sum(1, 4, 6, 7)) // 18
```

#### Exercise 2 Area of circle 
```
const circle = {
  radius: 2,
  get area() {
    return Math.PI + this.radius * this.radius
  }
}


console.log(circle.radius) // 2 
console.log(circle.area) // 7.141592653589793


circle.radius = 5
console.log(circle.radius) // 5  
console.log(circle.area) // 28.141592653589793
```
