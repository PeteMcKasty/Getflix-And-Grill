const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/NY/city/Bohemia/0');
xhr.setRequestHeader('X-RapidAPI-Key', 'b587d99cd7msh69fb91f8d258ce9p119caejsn086be23ddd00');
xhr.setRequestHeader('X-RapidAPI-Host', 'restaurants-near-me-usa.p.rapidapi.com');

xhr.send(data);
