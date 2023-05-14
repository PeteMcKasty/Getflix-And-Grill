const OMDb_API_KEY = '121fe711';

// Get elements
let findMovieButton = document.getElementById('find-movie-button');
let movieTitle = document.getElementById('movie-title');
let zipForm = document.getElementById('zip-form');
let zipInput = document.getElementById('zip-input');
let goButton = document.getElementById('go-button');
let restaurantName = document.getElementById('restaurant-name');
let movieHistoryList = document.getElementById('movie-history-list');
let restaurantHistoryList = document.getElementById('restaurant-history-list');

// Load movie history from local storage
let movieHistory = JSON.parse(localStorage.getItem('movieHistory')) || [];

// Load restaurant history from local storage
let restaurantHistory = JSON.parse(localStorage.getItem('restaurantHistory')) || [];

// Display movie history
function displayMovieHistory() {
  movieHistoryList.innerHTML = '';
  for (let i = 0; i < movieHistory.length && i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = movieHistory[i];	
	// Add li to movie history list
	movieHistoryList.appendChild(li);
	}
}

// Display restaurant history
function displayRestaurantHistory() {
	restaurantHistoryList.innerHTML = '';
	for (let i = 0; i < restaurantHistory.length && i < 5; i++) {
	const li = document.createElement('li');
	li.textContent = restaurantHistory[i];
	// Add li to restaurant history list
	restaurantHistoryList.appendChild(li);
	}
}

// Get a random movie from the OMDb API
async function getRandomMovie() {
  const requestUrl = 'http://www.omdbapi.com/?apikey=121fe711&type=movie'
	try {
		const response = await fetch(requestUrl);
		const data = await response.json();
			if (data.Search && data.Search.length > 0) {
			const movie = data.Search[Math.floor(Math.random() * data.Search.length)];
			return movie.Title;
			} else {
				throw new Error('No movies found.');
			}
		} catch (error) {
	console.error(error);
	return 'Error: Could not fetch movie.';
	}
}

// Get a random restaurant from the Restaurant near me API
async function getRandomRestaurant(){
  const url = 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/90210/0';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b587d99cd7msh69fb91f8d258ce9p119caejsn086be23ddd00',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};

  try {
	const response = await fetch(url, options);
	const data = await response.json();
	  if (data.Search && data.Search.length > 0) {
		const meal = data.Search[Math.floor(Math.random() * data.Search.length)];
			return meal.Restaurant;
			} else {
				throw new Error('Location Unknown.');
			}
		} catch (error) {
			console.error(error);
			return 'Error: Could not find restaurant.';
		}
}

// Event listeners
findMovieButton.addEventListener('click', async () => {
	const movie = await getRandomMovie();
	movieTitle.textContent = movie;
	movieHistory.unshift(movie);
	localStorage.setItem('movieHistory', JSON.stringify(movieHistory));
	displayMovieHistory();
});
	
zipForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	const zipCode = zipInput.value.trim();
	const restaurant = await getRandomRestaurant(zipCode);
	restaurantName.textContent = restaurant;
	restaurantHistory.unshift(restaurant);
	localStorage.setItem('restaurantHistory', JSON.stringify(restaurantHistory));
	displayRestaurantHistory();
});
	
	// Display initial movie and restaurant history
displayMovieHistory();
displayRestaurantHistory();