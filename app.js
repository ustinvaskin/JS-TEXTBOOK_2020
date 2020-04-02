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