// Defines functions which feed events into html and display them on the DOM

const buildResultsHTML = () => {
    console.log(searchResults[0])
    let resultsHTML = 	``
    searchResults.forEach(function (event) {
        
        console.log(event);
        if (event) {
            resultsHTML += `<li>${event.name.text}: ${event.description.text}<button>Save</button></li>`;

        } else {
            resultsHTML += `<li> No results found <button>Save</button></li>`;
        }
       
        console.log(resultsContainer.textContent)
    })
    resultsContainer.innerHTML += 
    `
    <h3>Results</h3>
    <ol>
    ${resultsHTML}
    </ol>` 
}