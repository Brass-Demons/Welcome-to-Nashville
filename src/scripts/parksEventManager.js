//This function is making the search form in HTML. 
const buildAndAppendSearchForm = () => {
    const searchForm = `
    <select name="park-feature" id="park-feature">
    <option value="dog-park">Dog Park</option>
    <option value="hiking">Hiking Trails</option>
    <option value="playground">Playground</option>
    <option value="basketball">Basketball Courts</option>
    <option value="swimming-pool">Swimming Pool</option>
</select>
    `
    // console.log(searchForm)
  //This section is taking the search form and rendering it to the DOM in a section with the id of container. . 
    const parkContainerDiv = document.querySelector("#parks")
    parkContainerDiv.innerHTML = searchForm
  }

