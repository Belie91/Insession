document.addEventListener("DOMContentLoaded", function () {
  // Ensure the DOM is fully loaded before accessing elements
  const logoutBtn = document.getElementById("logout");
  const loginForm = document.getElementById("lecturerLoginForm");

  // Check if logoutBtn exists before adding an event listener
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Clear any session data
      localStorage.clear(); // or sessionStorage.clear();

      // Redirect to login page
      window.location.href = "/Assets/pages/lecturer/lecturelogin.html"; // Update path if needed
    });
  }

  // Add event listener for the login form
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Dummy credentials (replace with real check later)
      const validUsername = "lecturer1";
      const validPassword = "pass";

      if (username === validUsername && password === validPassword) {
        // Save session info if needed
        localStorage.setItem("lecturerLoggedIn", "true");

        // Redirect to dashboard
        window.location.href = "/Assets/pages/lecturer/lecturerdashboard.html";
      } else {
        document.getElementById("loginError").style.display = "block";
      }
    });
  }
});
