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