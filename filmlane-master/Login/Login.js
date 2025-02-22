let form = document.getElementById("loginForm");

function login(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check for valid username and password
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            alert("Login successful");
            // Redirect to the desired page after successful login
            window.location.href = "../Home/home.html"; // Change this to your target page
            return;
        }
    }

    alert("Wrong username or password");
}

// Attach the login function to the form's submit event
form.addEventListener("submit", login);
