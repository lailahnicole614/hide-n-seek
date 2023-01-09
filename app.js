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
  treeContainer;
  // get a random item to call the 'correct spot'
  // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButton.addEventListener("click", () => {
  // get a random item to call the 'correct spot'
  // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

function getRandomHidingSpot() {
  // initialize state
  const hidingPlaces = ["tree", "shed", "boulder"];

  const index = Math.floor(Math.random() * hidingPlaces.length);

  // use the random index above and the array of hidingPlaces to get a random hiding place string

  // return that random hiding place string
}

function handleGuess(userGuess, correctSpot) {
  // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
  // we can do that by removing the .face class from all containers
  // then increment the guesses
  // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
  // then add the .face css class to that element so that the face shows up
  // then if the user guess is correct, increment the correct guesses
  // update the DOM to show the new value of wins, losses and total guesses to the user
}
