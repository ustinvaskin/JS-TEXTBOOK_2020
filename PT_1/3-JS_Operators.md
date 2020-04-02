
### Operators
#####  Operators -> Expressions -> Algorithms -> Variables 

###### Operators in JS: 
- Algorithmic;
- Assignment;
- Comparison;
- Logial;
- Bitwise. 
--- 
### Algorithmic Operators
#####  Use for performing calculations 
_
```
let x = 10 
let y = 3 
```
x and y are operands 
```
console.log(x+y) // 13 
```
+ is an operator

##### Here are all operators: 
- (x+ y) expression (something that produces a value);
- (x-y) substraction;
- (x*y) multiplication;
 - (x/y) division;
 - (x%y) modulus remainder;
 - (x **y) x in power of y. 
 
 Also we have 2 additional operators 
 1. Increment ++ 
 2. Decrement -- 
 
 ```
console.log(x) // 10
console.log(++x) // 11 and x is now 11 
console.log(x++) // 10 but x is now 11 if we console it log again // will be 11
console.log(x--) // 9 and x is now 9
console.log(--x) // 10 but x is now 9 if we console it log again // will be 9
```
---
### Assigmnent Operators
##### = 
- Assignment Operator: 
```
let x = 10 
``` 
- Addition Assignment Operator: 
```
x = x+5 // 15
x+=5 // 15
```
> The same idea x operator= // ? will work with other operators 
--- 
### Comparison Operators
##### Use it to compare a variable with something else. 

```
let x = 1 
console.log (x >10) // true 
```
> ! result of an expression with an expression operator is a Boolean 

```
console.log(x>=1) // true
console.log(x<1)// false
console.log(x<= 1) // true 
```

#### Relational operators: 
< , < ,> =, <= 

##### We alo have equality operators: 
=== (equals value and type) Strict equality 
== (equals value only) Loose equality
!== (not equals value)
! === (not equals value and type)
---
### Ternanry operator
// If a custumer has 100 and more points 
// get a 'gold' customer, otherwise, 
// they are a 'silver' customer. 

```
let points = 100; 
let type = points >= 100? true : false; 
let type = points > 100? 'gold' : 'silver'; 
console.log(type) // gold 
```
---
### Logical operators
##### AND OR NOT 
- AND (&&)
- OR (||)
- NOT (!)

##### AND
_
```
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
```

##### OR
_
```
console.log(true || false) // true
console.log(false || false) // false
```
##### NOT
_
```
let highScore = false; 
let goodCreditHistory = false; 

let eligibleForLoan = highScore || goodCreditHistory; 
console.log(eligibleForLoan) // false

// NOT ! 

let applicationRefused = !eligibleForLoan; 
console.log("Application Refused", applicationRefused)
// Application Refused 
//true 
```
--- 
### Logical with non Boolenas
##### Truthy Falsey 
> The result of a logical expression is not neccerily is true or false 

```
false || true // true 
false || 'Mosh' // Mosh
false || 1 // 1 
```
##### JS checks oprends and will check on trythy or falsey 
##### Falsey are: 
- undefined 
- null 
- 0
- false 
- ' '
- NaN
##### Truthy are: 
- The rest

```
false || 1 || 2 // 1 
// RETURNS FIRST TRUTHY VALUE (Short for curcuting)
```

##### Example with (Defaul Value)

```
let userColor = 'red'
let defaultColor = 'blue'
let currentColor = userColor || defaultColor; 
// if userColor = no color, then will use defaultColor. 
```
---
### Bitwise Operators
// 1 = 00000001 (8 bits)
// 2 = 00000010 

##### Bitwise or |
_
```
console.log(1|2)// 3 
```
000000 01 = 1
000000 10 = 2
000000 11 = 3 

//R = 00000011 // 3 
console.log(1 & 2 ); 
// R = 00000000 // 0 

##### Example with (Access Control System)
// Read ( R), Write (W), Execute (E)
// We can use 1 bit of info to 
// Determan the kind of info user will have: 
| Read    | Write  | Exeucte |
|---------|--------|--------|
| 0000001 |  0     | 0      |
| 0000001 | 1      | 0      |
| 0000001 | 1      | 1      |

| Read      | R      | W | E | Result |
|-----------|--------|---|---|--------|
| 000000100 |  1     | 0 | 0 | 4      |
| 000000110 | 0      | 1 | 0 | 2      |
| 000000111 | 0      | 0 | 1 | 1      |

```
const readPermission = 4 
const writePermission = 2
const exeutePermission = 1
let myPermission = writePermission | readPermission | writePermission; 
console.log(myPermission) // 6 
```

```
let message = myPermission & readPermission? 'yes': 'no'
console.log(message); // yes 
``` 
---
### Operators Precedence
let x = 2+ 3 * 4 // 14 
let x = (2 +3) * 4 // 20 
> Best Practise is to use ()
--- 
### Exerscise 
// Swap Values 
```
let a = 'red' 
let b = 'blue'

let c = a;
let a = b;
b = c; 

console.log(a); // blue 
console.log(b); // red
```
--- 














