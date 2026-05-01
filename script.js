// Get users from "backend" (localStorage)
let users = JSON.parse(localStorage.getItem("users")) || [];

// SIGNUP FUNCTION
function signup() {
    let u = document.getElementById("signupUser").value;
    let p = document.getElementById("signupPass").value;

    if (u === "" || p === "") {
        alert("Please fill all fields");
        return;
    }

    // check if user already exists
    let exists = users.find(x => x.user === u);
    if (exists) {
        alert("User already exists. Please login.");
        return;
    }

    // add new user
    users.push({ user: u, pass: p });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    window.location = "login.html";
}

// LOGIN FUNCTION
function login() {
    let u = document.getElementById("loginUser").value;
    let p = document.getElementById("loginPass").value;

    let found = users.find(x => x.user === u && x.pass === p);

    if (found) {
        alert("Login successful");
        // future: redirect to home page
        // window.location = "home.html";
    } else {
        let userExists = users.find(x => x.user === u);
        if (!userExists) {
            alert("User not found. Please sign up first.");
        } else {
            alert("Wrong password");
        }
    }
}
