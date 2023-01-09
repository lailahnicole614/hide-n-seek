// import functions and grab DOM elements
const shedButtonEl = document.getElementById("shed-button");
const treeButtonEl = document.getElementById("tree-button");
const boulderButtonEl = document.getElementById("boulder-button");

const shedContainer = document.getElementById("shed-container");
const treeContainer = document.getElementById("tree-container");
const boulderContainer = document.getElementById("boulder-container");

const correctGuessesEl = document.getElementById("correct-guesses");
const incorrectGuessesEl = document.getElementById("incorrect-guesses");
const totalGuessesEl = document.getElementById("total-guesses");

/* State */
let currentHidingPlace = null;
let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

/*Events*/
shedButton.addEventListener("click", () => {
  // get a random item to call the 'correct spot'
  // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

treeButton.addEventListener("click", () => {

    getRandomHidingSpot();

  treeContainer.classList.remove("face");
  boulderContainer.classList.remove("face");
  shedContainer.classList.remove("face");

  const places = ['tree','boulder','shed']
  // get a random item to call the 'correct spot'
  const index = Math.floor(Math.random() * places.length);


    correctPlace = places [index];
    const correctSectionEl.classList.add('face');

    (correctPlace === 'tree') 
    correctGuesses++; 
    incorrectGuesses++;
    totalGuesses++;

    correctGuessesEl.textContent = correctGuesses;
    incorrectGuessesEl.textContent = incorrectGuesses;
    totalGuessesEl.textContent = totalGuesses;

  // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButton.addEventListener("click", () => {
  // get a random item to call the 'correct spot'
  // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work

  handleGuess('button');
});

  // initialize state
  const hidingPlaces = ["tree", "shed", "boulder"];

  const index = Math.floor(Math.random() * hidingPlaces.length);

  // use the random index above and the array of hidingPlaces to get a random hiding place string
const hidingPlaceString = hidingPlaces[index];

  // return that random hiding place string

function handleGuess(userGuess, correctSpot) {
  // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
  // we can do that by removing the .face class from all containers
  // then increment the guesses
  // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
  const correctHidingSpot = document.getElementById('${correctSpot)-container')
  // then add the .face css class to that element so that the face shows up
    correctHidingSpot.classList.add('face')
    console.log(correctHidingSpot);
  // then if the user guess is correct, increment the correct guesses
  (userGuess === correctHidingSpot) {
    correctGuesses++; 
  }
  // update the DOM to show the new value of wins, losses and total guesses to the user
}
