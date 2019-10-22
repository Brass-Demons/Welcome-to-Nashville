const numOfResults = 4;

const API = {
	getRestaurants(foodSearch) {
		return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${foodSearch}&count=${numOfResults}&sort=rating&apikey=${restaurantKey}`)
    		.then(r => r.json())
	}
};

const addEventToSearchButton = () => {
	const button = document.getElementById("restaurant-search");

	button.addEventListener("click", () => {
		const input = document.getElementById("restaurant-input").value;
		
		API.getRestaurants(input)
			.then(results => renderResults(results.restaurants));
	});
};

const createResultsComponent = (name, address, id) => {
	return `
		<li><button id="${id}">Save</button>${name}: ${address}</li>
	`;
};

const addEventToSaveButton = (name, id) => {
	const button = document.getElementById(id);

	button.addEventListener("click", () => document.getElementById("restaurant-itinerary").innerHTML = name);
};

const renderResults = restaurants => {
	const resultsList = document.querySelector("ol");

	restaurants.forEach(restaurantObj => {
		const { name, id } = restaurantObj.restaurant;
		const { address } = restaurantObj.restaurant.location;

		resultsList.innerHTML += createResultsComponent(name, address, id);
		addEventToSaveButton(name, id);
	})
};

addEventToSearchButton();