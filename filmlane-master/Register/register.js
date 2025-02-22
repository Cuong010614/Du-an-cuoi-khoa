let form = document.getElementById('registrationForm');
let users = [];

function signUp(e) { 
    e.preventDefault();

    let fullname = document.getElementById('fullname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let gender = document.getElementById('gender').value;

    // Validate inputs
    if (fullname.length < 3) {
        alert('Full Name must be at least 3 characters');
        return;
    }
    if (username.length < 3) {
        alert('Username must be at least 3 characters');
        return;
    }
    if (password !== confirmPassword) {
        alert('Password does not match');
        return;
    }
    if (!gender) {
        alert('Please select your gender');
        return;
    }

    // Check for existing users
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username) {
                alert('Username already exists');
                return;
            }
        }
    }

    // Add new user
    users.push({
        fullname: fullname,
        username: username,
        email: email,
        password: password,
        gender: gender
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    window.location.href = '../Login/Login.html';
}

form.addEventListener('submit', signUp);
