const cookie = document.querySelector("#cookie");
const btnAgain = document.querySelector("#btnAgain");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const luckyPhrases = [
  "Sorte é estar pronto quando a oportunidade vem.",
  "Sorte na vida é sentir a felicidade de viver cada momento.",
  "Sorte é reconhecer as boas oportunidades e saber aproveitá-las. 🍀",
  "Sorte é isto. Merecer e ter.",
  "Minha sorte é ter o teu abraço como recompensa para toda espera.",
  "A perseverança é a mãe da boa sorte.",
  "Seja merecedor da sorte e ela virá até você!",
  "Às vezes não conseguir o que você quer é uma tremenda sorte.",
  "Eu quero a sorte de um amor tranquilo.",
  "A sorte favorece a mente bem preparada.",
];

let randomLuckyPhrases = Math.floor(Math.random() * luckyPhrases.length);

cookie.addEventListener("click", handleInnerPhrase);
btnAgain.addEventListener("click", handleRandomPhrase);

/* Callbacks*/
function handleInnerPhrase() {
  toggleScreen();
  const phrase = document.querySelector(".note p");
  phrase.innerText = luckyPhrases[randomLuckyPhrases];
}

function handleRandomPhrase() {
  toggleScreen();
  randomLuckyPhrases = Math.floor(Math.random() * luckyPhrases.length);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
