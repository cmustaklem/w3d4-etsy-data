//question 1

var total = items.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price: 0})

var avgPrice = total.price / items.length

console.log('The average price is ' + '$' + avgPrice.toFixed(2))

//question 2

var question2 = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18
})
console.log('test: ', question2)


//question 3- the functions are creating an array, and in that array, it is looking for

var findBritishPound = items.filter(function(item){
  return item.currency_code === 'GBP'
})
console.log(findBritishPound[0].title + ' £' + findBritishPound[0].price)


//question 4

var findWood = items.filter(function(item){
  return item.materials.includes('wood')
})
console.log(findWood[0].title, findWood[1].title, findWood[2].title, findWood[3].title, findWood[4].title)

//question 5

var question5 = items.filter(function(item){
  return item.materials.length > 7
})
console.log(question5)


//question 6

var question6 = items.filter(function(item){
  return item.who_made.includes('i_did')
})
console.log(question6.length + ' were made by their sellers')
