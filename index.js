// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page refresh

    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (username === "" || password === "") {
      alert("⚠️ Please enter both username and password!");
      return;
    }

    // Example: Dummy login check
    if (username === "admin" && password === "1234") {
      alert("✅ Login successful! Welcome " + username);
      // you can redirect: window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid username or password");
    }
  });
});
