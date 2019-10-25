// Defines functions which feed events into html and display them on the DOM


const buildResultsHTML = () => {

    let resultsHTML = 	``
    searchResults.forEach(function (event) {

        
        console.log(event.id);
        if (event) {
            resultsHTML += `<li class='${event.id}'>${event.name.text}: ${event.description.text}<button class= 'save${event.id}'>Save</button></li>`;

        } else {
            resultsHTML += `<li> No results found <button class='save'>Save</button></li>`;
        }

    })
    
    resultsContainer.innerHTML = 
    `
    <h3>Results</h3>
    <ol>
    ${resultsHTML}
    </ol>` 

    resultsContainer.addEventListener('click', displayItinerary)
}

// Executed by the search click event
const resultsContainerHTML = () => {
    return `
        <h3>Results</h3>
        <ol></ol>
    `;
};

const createResultComponent = (name, address, id) => {
    return `
        <li><button class="restaurant-save" id="${id}">Save</button>${name}: ${address}</li>
    `;
};

const renderResults = restaurants => {
    const resultsList = document.querySelector("ol");
    let resultsHTML = '';

    restaurants.forEach(restaurantObj => {
        const { name, id } = restaurantObj.restaurant;
        const { address } = restaurantObj.restaurant.location;
        // HTML stored in string to update results each time save button is clicked.
        resultsHTML += createResultComponent(name, address, id);
    })
    
    resultsList.innerHTML = resultsHTML;

    const saveButtons = document.querySelectorAll(".restaurant-save");

    addEventToSaveButtons(saveButtons);
};