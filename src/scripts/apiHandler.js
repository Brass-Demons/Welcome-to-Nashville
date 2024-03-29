// Define function for fetch request incorporating variables to allow for user search input
const parksApiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json" 
// This is the max number of results that show up for the search. You can use this variable for your own functions as well if you'd like. It is currently being using for the restaurant results.
const numOfResults = 4;

const API = {
	getRestaurants(foodSearch) {
		return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${foodSearch}&count=${numOfResults}&sort=rating&apikey=${restaurantKey}`)
			.then(r => r.json())
	},
	getMeetupInfo() {
		return fetch(`https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json`)
			.then(r => r.json())
	},
	myParsedGenres(inputValue) {
		return fetch(`${ticketMasterBaseUrl}events.json?classificationName=${inputValue}&dmaId=343&apikey=${concertKey}`)
			.then(genre => genre.json())
	},
	parkSearch(parkSearchInput) {
		return fetch(`${parksApiBaseUrl}?${parkSearchInput}=Yes`,
			{
				"headers": {
					"Accept": "application/json",
					"X-App-Token": "P7SZS21rPkPvHmuIvW4glESQf"
				}
			})
			.then(response => response.json());
	}
};

// API.getMeetupInfo()

// This was for the Eventbrite fetch call 
// const meetupBaseUrl = 'https://www.eventbriteapi.com/v3/'

// const getMeetupInfo = () => {
//     fetch(`${meetupBaseUrl}/search/?categories/token=${meetupKey}`)
//     .then(events => events.json());
// }

// fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${userInput}&location.address=nashville&token=${meetupKey}`, {
//   "headers": {
//       "Accept": "application/json"
//   }
// }

// const getMeetupInfo = () => {

// return fetch(`https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json`)
//     .then(r => r.json())   
// }    