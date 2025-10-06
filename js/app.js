/*---------------------------- Variables (state) ----------------------------*/

const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0
};

let timer = null;

let gameOver = false;


/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById('boredom-stat');

console.log('boredomStatEl', boredomStatEl)

const hungerStatEl = document.getElementById('hunger-stat');

console.log('hungerStateEl', hungerStatEl)

const sleepinessStatEl = document.getElementById('sleepiness-stat');

console.log('sleepinessStatEl', sleepinessStatEl)


const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep')


const gameMessageEl = document.getElementById('message');
console.log('gameMessageEl', gameMessageEl)

const resetBtnEl= document.querySelector('#restart');


/*-------------------------------- Functions --------------------------------*/

function init() {

state.boredom = 0;
state.hunger = 0;
state.sleepiness = 0;
gameOver = false;


timer = setInterval(runGame, 2000);
}
console.log('Initializing game...')

function checkGameOver() {

    if (
    state.boredom >= 10  ||
    state.hunger >= 10  ||
    state.sleepiness >= 10  
    ) {
        gameOver = true;
    }
}
 


function runGame() {
    updateStates();
    checkGameOver();
    render();

}
console.log('The game is running!')

function render() {

}
console.log('Rendering game state...')


    /*----------------------------- Event Listeners -----------------------------*/

function updateStates() {

state.boredom +=Math.floor(Math.random() * 4);
state.hunger += Math.floor(Math.random() * 4);
state.sleepiness += Math.floor(Math.random() * 4);

}

function render() {
boredomStatEl.textContent = state.boredom;
hungerStatEl.textContent = state.hunger;
sleepinessStatEl.textContent = state.sleepiness;
  if (gameOver) {
    clearInterval(timer);
    gameMessageEl.textContent = "Game Over! Your pet needs too much care."
  }

}
console.log()

function playBtnClick() {
    console.log("clicked")
    state.boredom = 0;
    render()


playBtnEl.addEventListener('click', playBtnClick);
}

function hunger() {
    state.hunger = 0;
    render()


feedBtnEl.addEventListener('click', hunger);
}

function sleepiness() {
    state.sleepiness = 0;
    render()


sleepBtnEl.addEventListener('click', sleepiness);
}



function init() {
   resetBtnEl.classList.add('hidden');
   gameMessageEl.classList.add('hidden');


   state.hunger = 0;
   state.boredom = 0;
   state.sleepiness = 0;

   render()
}

resetBtnEl.addEventListener('click', init);






// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
