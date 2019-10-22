// Defines functions which feed events into html and display them on the DOM

const buildResultsHTML = (searchResults) => {
    if (searchResults) {
        let resultsHTML = `<li>${searchResults.events[0].name.text}${searchResults.events[0].description.text}<button>Save</button></li>`;
        resultsHTML;
    } else {
        let resultsHTML = `<li> No results found <button>Save</button></li>`;
        resultsHTML;
    }
    const displayResults = () => {
    resultsContainer.innerHTML += resultsHTML
    }
    displayResults ()
}




// let resultsContainer = document.querySelector('.results')


// getMeetupInfo()
// .then(results => {
// 	console.log(results);
// 	let searchResults = results.events[1].name.text;

//    let resultsHTML = `<li>${searchResults}<button>Save</button></li>`
//    resultsContainer.innerHTML += resultsHTML
//    return resultsContainer

// })

