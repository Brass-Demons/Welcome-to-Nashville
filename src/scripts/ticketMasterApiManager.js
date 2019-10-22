console.log("it works");

const ticketMasterBaseUrl = `https://app.ticketmaster.com/discovery/v2/`;

// genre = parsedGenres._embedded.events[0].classifications[0].genre.name
// address = parsedGenres._embedded.events[0]._embedded.venues[0].address
// location = parsedGenres._embedded.events[0]._embedded.venues[0].name
// name = parsedGenres._embedded.events[0].name
// console.log("stuff", myParsedGenres);
const tmAPI = {
    myParsedGenres: (inputValue) => {
        return fetch(`${ticketMasterBaseUrl}events.json?classificationName=music&city=Nashville&apikey=${concertKey}&genre=${inputValue}`)
            .then(genre => genre.json())
    }
}


// *****2nd .then commented out to test other strategy
// tmAPI.myParsedGenres().then(parsedGenres => {
//     myParsedData = parsedGenres;
//     console.log("in 2nd .then", myParsedData);
// })
// ****** end of 2nd .then commented out
// check your notes in notebook for pattern & think of what you're trying to accomplish
// dom components beginnings
// search form completed


const buildSearchForm = () => {
    const genreSearchForm = `
    <fieldset>
			<input type="text" id="concertInput" placeholder="concerts by genre">
			<button class="genreButton">Search Genre</button>
        </fieldset>
        `

    const genreContainerDiv = document.querySelector(".genreSearch");
    genreContainerDiv.innerHTML += genreSearchForm;
}
buildSearchForm();
const handleGenreSearch = event => {
    const genreInputField = document.getElementById("concertInput");
    tmAPI.myParsedGenres(genreInputField.value)
    .then(parsedGenres => {
        buildResultsForm(parsedGenres._embedded.events[0].name);
        console.log("manila", parsedGenres._embedded.events[0].name);
        genreInputField.value = "";
    })
}
const eventListenerToGenreSearch = () => {
    const genreSearchButton = document.querySelector(".genreButton");
    genreSearchButton.addEventListener("click", handleGenreSearch);
}
// results html for dom
const buildResultsForm = () => {
    const genreResultsList = `
    <li><button class="genreSave">Save</button></li>
    `
    const genreResults = document.querySelector("ol");
    genreResults.innerHTML += genreResultsList;
}
eventListenerToGenreSearch();

// let nameArray = [];
// let locationArray = [];
// let addressArray = [];
// let genreArray = [];