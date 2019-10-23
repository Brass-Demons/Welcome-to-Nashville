// Define function for fetch request incorporting variables to allow for user search input

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



const getMeetupInfo = () => {

return fetch(`https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json`)
    .then(r => r.json())   
}


    