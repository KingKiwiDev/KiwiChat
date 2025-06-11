function enterPassword() {
    const password = "Kiwi123";
    const enteredPassword = document.getElementById("password-input").value;
    print()
    if (enteredPassword === password) { // Use strict equality for comparison
        document.getElementById("password-div").style.display = "none";
        document.getElementById("login-div").style.display = "block";
    } else {
        alert("Incorrect password. Please try again."); // Add feedback for incorrect password
    }
}