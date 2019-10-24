// render initial page, which includes title and search fields on the DOM
const renderInitialPage = () => {
	const searchFieldContainer = document.querySelector('.container__searchFields');
	// no += in this case since we can replace what we currently have in that container, which is currently empty
	searchFieldContainer.innerHTML = searchFormHTML();
};