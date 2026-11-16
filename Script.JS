// MOBILE NAVIGATION
const menuToggle = document.getElementById(“menuToggle”);
const navLinks = document.getElementById(“navLinks”);

menuToggle.addEventListener(“click”, function () {
navLinks.classList.toggle(“active”);
});

// CLOSE MENU AFTER CLICKING A LINK
const navigationLinks = document.querySelectorAll(”.nav-links a”);

navigationLinks.forEach(function (link) {
link.addEventListener(“click”, function () {
navLinks.classList.remove(“active”);
});
});

// CURRENT YEAR IN FOOTER
const footer = document.querySelector(“footer”);

if (footer) {
const year = new Date().getFullYear();
footer.innerHTML = <p>© ${year} Yaya Mohammed. All Rights Reserved.</p> <p>Technology • Innovation • Digital Solutions</p>;
}

// WELCOME MESSAGE IN CONSOLE
console.log(“Welcome to Yaya Mohammed’s professional portfolio.”);
console.log(“Technology • Innovation • Digital Solutions”);
