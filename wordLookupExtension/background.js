// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const appId = "880c9479";  // Your Application ID
    const appKey = "409a6a340efc9f82f4bc8322cf814931";  // Your Application Key
    const word = message.word;
    const apiUrl = `https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-us/${word}`;

    fetch(apiUrl, {
        method: "GET",
        headers: {
            "app_id": appId,
            "app_key": appKey
        }
    })
    .then(response => response.json())
    .then(data => {
        let definition = data?.results[0]?.lexicalEntries[0]?.entries[0]?.senses[0]?.definitions[0] || "No definition found";
        chrome.action.setPopup({ popup: `popup.html?word=${word}&definition=${definition}` });
    })
    .catch(error => {
        console.error("Error fetching definition:", error);
    });
});
