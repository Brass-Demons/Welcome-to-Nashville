const addEventToSearchButton = () => {
	const button = document.querySelector("restaurants__searchButton");

	button.addEventListener("click", () => {
		const input = document.querySelector("restaurant__input").value;
		
		API.getRestaurants(input)
			.then(results => renderResults(results.restaurants));
	});
};

const createResultsComponent = (name, address, id) => {
	return `
		<li><button class="restaurant-save" id="${id}">Save</button>${name}: ${address}</li>
	`;
};

const addEventToSaveButtons = buttonArr => {
	buttonArr.forEach(button => {
		const restaurantName = button.parentElement.innerHTML.split('n>')[1].split(':')[0];
		
		button.addEventListener("click", () => document.getElementById("restaurant-itinerary").innerHTML = restaurantName);
	});
};

const renderResults = restaurants => {
	const resultsList = document.querySelector("ol");
	let resultsHTML = '';

	restaurants.forEach(restaurantObj => {
		const { name, id } = restaurantObj.restaurant;
		const { address } = restaurantObj.restaurant.location;
		// HTML stored in string to update results each time save button is clicked.
		resultsHTML += createResultsComponent(name, address, id);
	})
	
	resultsList.innerHTML = resultsHTML;

	const saveButtons = document.querySelectorAll(".restaurant-save");

	addEventToSaveButtons(saveButtons);
};