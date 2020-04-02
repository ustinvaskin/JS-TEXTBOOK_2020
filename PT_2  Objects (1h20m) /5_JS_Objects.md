## Objects 

#### Basics 
highly related variables, data, function. 

OOP (Object oriented programming)

```
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function () {
    console.log('Draw')
  }
}
circle.draw() // Draw 
```
Function inside of an object //  Method 
{} // Object Literal 
circle.draw()  // Dot Notation 
---
#### Factory Functions 
> Just like factories produce products, these factory functions produce objects 
So we can create an object like that: 
```
function createCircle(id, radius) {
  return {
    id: id,
    radius: radius,
    draw() {
      console.log(`Hello Circle ${id}`)
    }
  }
}
const circle1 = createCircle(1, 3)
circle1.draw() //Hello Circle 1 
console.log(circle1.radius) // 3
```

or if the key value pairs are the same we can shorten it: 
```
function createCircle(id, radius) {
  return {
    id,
    radius,
    draw() {
      console.log(`Hello Circle ${id}`)
    }
  }
}

const circle1 = createCircle(1, 3)
circle1.draw() //Hello Circle 1 
console.log(circle1.radius) // 3
```
#####  We have defined our logic in one place and now we can call this function createCircle() with different values, argumenst and create different objects. 
---
### Consctuction Functions 
The job of this fucntion is to consctruct or create an object 

> Note on Notattions: 
> Camel Notation (For Factory Functions ) -> oneTwoThreeFour
> Pascal Notation (For Constructor Functions ) -> OneTwoThreeFour

```
function Circle(id, radius) {
  this.id = id;
  this.radius = radius;
  this.draw = function () {
    console.log(`Hello Circle ${this.id}`)
  }
}

const cirle = new Circle(1, 5);
console.log(cirle) // Circle { id: 1, radius: 5, draw: [Function] }
```
When we say new three things happed: 
1. It created new empty object 
2. It points "this" keyword with values/ properties of a consctuctior object to the new object it just created
3. It will return new object 

---
### Factory Functions  VS Consctuction Functions  
##### Factory Functions: 
```
const circle1 = createCircle(1, 3)
``` 
We just return a new object from a function 
We use CamelCase naming convention 
##### Consctuction Functions 
```
const circle1 = new Circle(1, 3) // USE NEW OPERATOR
``` 
We use 'this' keyword insted of returning new object 
We use Pascal naming convention 
---

### Dynamic Nature of Objects  
Objects in JavaScript are Dynamic 
Once you create them you can always add new properies or method or remove the existing ones 

```
const circle = {
  radius: 1
}

circle.color = 'yellow'
console.log(circle) // { radius: 1, color: 'yellow' }
circle.draw = function () {
  console.log(`Hello circle ${this.color}`)
}

console.log(circle) //{ radius: 1, color: 'yellow', draw: [Function] }
circle.draw() // Hello circle yellow
```

We can also deleate exiscting properties and methods: 
deleate object.property 
delete object.method
```
const circle = {
  radius: 1
}
circle.color = 'yellow'
circle.draw = function () {
  console.log(`Hello Circle ${this.color}`) // Hello Circle yellow
}

delete circle.color
console.log(circle) // { radius: 1, draw: [Function] }
circle.draw() // Hello Circle undefined
```

> Note on using const 
When we use const it means that we cannot re-assing name varible of an object, hovewer, we can change the object by adding or removing properties/ methods

```
const circle = {
  radius: 1
}
circle = {} // Assignment to constant variable. 
// We can't reassing this obect 
console.log(circle) 
```
---

### Consctructor Property 

> Every object has a constructor property it refrerences to the FUNCTIO that was used to CREATE that object 
```
let x = {} 
// What does JS do under the hook? 
// x = new Object()
```

The same with some other types: 
// new String()
// new Number()
// new Boolena()
---
### Functions are Objects
> Functions are objects (Confusing?)

Let's have a look: 
```
Circle.name
// "Circle" // name of a function 
Circle.length
// 2 // number of arguments 
Circle.constructor
// function Function() // uses constructor function to create an object
```
```
Circle.call({}, 1, 12) === const circle1 = new Circle(1, 12)
```
---
### Value vs Reference Types 
> How primitives(Value types) and Objects (Referece types) behave differently? 
##### Primitive Type 
```
let x = 10;
let y = x;
x = 20;

// They are independant!!!

console.log(x) // 20 
console.log(y) // 10 when we copy 

```
##### VS Object 
```
let x = { value: 10 };
x.value = 20;
let y = x;

console.log(x) // value 20 
console.log(y) // value 20 
```
> ! When we use an object the object is not stored in this varible (x), the object is stored somewhere else in the memory and the address of this memory location is stored inside that varible. When we cope x into y (y = x) it's the address/ refernce that is copied, in other words both x and y are pointing to the same object in the memory, so when we modify x it chanegs are immediatly visible to amother varibake (x). 

> PRIMITIVES/ VALUE types are copied by their VALUE 
> OBJECTS/ REFERENCE types are copied by their REFERENCE 

```
let number = 10
function increse(number) { // passing 10 by value 
  number++ // will not produce anything out of the scope it is an independed variable 
}
increse(number) 
console.log(number) // 10 because it looks at let number 10 
``` 
Example with Reference type 
```
let obj = { value: 10 }
function increse(obj) {
  obj.value++
}
increse(obj) // passed by its refererence 
console.log(obj) //{ value: 11 }
```
---
### Enumerating Properties of an Object 
Going objects: 
```
const circle = {
  id: 1,
  radius: 3,
  draw() {
    console.log(`Hello Circle ${this.id}`)
  }
}

circle.draw() // Hello Circle 1
```
##### To get properties (KEYS)
```
for (let key in circle) {
  console.log(key)
}
// id
// radius
//draw
```
##### To get properties & Values (key in )
```
for (let key in circle) {
  console.log(key, circle[key])
}
// id 1
// radius 3
// draw [Function: draw]
```
> ! Objects are not iterable so we cannot iterate it using for ... of loop (like we could in Arrays)

But we can use Object.keys(objName)  // OBJECT.KEYS! 
```
for (let key of Object.keys(circle)) {
  console.log(key)
}
// id 1
// radius 3
// draw 
```
---

## Clonign Object (Object.assign)

```
const circle = {
  id: 1,
  radius: 1,
  draw() {
    console.log('draw')
  }; 
}
``` 
#### Now how can we clone the objest? 
> We will use ket key in obj

```
const another = {}

for (let key in circle){
  another[key] = circle[key];
}
console.log(another) // { id: 1, radius: 1, draw: [Function: draw] }
```
### Object. assign method is a newer version 

```
const circle = {
  id: 1,
  radius: 1,
  draw() {
    console.log('draw')
  }; 
}

```

Object.assign(tagetObj, sourceObject/objects ) 
 
```
const another = Object.assign({}, circle)

console.log(another) // { id: 1, radius: 1, draw: [Function: draw] }
```
Also we can add new properties to a new object while we are cloning: 

```
const another = Object.assign({ color: 'yello' }, circle)
console.log(another) // { color: 'yello', id: 1, radius: 1, draw: [Function: draw] }
```
### Spread Operator -> Another shorter way 

```

const another = { ...circle }
console.log(another) // { id: 1, radius: 1, draw: [Function: draw] }
```
> Object.assign costo a clone object, so we can use it to clone an object or combine multiple objects into one object 
> The spread operator is used to spread an object which means getting all the objects properties and methods and pitting them into aother object. 
---

## Template Literals 
It is better to use template literals when working with strigns 
```
const message = `Hello I'm 
Your new friend`;
console.log(message)


//Hello I'm 
//Your new friend
``` 
It will even break the line 
Also we can pass variables: ${variable/constatnt} placeholder

```
let name = 'John'
let greetingMessage = `Hello ${name}`
console.log(greetingMessage) // Hello John
```
We can aslo ass a simple mathematical equation inside placehilders: 
```
const helloSum = `Hello ${2 + 4}`
console.log(helloSum) // Hello 6
```
---
## Date 
> Build-in object - date object 
Different ways to create a new date 
```
const now = new Date() // date constructor // 2020-03-14T17:40:21.251Z
const date1 = new Date('May 11 2018 09:20') // date construvtor
console.log(date1) // 2018-05-11T04:20:00.000Z
const date2 = new Date(2018, 4, 11, 9, 0) // NOTE second argument month starts from 0 not from 1 so 4 is for May
console.log(date2) // 2018-05-11T04:00:00.000Z
```

> They have get and set methods 
now.get... (Year ets)
now.set... (Date, Hours, ets)
### How can we display the date? 

now.toDateString() // Thu May 11 2017
now.tiTimeString() // 11:35:01 GNT-0700 (PDT)
now.toISOString() // 2020-03-16T09:29:55.142Z

---
## Exersises: 

### Exersise 1 Create address object and then show it 

Create address object and then show it 
Using for... in and then displaying key and object[key]
```
const address = {
  street: 'Mayakovskaya',
  streetNumber: 42,
  zipcode: 234765,
  showAddress(address) {
    for (let key in address) {
      console.log(key, address[key])
    }
  }
}

address.showAddress(address)
//street Mayakovskaya
//streetNumber 42
//zipcode 234765
//showAddress[Function: showAddress]
```
---
### Exersise 2 Factory and Construction function 

inititialise address object using Factory and Construction function 

Factory Function: 
```

// Creatin a factory 
function createAddress(street, streetNumber, zipcode) {
  return {
    street,
    streetNumber,
    zipcode,
    showAddress() {
      for (let key in createAddress) {
        console.log(key, createAddress[key])
      }
    }
  }
}
const address2 = createAddress('Internationalnaya', 3, 112457)
// {
//   street: 'Internationalnaya',
//   streetNumber: 3,
//   zipcode: 112457,
//   showAddress: [Function: showAddress]
// }

```
Creating with Constructor 
```
function Address(street, streetNumber, zipcode) {
  this.street = street;
  this.streetNumber = streetNumber;
  this.zipcode = zipcode;
}

console.log(new Address('a', 2, 4))
//Address { street: 'a', streetNumber: 2, zipcode: 4 }

```
---
### Exersise 3 Object equality 

```
let address1 = new Address('a', 2, 3)
let address2 = new Address('a', 2, 3)

function Address(street, streetNumber, zipcode) {
  this.street = street;
  this.streetNumber = streetNumber;
  this.zipcode = zipcode;
}

````
We need to create 2 functions: 
1) areEqual 
2) areSame (pointing to the same object)

Function for the same 

```
function areSame(address1, address3) {
  return address1 === address3;
}
console.log(areSame()) // true 
```
---

### Exersise 3 Blog post Object 
// Tiltle 
// Body
// Author
// Views
//Comments
//  (author, body)
// isLive 

```
let post = {
  title: 'Blog 1',
  body: 'Content',
  author: 'UVM',
  views: 10,
  comments: [
    { author: 'a', body: 'b' },
    { author: 'c', body: 'd' },
  ],
  isLive: true
}

console.log(post)
```
---

### Exersise 4 Constructor Function 


```

let post1 = new Post('a', 'b', 'c')

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = []
  this.isLive = false;
}

console.log(post1)

```
```
// Post {
//   title: 'a',
//   body: 'b',
//   author: 'c',
//   views: 0,
//   comments: [],
//   isLive: false
// }
```
---
### Exersise 5 Price Range Object

```
let priceRange = [
  {
    lable: '$',
    toolTip: 'Inexpensive',
    minPerPerson: 0,
    maxPerPerson: 10
  },
  {
    lable: '$$',
    toolTip: 'Moderate',
    minPerPerson: 11,
    maxPerPerson: 20
  },
  {
    lable: '$$$',
    toolTip: 'Expensive',
    minPerPerson: 21,
    maxPerPerson: 50
  }
]

console.log(priceRange[0].lable) // $ 
```
