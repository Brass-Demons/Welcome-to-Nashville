// Define function for fetch request incorporating variables to allow for user search input

// This is the number of results that show up for the search. You can use this variable for your own functions as well if you'd like. It is currently being using for the restaurant results.
const numOfResults = 4;

const API = {
	getRestaurants(foodSearch) {
		return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${foodSearch}&count=${numOfResults}&sort=rating&apikey=${restaurantKey}`)
    		.then(r => r.json())
	},
	// add your own fetch functions to this API object
};


// const meetupBaseUrl = 'https://www.eventbriteapi.com/v3/'

// const getMeetupInfo = () => {
//     fetch(`${meetupBaseUrl}/search/?categories/token=${meetupKey}`)
//     .then(events => events.json());
// }

// fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${userInput}&location.address=nashville&token=${CCI5AIPTO72K63BN4OOK}`, {
//   "headers": {
//       "Accept": "application/json"
//   }
// }

const getMeetupInfo = () => {

return fetch(`https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json`)
    .then(r => r.json())   
}    