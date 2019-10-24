// Puts initial HTML on the DOM, which just includes the search form.
// Anything else will be triggered within the click events.
const searchFieldContainer = document.querySelector('.container__searchFields');
searchFieldContainer.innerHTML = searchFormHTML();