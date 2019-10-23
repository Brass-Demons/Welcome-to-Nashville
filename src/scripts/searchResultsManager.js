// Defines functions which feed events into html and display them on the DOM

const buildResultsHTML = (searchResults) => {
    let resultsHTML = 	``
    if (searchResults) {
        resultsHTML = `<li>${searchResults[0].name.text}: ${searchResults[0].description.text}<button>Save</button></li>`;
    } else {
        resultsHTML = `<li> No results found <button>Save</button></li>`;
    }
    resultsContainer.innerHTML += 
    `<h3>Results</h3>
    <ol>
    ${resultsHTML}
    </ol>`
}


