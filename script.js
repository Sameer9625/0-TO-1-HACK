// Login Modal functionality
document.querySelector('a[href="#login"]').addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("login").classList.remove("hidden");
});

document.getElementById("closeLogin").addEventListener("click", function() {
  document.getElementById("login").classList.add("hidden");
});

// Handle Login Form Submission
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    alert(`Welcome, ${username}!`);
    document.getElementById("login").classList.add("hidden");
  } else {
    alert("Please enter both username and password.");
  }
});

// Handle Contact Form Submission
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name && email && message) {
    alert("Thank you for reaching out! We'll get back to you soon.");
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill in all fields.");
  }
});
