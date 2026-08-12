function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Śpieszmy się kochać ludzi, tak szybko odchodzą, zostaną po nich buty i telefon głuchy",
    autoStart: true,
    delay: 4,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
