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
	const meetup__searchButton = document.querySelector('.meetup__searchButton');

	restaurantButton.addEventListener("click", () => {
		const input = document.querySelector(".restaurants__input").value;

		renderResultsContainer();

		API.getRestaurants(input)
			.then(results => renderResults(results.restaurants));
	});

	meetup__searchButton.addEventListener('click', searchEventHandler);
};

const addEventToSaveButtons = buttonArr => {
	buttonArr.forEach(button => {
		const restaurantName = button.parentElement.innerHTML.split('n>')[1].split(':')[0];
		
		button.addEventListener("click", () => document.getElementById("restaurant-itinerary").innerHTML = restaurantName);
	});
};