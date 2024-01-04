function generatePoem(event) {
	event.preventDefault();

	new Typewriter("#poem", {
		strings: "Poem line",
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
