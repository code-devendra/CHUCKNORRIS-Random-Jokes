const jokeBox = document.querySelector(".joke");
const generateBtn = document.querySelector(".generate-btn");

generateJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      jokeBox.textContent = data.value;
    })
    .catch((err) => {
      console.log(err);
    });
};

generateBtn.addEventListener("click", generateJoke);
