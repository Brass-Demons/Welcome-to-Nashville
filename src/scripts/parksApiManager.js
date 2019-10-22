const parksApiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json" 

const parkSearch = (searchInput) => fetch(`
${parksApiBaseUrl}?${searchInput} HTTP/1.1`,
    {
        "headers": {
            "Accept": "application/json",
            "X-App-Token": "P7SZS21rPkPvHmuIvW4glESQf"
        }
    })
    .then(response => response.json());



// $$app_token=${parkKey}?
// playground=Yes
// 
// ${parkKey}
// searchInput event that goes in parenthesis