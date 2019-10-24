console.log("it works");
debugger
const ticketMasterBaseUrl = `https://app.ticketmaster.com/discovery/v2/`;

// initial fetch parsing by genre

// function to take the search event input info and return the data in a usable form
const handleSearch = event => {
    const inputField = document.querySelector(".concertInput");
    tmAPI.myParsedGenres(inputField.value)
    .then(response => {
        buildResultsForm(response._embedded.events)
    })
}

// function to build the search box and button and populate to the dom
// const buildSearchForm = () => {
//     const genreSearchForm = `
//     <fieldset>
//     <input type="text" id="concertInput" placeholder="concerts by genre">
//     <button class="genreButton">Search Genre</button>
//     </fieldset>
//     `
    
//     const genreContainerDiv = document.querySelector(".container__searchFields");
//     genreContainerDiv.innerHTML += genreSearchForm;
// }

// calling function to display to dom
// buildSearchForm();


// }
// calling event listener function
// eventListenerToGenreSearch();

// code above this line is clean

// function to populate dom with results from search field
const buildResultsForm = (genreArray) => {
    // console.log("help", genreArray);
    genreArray.forEach(genre => {
        console.log("what's here?", genre._embedded.venues[0].name);
        const genreResultsList = `
        <li>${genre.name}: ${genre._embedded.venues[0].name}: ${genre._embedded.venues[0].address.line1} <button class="genreSave">Save</button></li>
        `
        const genreResults = document.querySelector(".container__results");
        genreResults.innerHTML += genreResultsList;
        // console.log("test", genreResultsList)
    }
    )
}
// genre = parsedGenres._embedded.events[0].classifications[0].genre.name
// address = parsedGenres._embedded.events[0]._embedded.venues[0].address
// location = parsedGenres._embedded.events[0]._embedded.venues[0].name
// name = parsedGenres._embedded.events[0].name
// console.log("stuff", myParsedGenres);

