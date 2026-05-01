function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  // Save login status
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", email);

  window.location.href = "index.html";
}

function guestLogin() {
  localStorage.setItem("isLoggedIn", "guest");
  window.location.href = "index.html";
}
