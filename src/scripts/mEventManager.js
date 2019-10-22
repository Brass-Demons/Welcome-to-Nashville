// Attach event listener to search field buttons, define and call function which fetches data the user searches for, call another function which plugs results into HTML template and display results on the DOM

let resultsContainer = document.querySelector('.results')


getMeetupInfo()
.then(results => {
	console.log(results);
	let searchResults = results.events;
    buildResultsHTML(searchResults);
    displayResults()
})



const meetup__searchButton = document.querySelector('.meetup__searchButton')
meetup__searchButton.addEventListener('click', getMeetupInfo)

