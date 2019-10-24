// Contains all functions that manipulate the DOM

// Render initial page, which includes title and search fields on the DOM
// Executed in main file
const renderInitialPage = () => {
	const searchFieldContainer = document.querySelector('.container__searchFields');
	// No += in this case since we can replace what we currently have in that container, which is currently empty
	searchFieldContainer.innerHTML = searchFormHTML();
	// Have to declare buttons here, bc they didn't exist before.

	// When the following function is turned into a loop, we will need the following variable to be a parameter.
	// const searchButtons = document.querySelectorAll('.searchButtons');
	addEventToSearchButtons();
};

// Executed when search button is clicked
const renderResultsContainer = () => {
	const resultsContainer = document.querySelector('.container__results');

	resultsContainer.innerHTML = resultsContainerHTML();
	addEventToSaveButtons();
};