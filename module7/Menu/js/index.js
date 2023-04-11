// Define variables
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

// Toggle menu visibility when menu toggle button is clicked
menuToggle.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    menu.setAttribute("aria-hidden", expanded);
});

// Close menu when a link is clicked
const links = menu.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", false);
        menu.setAttribute("aria-hidden", true);
    });
}
