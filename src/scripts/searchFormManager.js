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
		<input type="text" name="parks" placeholder="parks by feature">
		<button class='searchButton parks__searchButton'>SEARCH</button>
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
		<input type="text" name="concerts" placeholder="concerts by genre">
		<button class='searchButton concerts__searchButton'>SEARCH</button>
	</fieldset>
	`;
};