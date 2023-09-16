function setActive(activeSlide = 2) {
	const slides = document.querySelectorAll(".slide");

	slides[activeSlide].classList.add("active");

	slides.forEach((slide) => {
		slide.addEventListener("click", () => {
			removeAction();
			slide.classList.add("active");
		});
	});

	function removeAction() {
		slides.forEach((slide) => {
			slide.classList.remove("active");
		});
	}
}

setActive(2);
