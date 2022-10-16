(() => {
	const mobileMenu = document.querySelector("[data-menu]");
	const menuBtn = document.querySelector("[data-menu-button]");
	const bodyLock = document.querySelector("[data-body-lock]");

	const toggleMenu = () => {
		const isMenuOpen = menuBtn.getAttribute("aria-expanded") === "true" || false;
		menuBtn.setAttribute("aria-expanded", !isMenuOpen);
		mobileMenu.classList.toggle("is-open");
		menuBtn.classList.toggle("is-open");
		bodyLock.classList.toggle("locked");
	};

	menuBtn.addEventListener("click", toggleMenu);

	window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
		if (!e.matches) return;
		mobileMenu.classList.remove("is-open");
		menuBtn.classList.remove("is-open");
		bodyLock.classList.remove("locked");
		menuBtn.setAttribute("aria-expanded", false);
	});
})();
