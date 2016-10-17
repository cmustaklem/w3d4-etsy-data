var pizza = new Object()
pizza.meat = 'Sausage'
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'

//what is the difference between a property and a method? A property just gives informaiton, but a method does things

var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives'
}

pizza.meat = 'Pepperoni'

// console.log(pizza.meat)

var topping = 'cheese'
// console.log(pizza[topping])

var props = Object.keys(pizza)

// props.forEach(function(prop) {
//     console.log(pizza[prop])
// })

// console.log(props)
//arrays of objects can connect different objects that have to do with the same thing
var movies = [
    {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            }
            , {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forrest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    }
]


movies.forEach(function(movie){

    var directors = movie.directors.map(function(director) {
        return director.name
    })

    // console.log(directors.join(', '))
    directors = directors.join(', ')

    //console.log(movie.title + ' - ' + movie.genre + '(' + movie.year + ')' + movie.directors[0].name)
    console.log(movie.title + ' - ' + movie.genre + '(' + movie.year + ')' - Directed by + directors
})
// var movie =
//
// var movie2 =
// var title = 'Star Wars'
// var genre = 'Sci Fi'
// var year = 1977
