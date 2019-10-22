// Create HTML and add to DOM for Itinerary


const displayItinerary = () => {
    const itineraryHTML = 
    `<h3>My Itinerary</h3>
    <ul>
    <li>Park: </li>
    <li>Restaurant: </li>
    <li>Meetup: </li>
    <li>Concert: </li>
    </ul>`
    
    const itineraryContainer = document.querySelector('.container__itinerary')
    itineraryContainer.innerHTML = itineraryHTML
}

