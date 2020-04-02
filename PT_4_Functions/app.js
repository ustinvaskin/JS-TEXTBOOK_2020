const numbers = [1, 2, 3, 4]


const count = countOccurrences(null, 6)
console.log(count)

function countOccurrences(array, searchElem) {
  if (!Array.isArray(array))
    throw new Error('Invalid Array')

  return array.reduce((accumulator, current) => {
    const occurances = (current === searchElem) ? 1 : 0
    return accumulator + occurances
  })
}
