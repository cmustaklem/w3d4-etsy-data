var invites = ['Matt', 'Susan', 'Jessica', 'John']

var tasks = new Array(3)
tasks[0] = 'Buy Food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

var inbox = new Array('Water Bill', 'Pay Check', 'Greeting Card')

//these are the three different ways that we can create arrays

inbox[3] = 'You have rich uncle that wants to give you money.'

//this adds a new item to the array



tasks.push('Do homework') //pushes to the end
tasks.pop() //takes away the last piece of an array
tasks.unshift('Watch Netflix') //pushes to the beginning
var thingIGotRidOf = tasks.shift() //would run one specific variable

//how to take something out of the middle of an array

var payCheck = inbox.slice(1,3)
//console.log(payCheck)
// var payCheck = []
// payCheck[0] = inbox[1]
// payCheck[1] = inbox[2]
//splce lets you take out something within an array, and is temporary


//console.log(inbox)
//splice fully modifies the array. It is permanent.
// tasks[0] = 'Watch Hulu'
// console.log(tasks)

inbox.splice(1, 0, 'You Are Hired', 'Job Offer')
// delete inbox[0] //leaves a gap
//delete inbox
//console.log(inbox)

//this leaves behind a comma, which means that it is an undefined value



//if we want to count the number of items within an array
inbox[inbox.length] = 'Invite To Spotify' //this adds to the length and the result turns into 7. This adds Invite to Spotify to the array
//console.log(inbox.length)
//console.log(inbox)

// var hasJobOffer = inbox.includes('Job Offer')
// console.log(hasJobOffer)

//anytime you have to find something within an array, this is an easy function

var jobOfferIndex = inbox.indexOf('Job Offer')
var jobOfferIndex = inbox.indexOf('Job Salary')

inbox.push('Job Salary')

if (inbox.indexOf('Job Salary') === -1) {
    console.log('No salary yet.')
}
else {
    console.log('It is finally here!')
}

console.log(jobOfferIndex)

// console.log(inbox)
// var matches = inbox.find(function(item) {
//     return item.includes('Job')
// })
//this finds the first one as a string

function checkForJob(item) {
    return item.includes('Job')
}

var matches = inbox.filter(checkForJob)
//finds all the matches as an array


//console.log(matches)
//imperative code, it will be looping within the data

// var matches = []
//
// for (var i = 0; i < inbox.length; i++) {
//     // console.log(i + '.' + inbox[1])
//     // checkForJob(inbox[i])
//     var hasJob = checkForJob(inbox[i])
//     if (hasJobs) {
//         matches.push(inbox[i])
//     }
//     // console.log(hasJob)
// }
//console.log(matches)

//this reverses the order of an array
// console.log(inbox.reverse())
// inbox.reverse()
// //to make it permanent
// inbox = inbox.reverse()

var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']

// fruit.forEach(function(item) {
//     console.log(item.toUpperCase())
// })

//map transforms an array of items, one item at a time
//if you put fruit = fruit.map, this will make it permanent
// var upperCaseFruit = fruit.map(function(item) {
//     return item.toUpperCase()
// })

fruit = fruit.map(function(item, i) {
    if (i === 2) {
        return `<section>${item.toUpperCase()}<section>`
    }
    else {
        return `<div>${item}</div>`
    }

})

console.log(fruit)

//forEach


var prices = [
    {price: 7.98},
    {price: 14.99},
    {price: 2.30},
    {price: 12.80}
]

var total = prices.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price: 0}) //You must end with , 0 because it says that the equation starts at the 0 value

console.log(total)
var avgPrice = total.price / prices.length

console.log(total.price / prices.length)
console.log(avgPrice)
