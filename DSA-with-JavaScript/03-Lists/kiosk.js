const { List } = require('./ListClass');
const { films } = require('./films');

// Customer object
class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

// Display list with customer object added.
function displayList(list) {
  for (list.front(); list.hasNext(); ) {
    let listItem = list.next();

    if (listItem instanceof Customer) {
      console.log(`${listItem.name}, ${listItem.movie}`);
    } else {
      console.log(listItem);
    }
  }
}

// Check out a movie with customer object
function checkOut(name, movie, moviesList, customerList) {
  if (movieList.contains(movie)) {
    const c = new Customer(name, movie);
    customerList.append(c);
    moviesList.remove(movie);
  } else {
    console.log(`${movie} is not available.`);
  }
}

// Create movies array from films
const movies = films.split(',');

// Create new Lists
const movieList = new List();
const customers = new List();

// Populate List with movies
for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}

displayList(movieList);
checkOut('irina', 'big fish', movieList, customers);
console.group();
console.log('Available movies: ');
displayList(movieList);
console.log('Customer rentals: ');
displayList(customers);
console.groupEnd();
