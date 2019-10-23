console.log("it works");
const ticketMasterBaseUrl = `https://app.ticketmaster.com/discovery/v2/`;

// genre = parsedGenres._embedded.events[0].classifications[0].genre.name
// address = parsedGenres._embedded.events[0]._embedded.venues[0].address
// location = parsedGenres._embedded.events[0]._embedded.venues[0].name
// name = parsedGenres._embedded.events[0].name
// console.log("stuff", myParsedGenres);
const tmAPI = {
    myParsedGenres: (inputValue) => {
        return fetch(`${ticketMasterBaseUrl}events.json?classificationName=${inputValue}&dmaId=343&apikey=${concertKey}`)
            .then(genre => genre.json())
    }
}
const handleSearch = event => {
    console.log("stuff2");
        const inputField = document.getElementById("concertInput");
        tmAPI.myParsedGenres(inputField.value)
            .then(response => {
                buildResultsForm(response._embedded.events)
            })
    }


const buildSearchForm = () => {
        const genreSearchForm = `
    <fieldset>
			<input type="text" id="concertInput" placeholder="concerts by genre">
			<button class="genreButton">Search Genre</button>
        </fieldset>
        `

        const genreContainerDiv = document.querySelector(".container__searchFields");
        genreContainerDiv.innerHTML += genreSearchForm;
    }
buildSearchForm();
const handleGenreSearch = event => {
        const genreInputField = document.getElementById("concertInput");
        tmAPI.myParsedGenres(genreInputField.value)
            .then(parsedGenres => {
                buildResultsForm(parsedGenres._embedded.events);
                genreInputField.value = "";
            })
    }
const eventListenerToGenreSearch = () => {
        const genreSearchButton = document.querySelector(".genreButton");
        genreSearchButton.addEventListener("click", handleSearch);
    }

// code above this line is clean


const buildResultsForm = (genreArray) => {
        console.log("help", genreArray);
        genreArray.forEach(genre => {
            console.log("what's here?", genre._embedded.venues[0].name);
            const genreResultsList = `
        <li>${genre.name}: ${genre._embedded.venues[0].name}: ${genre._embedded.venues[0].address.line1} <button class="genreSave">Save</button></li>
        `
            const genreResults = document.querySelector(".container__results");
            genreResults.innerHTML += genreResultsList;
            console.log("test", genreResultsList)
        }
        )
    }
eventListenerToGenreSearch();

