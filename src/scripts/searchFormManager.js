// Defines function which creates initial HTML, which includes the title + search form 
// Can change function name to initialHTML. 
// This function is called by renderInitialPage.
// Stretch: Refactor fieldsets.
const searchFormHTML = () => {
	return `
	<h1>Welcome to Nashville</h1>
	<section>
		<h3>Search for stuff to do today</h3>
	</section>
	<fieldset>
		<select id ="parks-dropdown">
			<option value="" disabled selected hidden>parks by feature</option>
			<option value="dog_park">Dog Park</option>
			<option value="hiking_trails">Hiking Trails</option>
			<option value="playground">Playground</option>
			<option value="basketball_courts">Basketball Courts</option>
			<option value="swimming_pool">Swimming Pool</option>
		</select>
		<button id="parks-search-button">Button</button>
	</fieldset>
	<fieldset>
		<input class="restaurants__input" type="text" name="restaurants" placeholder="restaurants by cuisine">
		<button class='searchButton restaurants__searchButton'>SEARCH</button>
	</fieldset>
	<fieldset>
		<input type="text" name="meetups" placeholder="meetups by topic">
		<button class='searchButton meetup__searchButton'>SEARCH</button>
	</fieldset>
	<fieldset>
		<input type="text" class="concertInput" name="concerts" placeholder="concerts by genre">
		<button class='searchButton concerts__searchButton'>SEARCH</button>
	</fieldset>
	`;
};

const searchFieldContainer = document.querySelector('.container__searchFields');
searchFieldContainer.innerHTML += searchFormHTML();
