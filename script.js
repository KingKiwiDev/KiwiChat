// Fixing potential issues with DOM element access
const urlParams = new URLSearchParams(window.location.search);
const usernamePart = urlParams.get('username');

if (usernamePart) {
    console.log("Username: " + usernamePart);
    const welcomeElement = document.getElementById('welcome');
    if (welcomeElement) {
        welcomeElement.textContent = "Welcome, " + usernamePart + "!";
    } else {
        console.error("Element with ID 'welcome' not found in the DOM.");
    }
} else {
    console.warn("No username found in the URL.");
}