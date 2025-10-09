/*---------------------------- Variables (state) ----------------------------*/

let state = {

    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer;
let gameOver = false;


/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');



const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');




const gameMessageEl = document.getElementById('message');

const resetBtnEl = document.getElementById('restart');



/*-------------------------------- Functions --------------------------------*/



function init() {
   
    resetBtnEl.classList.add("hidden");
    gameMessageEl.classList.add("hidden");
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    timer = setInterval(runGame, 2000);
    gameOver = false;
    render();

}

function runGame() {
    updateStates();
    checkGameOver();
    render();
}


function render() {

    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    if (gameOver) {
        gameMessageEl.textContent = "Game Over! Oh no! You lose!"
        resetBtnEl.classList.remove('hidden');
        gameMessageEl.classList.remove('hidden');
        clearInterval(timer);


    }
}

function updateStates() {
    // console.log('')
    function getRandomIncrement() {
        return Math.floor(Math.random() * 4);
    }
    state.boredom += getRandomIncrement();
    state.hunger += getRandomIncrement();
    state.sleepiness += getRandomIncrement();
    //console.log('boredom', state.boredom)


}
function checkGameOver() {

    if (
        state.boredom >= 10 ||
        state.hunger >= 10 ||
        state.sleepiness >= 10
    ) {
        gameOver = true;
    }
}


function playBtnClick() {
    state.boredom = 0;
    render();

}
playBtnEl.addEventListener('click', playBtnClick);


function feedBtnClick() {
    state.hunger = 0;
    render();

}
feedBtnEl.addEventListener('click', feedBtnClick);


function sleepBtnClick() {
    state.sleepiness = 0;
    render();
}
sleepBtnEl.addEventListener('click', sleepBtnClick);



init()

resetBtnEl.addEventListener('click', restartGame );

function restartGame() {

    clearInterval(timer);
    gameOver = false;
    init();
}





// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
