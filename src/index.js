function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let promptInputElement = document.querySelector("#prompt-input");
  let apiKey = "tf832eb3fefbe69fb93044bae6bf2o34";
  let prompt = `Generate a Polish poem about ${promptInputElement.value}`;
  let context =
    "You are a skilled poet who writes beautiful and short poems, maximum 4 lines, in Polish. Your mission is to generate short, 4 line poems. Make sure to use user instructions. Write a poems in style of Wisawy Szymborskiej. The poem shoud be in a basic HTML format. separate each line with a </br> tag at the end of each line. The poem should be in Polish. Do not include any other text or explanation, only the poem itself, do not include html or br in the text. At the end of the text, NOT the beginning, sign it with 'SheCodes AI' in strong  ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
