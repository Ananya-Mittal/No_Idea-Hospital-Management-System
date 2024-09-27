// services.js

// Function to handle login form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get the username and password from the form
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
  
    // Perform login validation (e.g., check against a database or API)
    // For demonstration purposes, we'll assume a successful login
    if (username === "admin" && password === "password") {
      // Redirect to the services page
      window.location.href = "services.html";
    } else {
      alert("Invalid username or password");
    }
  }
  
  // Add event listener to the login form
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);