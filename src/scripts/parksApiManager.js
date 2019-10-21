const parksApiBaseUrl = https://data.nashville.gov/resource/74d7-b74t.json 

const parkSearch = searchInput => fetch(`${parksApiBaseUrl}?$$app_token=${parkKey}&q=${searchInput}`)
.then(response => response.json())
