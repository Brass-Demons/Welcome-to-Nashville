// Attach event listener to search field buttons, define and call function which fetches data the user searches for, call another function which plugs results into HTML template and display results on the DOM
// This will be obsolete when the addEventToSearchButtons function is a loop.
const searchEventHandler = () => {
	const inputFields = document.querySelectorAll('input');

    inputFields.forEach(function(inputField){
        console.log(inputField.value)
    })

    getMeetupInfo()
    .then(results => {
        searchResults = results.events;
        buildResultsHTML();

    })
}

// Executed by the renderInitialPage function right after the buttons are put on the DOM within that function.
// Refactor with a loop.
const addEventToSearchButtons = () => {
	const restaurantButton = document.querySelector(".restaurants__searchButton");
	// const meetup__searchButton = document.querySelector('.meetup__searchButton');

	restaurantButton.addEventListener("click", () => {
		const input = document.querySelector(".restaurants__input").value;

		renderResultsContainer();

		API.getRestaurants(input)
			.then(results => renderResults(results.restaurants));
	});

	// meetup__searchButton.addEventListener('click', searchEventHandler);
};

const addEventToSaveButtons = buttonArr => {
	buttonArr.forEach(button => {
		const restaurantName = button.parentElement.innerHTML.split('n>')[1].split(':')[0];
		
		button.addEventListener("click", () => document.getElementById("restaurant-itinerary").innerHTML = restaurantName);
	});
};

// Parks search event handler and second .then call

const searchHandler = () => {
	const parkSearchInput = document.getElementById("parks-dropdown").value
	console.log("SEARCH VALUE", parkSearchInput);
	//parkSearch is the function that fetches the data.
  
	API.parkSearch(parkSearchInput)
	  .then(response => parkDisplay(response))
  }
  
  
	const attachEventListenerToSearchButton = () => {
	  let searchButton = document.querySelector("#parks-search-button")
	  // console.log(searchButton)
	  searchButton.addEventListener("click", searchHandler);
	};

	
//Ticketmaster event manager and second .then call

	    // add event listener to genre search button
		const genreSearchButton = document.querySelector(".concerts__searchButton");
		genreSearchButton.addEventListener("click", () => {
			console.log("event listener for genre");
			const genreInput = document.querySelector(".concertInput").value;
			renderResultsContainer();
			tmAPI.myParsedGenres(input)
		.then(response => {
			renderResults(response._embedded.events)
		})
	})