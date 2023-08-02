const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const loginForm = document.querySelector("#loginModal form");
const signupForm = document.querySelector("#signupModal form");

if (loginModal) {
    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "flex";
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        loginModal.style.display = "none";
    });
}

if (signupModal) {
    signupBtn.addEventListener("click", () => {
        signupModal.style.display = "flex";
    });

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        signupModal.style.display = "none";
    });
}

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (loginModal) {
            loginModal.style.display = "none";
        }
        if (signupModal) {
            signupModal.style.display = "none";
        }
    });
});

// JavaScript
function toggleDarkTheme() {
    document.body.classList.toggle("dark-mode");
  }
  