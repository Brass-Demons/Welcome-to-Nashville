console.log("hi")
//Order of JS files in Jisie's code:
//1. api keys--done. IN API KEYS FILE.

//2. api manager--done? searchRecipes is the variable with the fetch call.

//3. event manager--

//4. search form manager--done. HTML string and renders it to DOM.

//5. search results manager--rendering
//the search results to the DOM using a string that
//will become HTML--DONE. 

//6. main js





//MAKING SEARCH FORM IN AN HTML STRING.

const makeSearchForm = () => {
  const parkSearchList = `
    <fieldset>
    <select id ="parks">
    <option value="" disabled selected hidden>parks by feature</option>
    <option value="dog_park">Dog Park</option>
    <option value="hiking_trails">Hiking Trails</option>
    <option value="playground">Playground</option>
    <option value="basketball_court">Basketball Courts</option>
    <option value="swimming_pool">Swimming Pool</option>
    </select>
    <button id="park-search-button">Button</button>
		</fieldset>
    `
  // console.log(searchForm)
  //Taking the search form and rendering it to the DOM
  const parkSearchContainerDiv = document.querySelector("#search");
  parkSearchContainerDiv.innerHTML = parkSearchList;
};
//This will go on the main JS page in the end.
makeSearchForm();

//Grabbing whatever is in the option tag of the dropdown menu, putting the value of that in the searchInput variable
const searchHandler = () => {
  debugger
  const parkSearchInput = document.querySelector("option")
  console.log("user input from dropdown", parkSearchInput.value);
  //parkSearch is the function that fetches the data.
  parkSearch(parkSearchInput.value)
    .then(response => {
      console.log(response.parks)
      searchInput.value = ""
    })
};

// const attachEventListenerToSearchButton = () => {
  let searchButton = document.querySelector("#park-search-button")
  console.log(searchButton)
  searchButton.addEventListener("click", searchHandler);
//SEARCH RESULTS MANAGER .JS FILE
//I need the park_name, human_address
//human_address IS AN OBJECT. But that is okay, because I can target the thingy 

const parkResultsToHtml = (parkResult) => {
  `
  <li>${parkResult.park_name}: ${parkResult.mapped_location.human_address.address}<button id="parks-button">Save</button></li>
`
};
//This function does the following:
//1. Grabs the container on HTML that the search results will go in
//2. iterates over each search result and passes them through the parkRestultsToHtml function to convert it to a string with interpolation
//3. Comes back and sticks the string in that ol. 
const parkDisplay = (parkSearchResults) => {
  let parksHtml = ""
  const parkResultsOnDom = document.querySelector("ol")
  parkSearchResults.forEach(park => {
    parksHtml += parkResultsToHtml(park)
    parkResultsOnDom.innerHTML = parksHtml;
  });

  //FUNCITON FOR EVENT LISTENER ON SAVE BUTTON
  const saveThisParkButton = () => {
    const buttonStuff = document.querySelector("#parks-button")
  };
  //This is the event listener for the "SAVE" button.
  //The function needs to take that selected park and stick it in the DOM on the <li>Park:</li> part of the page.
  const whenSaveButtonIsClicked = () => {
    const saveButton = document.querySelector("button")
    saveButton.addEventListener("click", saveThisParkButton);
  };
}


