const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
]

console.log(courses.findIndex(courses => courses.name === 'a'))