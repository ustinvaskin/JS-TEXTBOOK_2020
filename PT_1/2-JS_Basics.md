## Basics 

#### Variable 
##### Store data 
We use varibale to store data temporarily 
We give a memory location a name. 

```
let name
console.log(name) 
// undefined

name = 'Mosh'
console.log(name)
// Mosh
```
##### Rules for naming variales: 
- Cannot be a reserved keyword;
- Should be meaningfull;
- Cannot start with a number;
- Best practise is to use camelCase;
- The are case-sensitive.
---
### Constants
##### When let we can change variable: 
_
```
let interestRate = 0.3
interestRate = 1
console.log(interestRate)
// 1 
```

##### When const we cannot change variable: 
_
```
const interestRate = 0.3
interestRate = 1
console.log(interestRate)
// Assignment to constant variable.
```

###### Best Practice is to use const as much as possible (assuming if we dont need to re-assign anything)

---
### Primitive types
##### In JS we have 2 categories of types 
| Primitives/ Value types | Reference types |
|-------------------------|-----------------|
|  - String               |  - Object       |
| - Numbers               | - Array         |
| - Booleans              | - Function      |
| - undefined             |                 |
|  - null (type of object) |                 |
| - Symbol in ES6         |                 |

```
let name = 'Mosh' // String literal 
let age = 30 // Number literal 
let isApproved = true // Boolean literal 
let firstName // undefined 
let lastName // null
```

#### ! null -> we use null if we want to explicitly clear the value of a variable 
---
### Dynamic Typing
#### JS is dynamic 
##### Static VS Dynamic:
Static -> type of CANNOT BE CHANGED 
Dynamic ->  type of CAN BE CHANGED 

```
let name = 'Mosh'
console.log(typeof (name)) // String 
let age = 30
console.log(typeof (age)) // Number 
let isApproved = true
console.log(typeof (isApproved)) // Boolean 
let lastName = null
console.log(typeof (lastName)) // object !
let someName
console.log(typeof (someName)) // undefined 
```

> In JS type Number always Number, JS doesn't have Int and Float numbers like in other programming languages
! NULL IS AN OBJECT
---
### Objects
##### Refernce Type 
- Object 
- Array
- Function ! is an object in JS 

> Object is like a thing from real life when we are dealing with multiple related variables, we can put them inside of an object. 

```
let name = "Ustin"
let age = 30 

let person = {
  name: "Mosh",
  age: 30
}
```

##### name and age -> are key properties 
##### Mosh and 30 -> are values

```
let person {} -> 
```
##### {} -  is object literal 
_ 
##### How to work with obbjects? 
> There are 2 ways: Dot Notation and Bracet Notation. 

1. Dot Notation: 
```
person.name = "John" // new value of a property name 
console.log(person.name) // John to read a value name 
```
2. Bracket Notation: 
```
person["name"] // John 
// We need to add target property inside of [] in quotes
```
Usually we use Dot Notation, but we use racket Notation if we don't know the target property Example: 

```
let selected = prompt("Whats the property you are looking for?")
alert(person[selected])
// prompt name and we will receve alert of John 
```
---
### Arrays
##### Array is a list of items -> Data structure we use to represent a list of items. 
_
```
let selectedColors = ['red', 'green', 'blue']
console.log(selectedColors) 
// 0: "red"
// 1: "green"
// 2: "blue"
// length: 3 
```

As we can see items have indexes starts from 0 (zero)
```
console.log(selectedColors[0])// red
```
Since JS is a dynamic language we can change our array 
```
selectedColors[1] = "pink"
console.log(selectedColors) 
// 0: "red"
// 1: "pink"
// 2: "blue"
// length: 3
```
As well as lenght it's also dynamic 
```
selectedColors[3] = "grey"
console.log(selectedColors.length) // 4 
```

> We can aslo store dofferent types in an array = "String", "Numbers", "Booleans" etc. 

> Technically an array is an object because it has key-value pairs 

```
console.log(typeof (person))
// object
```
> Array also has methods, properties : filetr, join, map etc. 

### Functions
#####  Functions are objects in JS -> they are fundamental building blocks -> a set of instructions -> reusable code 
_
```
function greet (){
    console.log("Hello")
}; 
```
##### The code inside {} is a body of a function.
We can call a function 
```
greet() // "Hello"
```
> Functions han have inputs and inputs can be chnaged based on how the function behaves 
```
function greet (name){ // name here is a parameter
    console.log("Hello" + " "+ name)
}; 

// lets call the function passing argument (NOT parameter here)
greet('Ustin') // Hello Ustin
```

We can also re-use the same function but with the different input 
```
greet('John') // Hello John
```

Function can have multiple parameters: 
``` 
function greet (name, lastName){ // name here is a parameters
    console.log("Hello" + " "+ name + " " + lastName ) 
}; 
// lets call the function passing arguments (NOT parameters here)
greet('Ustin', 'Vaskin') // Hello Ustin Vaskin
```
---

### Typeof Functions
1. Performing tasks  
```
function greet(){
...
}; 
```
2. Calculating a value
```
function square(num){
return num* num
}; 
```

> ! Function is a set of instructions/ statments that either perform a task or calculates and returns a value
---