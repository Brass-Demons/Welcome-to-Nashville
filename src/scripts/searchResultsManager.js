// Defines functions which feed events into html and display them on the DOM

let resultsObject = {

}

const buildResultsHTML = () => {
    // console.log(searchResults[0])
    let resultsHTML = 	``
    searchResults.forEach(function (event) {
        
        console.log(event.id);
        if (event) {
            resultsHTML += `<li class='${event.id}'>${event.name.text}: ${event.description.text}<button class= 'save${event.id}'>Save</button></li>`;

        } else {
            resultsHTML += `<li> No results found <button class='save'>Save</button></li>`;
        }
       
        // console.log(resultsContainer.textContent)
    })
    resultsContainer.innerHTML += 
    `
    <h3>Results</h3>
    <ol>
    ${resultsHTML}
    </ol>` 

    
    
    
        // saveButtons[i].className = `save__meetup${[i]}`
        
        resultsContainer.addEventListener('click', displayItinerary)
         
        
    }

    // const saveButtons = document.querySelectorAll('.save');
    // saveButtons.forEach(function(saveButton) {
    //     saveButton.addEventListener('click', displayItinerary)
    // })
  


