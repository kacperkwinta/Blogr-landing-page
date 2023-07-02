"use strict";

// dropdown
document.querySelector("body").addEventListener("click", function (e) {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	if (!isDropdownButton && e.target.closest("[data-dropdown]")) return;

	let currentDropdown;

	if (isDropdownButton) {
		currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
        console.log('clicked');
	}

	document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
		if (dropdown === currentDropdown) return;
		dropdown.classList.remove("active");
	});
});

// mobile navigation
const mobileMenuBtn = document.querySelector(".mobile-nav-btn");
const mobileMenuHamburger = document.querySelector(".mobile-nav-hamburger");
const mobileMenuClose = document.querySelector(".mobile-nav-close");
const navContainer = document.querySelector(".nav-container");

mobileMenuBtn.addEventListener("click", function () {
	navContainer.classList.toggle("visible");
	mobileMenuHamburger.classList.toggle("hidden");
	mobileMenuClose.classList.toggle("hidden");
});

// change arrow icons in mobile menu
window.addEventListener("resize", function () {
	if (window.innerWidth <= 900) {
		const images = document.querySelectorAll(".nav-dropdown-arrow");
		images.forEach(function (image) {
			image.src = "images/icon-arrow-dark.svg";
		});
	} else {
		const images = document.querySelectorAll(".nav-dropdown-arrow");
		images.forEach(function (image) {
			image.src = "images/icon-arrow-light.svg";
		});
	}
});
