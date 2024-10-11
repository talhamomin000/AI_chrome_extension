// popup.js
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const word = urlParams.get("word");
    const definition = urlParams.get("definition");

    document.getElementById("word-title").textContent = word || "No word selected";
    document.getElementById("definition").textContent = definition || "No definition found";
});
