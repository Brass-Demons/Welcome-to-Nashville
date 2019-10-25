console.log("hi")
// debugger
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

// const makeSearchForm = () => {
  // const parkSearchList = `
  //   <fieldset>
  //   <select id ="parks-dropdown">
  //   <option value="" disabled selected hidden>parks by feature</option>
  //   <option value="dog_park">Dog Park</option>
  //   <option value="hiking_trails">Hiking Trails</option>
  //   <option value="playground">Playground</option>
  //   <option value="basketball_courts">Basketball Courts</option>
  //   <option value="swimming_pool">Swimming Pool</option>
  //   </select>
  //   <button id="parks-search-button">Button</button>
	// 	</fieldset>
  //   `
  // console.log(searchForm)
  //Taking the search form and rendering it to the DOM
  // const parkSearchContainerDiv = document.querySelector(".container__searchFields");
  // parkSearchContainerDiv.innerHTML = parkSearchList;
// };
//This will go on the main JS page in the end.
// makeSearchForm();





  const parkResultsToHtml = (parkResult) => {
  // parkResult.mapped_location.split()
  //   console.log(parkResult.mapped_location)
    return `<ul>
  <li id = "${parkResult.park_name}">${parkResult.park_name}: ${parkResult.mapped_location.human_address}<button id="${parkResult.park_name}">Save</button></li></ul>`;

  };
  //This function does the following:
  //1. Grabs the container on HTML that the search results will go in
  //2. iterates over each search result and passes them through the parkRestultsToHtml function to convert it to a string with interpolation
  //3. Comes back and sticks the string in that ol. 
  const parkDisplay = (parkSearchResultsArray) => {
    let parksHtml = ""
    const parkResultsOnDom = document.querySelector(".container__results")
    parkSearchResultsArray.forEach(park => {
      parksHtml += parkResultsToHtml(park)
      parkResultsOnDom.innerHTML = parksHtml;
      // attachEventListenerToSaveButton(park)
    });

    //FUNCTION FOR EVENT LISTENER ON SAVE BUTTON
    //This needs to take whichever save button is clicked, and take that stuff and put it in the li of the ininerary list
  }

  // const saveThisParkButton = () => {
  //   const itineraryContainer = document.querySelector(`${["address"]}`)
  //   itineraryContainer.innerHTML = `<li id = "${parkResult.park_name}">${parkResult.park_name}
  //   `
  // };
  //This is the event listener for the "SAVE" button.
  //The function needs to take that selected park and stick it in the DOM on the <li>Park:</li> part of the page.
  const whenSaveButtonIsClicked = () => {
  const saveButton = document.querySelector("#parks-save-button")
  saveButton.addEventListener("click", saveThisParkButton)
  }