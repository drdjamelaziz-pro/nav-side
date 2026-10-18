// SIDEBA BUTTON
////////////////

const menuToggle = document.querySelector("#menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", function () {
	sidebar.classList.toggle("active");
})


// NAVBAR BUTTON
////////////////
const navbarMenuBtn = document.querySelector("#navbar-menu-btn");
const navbarLinksContainer = document.querySelector(".links-container");

navbarMenuBtn.addEventListener("click", function () {
    const isOpen = navbarLinksContainer.classList.toggle("navbar-open");

    navbarMenuBtn.setAttribute("aria-expanded", isOpen);
});

