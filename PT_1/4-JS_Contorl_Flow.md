
### Control Flow

##### How to control code 
- if ... else 
- switch ... case 
- for ...
- while 
- do .. while 
- infine loops 
- for ... in 
- for ... of 

--- 
### If ... else
##### Conditional statemnt
- if ... else 
- switch ... case 

// hour
// if hour is b/w 6am and 12 pm: Good Morning 
// if hour id b/w 12pm and 6pm: Good Afternoon 
// Otherwise: Good Evening 

> Syntax: 

```
if (condition) {
    statement
} else if (another condition){
    statement 
} else {
    statemnt
}; 
```
Now lets do the hour exericise: 
``` 
let hour = 10; // default for now 
if (hour >=6 && hour <12) {
    console.log('Good Morning')
} else if (
(hour >= 12 && hour <18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}
```
---
### Switch ... case
##### Conditional statemnt -it compares variabe (switch) with variable (case): 
> Syntax: 
```
let role; 
switch(variable){
    case: ... ; 
        console.log('...')
       break;
    case ... ; 
        console.log('...')
       break;
    default: 
         console.log('...')
    } 
```

Example with role 
```
let role;
switch(role){
    case: 'guest' ; 
        console.log('Guest User')
       break;
    case 'Moderator' ; 
        console.log('Moderator User')
       break;
    default: 
         console.log('Unknown User')
    }  // Unknown User
```
---
### Loops
##### It used to reapeat action several times
###### List of loops: 
- for ...
- while 
- do .. while 
- infine loops 
- for ... in 
- for ... of 
---

### Loops: For ...
> Syntax: 
```
for (initial value; condition; increment expression){
    statements
}
```
> Syntax: 
```
for ([initialization]; [condition]; [final-expression])
   statement
```

Real Example (console log (numbers): 
```
for (i =0; i<5; i++){
    console.log(i)
} // 0 1 2 3 4 
```

Display odd numbers: 
```
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
} // 1 3 5 
```

### Loops: While ...

##### ! While VS For 
While: i is an internal variable 
for: i is an internal variable (part of a loop)
> Syntax: 

```
while (condition)
  statement
```

---
### Loops: Do ... While
> Syntax: 
```
do
   statement
while (condition);
```

``` 
let i = 0;
do {
  if (i % 2 !== 0) {
    console.log(i)
  }
  i++
} while (i > 5)
```

##### ! Differnce b/w Do and Do .. While
! Do .. while will be executed at leat once, even if the condition is false, because Do.. While checks condition at the end. 

--- 
### Loops: Infinite Loops 

```
let i =0; 
while (i>5){
    console.log(i)
} 
// this will do iterations forever because we don't have increment expression
```

! Danger: it can break your browser and your computer. 
--- 
### Loops: Do ... While
> Syntax: 
```
for (variable in object)
  statement
```

---
### Loops: For ... in
> Syntax: 
```
for (variable in object)
  statement
```

We use for ... in if we want to iterate over the properties of an objects (sometimes over the elements in an array-> But for... in for arrays is a bad practice)

```
const person = {
    name: "Ustin",
    age: 30
}
```
##### If we want to iterate over properties (name, age)
_ 
```
for (let key in person){
    console.log(key)
} // name/ age 
```
##### If we want to iterate over values ('Ustin', 30)
_ 
```
for (let key in person){
    console.log(person[key])
} // Ustin, 30 
```
###### We can also use it in an array (Bad practice) 
but still, lets have alook: 
```
const colors= ['red', 'blue', 'green']; 
for (let index in colors){
    console.log(colors[index]) // red, blue, green 
    console.log(index) // 0, 1, 2 
}
```
---
### Loops: For ... of
Starting from ECMA6 or ES6 we have a new way to itertate over arrays: 

> Syntax: 
Iterating over an Array 
```
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```
Another example: 
```
const colors= ['red', 'blue', 'green']; 
for (let color of colors) {
    console.log(color)
} // red, blue, green

---
### Exercises
//Max of Two Numbers 
``` 
function max(a, b) {
  if (a > b) return a
  else return b
}
console.log(max(2, 3)) // 3 
```
```
function maxOfTwo(a, b) {
  return (a > b) ? a : b
}

console.log(maxOfTwo(2, 5)) // 5
```
---
// retrun true if image is landscape, otherwise return false 
```
function isLanscape(width, height) {
  return (width > height) ? true : false
}

console.log(isLanscape(16, 9))// true 
```

Or we can amend the rigth part of a function (cuz first is true and the last id false ): 

```
function isLanscape(width, height) {
  return (width > height)
}

console.log(isLanscape(5, 9))// false 
```
---
FizzBuzz 
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz 
// Divisible by 3 or 5 => input

```
function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return NaN
  } else if (input % 3 === 0 && input % 5 === 0) {
    return 'FizzBuzz'
  } else if (input % 3 === 0) {
    return 'Fizz'
  } else if (input % 5 === 0) {
    return 'Buzz'
  } else {
    return input
  }
}
console.log(fizzBuzz(true))// NaN
console.log(fizzBuzz(9))// Fizz 
```


---
Demerit Points
// Car speed limiit is 70 
// If car drives 70 and less -> log out 'Ok 
// if a car drives every 5 km more driver get 1 point 
// Use Math.floor() function 
// 12 points => Suspended

```
```
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12)
      console.log('License Suspended');
    else
      console.log('Points', points)
  }
}
checkSpeed(140) // License Suspended 
checkSpeed(72) // Ok 
checkSpeed(83) // Points 2
```
---
Even and Odd Nums
// Display all numbers from input
// Next each numebr display Even or Odd based on their value 
```
function showNums(limit) {
  for (let i = 0; i <= limit; i++)
    if (i % 2 !== 0) {
      console.log(i + " " + "ODD")
    } else {
      console.log(i + " " + "EVEN")
    }
}

showNums(10) 

//1 ODD
// 2 EVEN
// 3 ODD
// 4 EVEN
// 5 ODD
// 6 EVEN
// 7 ODD
// 8 EVEN
// 9 ODD
// 10 EVEN
```

OR 

```


function showNums(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    console.log(i, message)
  }
}

showNums(10)

//1 ODD
// 2 EVEN
// 3 ODD
// 4 EVEN
// 5 ODD
// 6 EVEN
// 7 ODD
// 8 EVEN
// 9 ODD
// 10 EVEN
```

--- 

Count Truthy 
// Count truthy elements in an array
```
const array = [0, null, undefined, '', 2, 3, 4]

function countTruthy(array) {
  let count = 0
  for (let value of array)
    if (value) // returns true if truthy 
      count++
  return count
}
console.log(countTruthy(array)) // 3
```
---

String Properties 
// retrun all the properties of an object that are oftyoe "String"

```
const person = {
  name: 'Ustin',
  lastName: "Vaskin",
  age: 30
}
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "string")
      console.log(key, obj[key])
  }
}

showProperties(person) 
// name Ustin
// lastName Vaskin
```

--- 

Sum of Multiple of 3 and 5 
// example sum(10)
// Multiple of 3: 3, 6, 9 
// Multiple of 4: 5, 10

function sum(limit) {
  let sum = 0
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i
  return sum
}

console.log(sum(10)) // 33 