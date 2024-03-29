// Create HTML and add to DOM for Itinerary

const itineraryObj = {
    park : 'Radnor',
    restaurant: 'Sitar',
    meetup: 'Women in Tech',
    concert: 'Jack White'
}

const displayItinerary = (event) => {
    console.log(event.target)
    let Targetid = event.target.className.split('save')
    event.target.className = `meetup ${Targetid[1]}`
    console.log(event.target.previousSibling.textContent.split(':')[0])
    itineraryObj.meetup = event.target.previousSibling.textContent.split(':')[0];
    
    // same as writing const park = itinerary.park, const restaurant = itinerary.restaurant, etc.
    const { park, restaurant, meetup, concert } = itineraryObj;

    const itineraryHTML = `
        <h3>My Itinerary</h3>
        <ul>
            <li>Park: ${park}</li>
            <li>Restaurant: ${restaurant}</li>
            <li>Meetup: ${meetup}</li>
            <li>Concert: ${concert}</li>
        </ul>
    `;
    
    const itineraryContainer = document.querySelector('.container__itinerary');
    itineraryContainer.innerHTML = itineraryHTML;
};
