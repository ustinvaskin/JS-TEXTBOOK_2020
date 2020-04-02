## Arrays 

#### Introduction 

We will be working with arrays: 
- Adding new Elements
- Finding Elemenst 
- Removing Elemets 
- Splitting Elemets 
- Combining Elemets and so on 

---
#### Adding Elements 
```
const nums = [3, 4]
```
> Its a constant so we can't re-assing 
> But we can modify the srray we can add or remove elemets 

! Arrays are objects so using the dot notation we can look at all the properties and methods defined in arrays. 

We will be looking how to add new elemets to the 
- End 
- Beggining 
- Ends 
(of an array)


##### Push method (End of an array)

```
nums.push(5, 6)
console.log(nums) // [ 3, 4, 5, 6 ]
```
##### Unshift method (Pushes elms to the rught and add new ones to the beggining)
```
nums.unshift(1, 2)
console.log(nums) //[ 1, 2, 3, 4, 5, 6 ]
```

##### Slice (Middle of an array)
```
nums.slice(2, 0, 'a', 'b') // start position, deleatecount, new elms
console.log(nums)  //[ 1, 2, 'a', 'b', 3, 4, 5, 6]
```
---

#### Finding Elements (Primitives)

##### IndexOf 
indexOf returns an index of a given elements in an array or - 1 if there are no elemets

```
const nums = [1, 2, 3, 4]
console.log(nums.indexOf(2)) // 1
console.log(nums.indexOf(8)) // -1
```
### IndexOf ! ==-1
This will check if there is an element or not ina array - returns boolean value
```
console.log(nums.indexOf(4) !== -1) // true
console.log(nums.indexOf(8) !== -1) //false
```

### Includes
This will check if there is an element or not ina array - returns boolean value
```
console.log(nums.includes(4)) // true
console.log(nums.includes(8)) //false
```

> All of these methods have a second argumrts that is a strating point (from index) -> index at which the search will begin

```
const nums = [1, 2, 3, 4]
console.log(nums.indexOf(1, 2))
```
---

#### Finding Elements (Reference type)

> Object are referece types so when we check them for eqiality we also check their reference

##### Find method // returns an object that matches
```
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
]
```

```
console.log(courses.find(function (course) {
  return course.name === 'a'
})) // { id: 1, name: 'a' }
```
```
console.log(courses.find(function (course) {
  return course.name === 'zyz'
})) // undefined

```

##### Find index method // returns an index of an object that matches

```
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
]
```
```
console.log(courses.findIndex(function (course) {
  return course.name === 'a'
})) // 0
```
```
console.log(courses.findIndex(function (course) {
  return course.name === 'zyz'
})) // -1
```

---
#### Arrow Functions

```
console.log(courses.findIndex(course => course.name === 'b')) // 1
console.log(courses.findIndex(course => course.name === 'zyz')) // -1
```
---
#### Removing Elements

##### Pop method (delete end of an array)

```
const nums = [1, 2, 3, 4, 5]
nums.pop()
console.log(nums) //[ 1, 2, 3, 4 ]
```
##### shift method (delete begginign of an array)

```
nums.shift()
console.log(nums) // [ 2, 3, 4 ]
```

##### Splice (Middle of an array)
```
nums.splice(2, 2)
console.log(nums) // [ 2, 3 ]
```
---
#### Emptying an array
##### Solution 1 = [] 

```
let nums = [1, 2, 3, 4, 5]
let another = nums
nums = []
console.log(nums) // []
```
But when you re - assing iit's still not deleating the reference (if it is used it will not be deleated, otherwise if not used - no refernce it will be deleated by garbage collector)

```
console.log(another) // [ 1, 2, 3, 4, 5 ]
```
##### Solution 2 Length 
Will deleate even if have reference
```
let nums = [1, 2, 3, 4, 5]
let another = nums

nums.length = 0
console.log(nums) // []
console.log(another) // []
```
##### Solution 3 Splice 
Will deleate even if have reference
```
let nums = [1, 2, 3, 4, 5]
let another = nums

nums.splice(0, nums.length)
console.log(nums) // []
console.log(another) // []
```

##### Solution 4 Pop
Will deleate even if have reference
```
let nums = [1, 2, 3, 4, 5]
let another = nums

while (nums.length > 0) {
  nums.pop()
}

console.log(nums) // []
console.log(another) // []
```
---

#### Combingin and slicing Arrays
```
const first = [1, 2, 3]
const second = [4, 5, 6]
```
##### Concat 
To combine we use concat will return a new array 
```
const combined = first.concat(second)
console.log(combined) // [ 1, 2, 3, 4, 5, 6 ]
```

But if we want to separate one array into two we will use slice 
##### Slice 
```
const sliced = combined.slice(2, 4)
console.log(sliced) // [ 3, 4 ]
```
Withc no second argument we will just return an arry from a given index till the end
```
const sliced = combined.slice(2)
console.log(sliced) // [ 3, 4, 5, 6 ] 
```
With no arguments at all we will get the a copy if an original array
```
const sliced = combined.slice()
console.log(sliced) // [ 1, 2, 3, 4, 5, 6 ]
```
---
#### The spread oparator

When ypu spreand an array all its elements are returned individually 

```
const first = [1, 2, 3]
const second = [4, 5, 6]

// Combining 2 arrays using spread operator

const combined = [...first, ...second]
console.log(combined) // [ 1, 2, 3, 4, 5, 6 ]
```

Using spread operator we can also add extra elements in in the middle or at the end:

```
const combined = [...first, 'a', ...second, 'b']
console.log(combined) // [ 1, 2, 3, 'a', 4, 5, 6, 'b']
```
We can also copy an array with the spread operator: 

```
const copy = [...combined]

console.log(copy) // [ 1, 2, 3, 'a', 4, 5, 6, 'b']
```

---
#### Iterating an array 
We use for ... of 

```
const numbers = [1, 2, 3, 4]

for (let number of numbers) {
  console.log(number)
}

// 1
// 2
// 3
// 4
```

Another approach is to use for .. each method 
```
const numbers = [1, 2, 3, 4]

numbers.forEach(number => {
  console.log(number)
})
// 1
// 2
// 3
// 4
```
Aslo if we use forEach we can also display index a as a second parameter 
```
const numbers = [1, 2, 3, 4]
numbers.forEach((number, index) => {
  console.log(index, number)
})
// 0 1
// 1 2
// 2 3
// 3 4
```

---
#### Joining an array & Splitting strings 

```
const numbers = [1, 2, 3, 4]
const joined = numbers.join(',') // will retrun a string 
console.log(joined) // 1,2,3,4
```

We can aso split string 

```
const message = 'This is my first sentance'
const parts = message.split(' ')
console.log(parts) // [ 'This', 'is', 'my', 'first', 'sentance' ]
```
---

#### Sorting an array

Sort converst each elents in a string and then it sorts elements 

```
const numbers = [1, 5, 3, 2]
numbers.sort()
console.log(numbers) // [ 1, 2, 3, 5 ]
```
We can also use reverse method to reverse an array 
```
numbers.reverse()
console.log(numbers) // [ 5, 3, 2, 1 ]
```
What if you have an object we will have to use a slgthly different approach 

```
const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'Java Script' },
  { id: 3, name: 'OOP' }
]
courses.sort((a, b) => {
  const nameA = a.name.toLowerCase() // in case if a letter lower/ capital 
  const nameB = a.name.toLowerCase()

  if (nameA < nameB) return -1
  if (nameA > b.name) return 1
  return 0
})
console.log(courses)

// [
//   { id: 2, name: 'Java Script' },
//   { id: 1, name: 'Node.js' },
//   { id: 3, name: 'OOP' }
// ]
```
---

#### Testing Elements in an Array Every & Some 
Checkig if all numbers are positive
```
const numbers = [1, 2, 3, 4]
const allPositive = numbers.every((value) => {
  return value >= 0
})
console.log(allPositive) // true
```

Some - if at leat one elemenent matches criteria 
```
const alLeatOneNegative = numbers.some((value) => {
  return value <= 0
})
console.log(alLeatOneNegative) // false
```
---

#### Filtering an array   arr.filter()
If we want to retunrn only positive numbers 
```
const numbers = [1, 2, -3, 4]
const filteredPositive = numbers.filter((value) => {
  return value >= 0
})
console.log(filteredPositive) // [ 1, 2, 4 ]
```

Shorter version
```
const filteredPositive = numbers.filter(n => n >= 0)
console.log(filteredPositive) // [ 1, 2, 4 ]
```
---
#### Mapping an array -> will retur na new array we can map an each item into somethin else 

For HTML Purposes 
```
const numbers = [1, 2, -3, 4]
const filteredPositive = numbers.filter(n => n >= 0)
const items = filteredPositive.map(n => '<li>' + n + '<li>')
console.log(items) //[ '<li>1<li>', '<li>2<li>', '<li>4<li>' ]
const html = '<ul>' + items.join('') + '<ul/>'
console.log(html) // <ul><li>1<li><li>2<li><li>4<li><ul/>
```

Work with objects 
```
const items = filteredPositive.map(n => {
  const obj = { value: n }
  return obj
})
console.log(items) // [ { value: 1 }, { value: 2 }, { value: 4 } ]
```

Implement it shorter with chaining  
```
const numbers = [1, 2, -3, 4]
const items = numbers.filter(n => n >= 0).map(n => {
  return { value: n }
})
console.log(items) // [ { value: 1 }, { value: 2 }, { value: 4 } ]
```

Another example with chain methods: 
```
const numbers = [1, 2, -3, 4]
const item = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value)
  
console.log(item) // [ 2, 4 ]
```
---

#### Reducing an array 
Calculate the sum an example 
```
const numbers = [1, 2, -3, 4]

let sum = 0
for (let number of numbers)
  sum += number
console.log(sum) // 4
```

There is a cleaner way to use it with arrays :
```
const numbers = [1, 2, -3, 4]
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sum) // 4
```
Shorter
```
const numbers = [1, 2, -3, 4]

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum) // 4
```
---
#### Exersise 1 Array from Range 
```
function ArrayFromRange(min, max) {
  const output = []
  for (let i = min; i <= max; i++)
    output.push(i)
  return output
}

console.log(ArrayFromRange(2, 5)) // [ 2, 3, 4, 5 ]

```
---
#### Exersise 2 Includes
Implement includes method 
```
const numbers = [1, 4, 6, 7]

function includes(array, searchElem) {
  for (let element of array) {
    if (element === searchElem)
      return true
    return false
  }
}

console.log(includes(numbers, 5)) // false
console.log(includes(numbers, 1)) // true

```
---
#### Exersise 3 Exept 

```
const numbers = [1, 4, 6, 7]

function exept(array, excluded) {
  const output = []
  for (let elem of array)
    if (!excluded.includes(elem))
      output.push(elem)
  return output

}

console.log(exept(numbers, [2])) // [ 1, 4, 6, 7 ]

```
---
#### Exersise 4 Moving an Element 

```
const numbers = [1, 2, 3, 4]

function move(arr, index, offset) {
  const position = index + offset
  if (position >= arr.length || position < 0) {
    console.log('Invalid offset')
    return
  }

  const output = [...arr]
  const element = output.splice(index, 1)[0]
  output.splice(position, 0, element)
  return output
}

const output = move(numbers, 1, -1)
console.log(output) // [ 2, 1, 3, 4 ]
```
---
#### Exersise 4 Count occurances 


