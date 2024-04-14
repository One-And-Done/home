document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // You can handle form submission here, like sending data to a server
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  });
});
