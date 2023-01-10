// import functions and grab DOM elements
const shedButtonEl = document.getElementById('shed-button');
const treeButtonEl = document.getElementById('tree-button');
const boulderButtonEl = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const correctGuessesEl = document.getElementById('wins');
const incorrectGuessesEl = document.getElementById('losses');
const totalGuessesEl = document.getElementById('total');

/* State */
let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

/*Events*/
shedButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('shed', correctSpot);
    // get a random item to call the 'correct spot'

    //handleGuess('shed');
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

treeButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('tree', correctSpot);
    // get a random item to call the 'correct spot'
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    // get a random item to call the 'correct spot'
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('boulder', correctSpot);
});

function getRandomHidingSpot() {
    const places = ['tree', 'boulder', 'shed'];

    const index = Math.floor(Math.random() * places.length);
    const correctSpot = places[index];
    return correctSpot;
}
function handleGuess(userGuess, correctSpot) {
    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    // we can do that by removing the .face class from all containers
    // then increment the guesses
    totalGuesses++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    const correctHidingSpot = document.getElementById(
        `${correctSpot}-container`
    );

    // then add the .face css class to that element so that the face shows up
    correctHidingSpot.classList.add('face');
    // then if the user guess is correct, increment the correct guesses

    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    // update the DOM to show the new value of wins, losses and total guesses to the user

    totalGuessesEl.textContent = totalGuesses;
    correctGuessesEl.textContent = correctGuesses;
    incorrectGuessesEl.textContent = totalGuesses - correctGuesses;
}
