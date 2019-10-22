// Defines function which creates and appends search form HTML to the DOM

const searchFormHTML = () => {
	return `<fieldset>
		<input type="text" name="meetups" placeholder="meetups by topic">
		<button class='meetup__searchButton'>SEARCH</button>
	</fieldset>`
}


const searchFieldContainer = document.querySelector('.container__searchFields');
searchFieldContainer.innerHTML += searchFormHTML();
