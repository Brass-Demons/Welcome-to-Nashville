console.log("it works");

const ticketMasterBaseUrl = `https://app.ticketmaster.com/discovery/v2/`;

 
// const searchTicketMaster = searchGenre => fetch(`${ticketMasterBaseUrl}events.json?classificationName=music&dmaId=343&apikey=${concertKey}&genre`)
// .then(genre => genre.json())
// .then(parsedGenres => {
//     console.log("??", parsedGenres);
// })
// console.log("stuff", searchTicketMaster());


fetch(`${ticketMasterBaseUrl}events.json?classificationName=music&city=Nashville&apikey=${concertKey}&genre`)
    .then(genre => genre.json())
    .then(parsedGenres => {
    console.log(parsedGenres._embedded.events);
    })
// genre = parsedGenres._embedded.events[0].classifications[0].genre.name
// address = parsedGenres._embedded.events[0]._embedded.venues[0].address
// location = parsedGenres._embedded.events[0]._embedded.venues[0].name
// name = parsedGenres._embedded.events[0].name


// check your notes in notebook for pattern & think of what you're trying to accomplish