const parksApiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json" 

const parkSearch = (parkSearchInput) => fetch(`
${parksApiBaseUrl}?${parkSearchInput}=Yes`,
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