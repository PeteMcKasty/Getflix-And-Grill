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