console.log("it works")
const ticketMasterBaseUrl = `https://app.ticketmaster.com/discovery/v2/`


const API = {
    myData: (searchAPI) => {
        return fetch(`${ticketMasterBaseUrl}events.json?classificationName=music&dmaId=343&apikey=FgeUGHIQw12khGk9ukP4WamWvpnoeBzC`)
.then(genres => genres.json())
.then(parsedGenres => {
    console.table(parsedGenres);
})}}