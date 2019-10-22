console.log("hi")

//This function is making the search form in HTML. 
const makeSearchForm = () => {
    const searchForm = `
    <option value="" disabled selected hidden>parks by feature</option>
    <option value="dog-park">Dog Park</option>
    <option value="hiking">Hiking Trails</option>
    <option value="playground">Playground</option>
    <option value="basketball">Basketball Courts</option>
    <option value="swimming-pool">Swimming Pool</option>

    `
    // console.log(searchForm)
  //This section is taking the search form and rendering it to the DOM in a section with the id of parks.
    const parkContainerDiv = document.querySelector("#parks")
    parkContainerDiv.innerHTML = searchForm;
  }

  makeSearchForm()
