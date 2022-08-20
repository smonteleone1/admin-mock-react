async function postData() {
    const url = "https://introspectplantoken.int.myuhc.com/api/introspectplantokenservice";
    const request = {
        "planToken":"c6d88df4-75de-4df1-a6af-222649b2a7eb",
        "accountId":"96254d3a-bc51-4cbd-89a3-249185537e65",
        "authorization":"Basic bXl1aGNfc3RhbmRhbG9uZV9kZXNrdG9wOjMzM2FhZjY3NDhkNzc2NmExMjM5NjVhOWVjMmZmMDU4NWM1MzViOTQxMzczYjY2NjNiMzUxYjBkMDRhMjk0NDA="
    };    
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request) 
    });
    const data =  response.json();
    console.log(data);
}


fetch("https://introspectplantoken.int.myuhc.com/api/introspectplantokenservice", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "planToken":"c6d88df4-75de-4df1-a6af-222649b2a7eb",
    "accountId":"96254d3a-bc51-4cbd-89a3-249185537e65",
    "authorization":"Basic bXl1aGNfc3RhbmRhbG9uZV9kZXNrdG9wOjMzM2FhZjY3NDhkNzc2NmExMjM5NjVhOWVjMmZmMDU4NWM1MzViOTQxMzczYjY2NjNiMzUxYjBkMDRhMjk0NDA="
}),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

