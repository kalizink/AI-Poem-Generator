function displayPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();
	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";
	let context =
		"you are a poem expert and love to write short poems. Please generate a four line poem in basic html format. make sure to follow the user instructions. sign the poem with: <strong> -SheCodes AI </strong> on the last line";
	let prompt = `user instructions: generate a poem about ${instructionsInput.value}`;
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<span class="blink">⏳ Generating...</span>`;

	axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
