const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let editedPlayer = 0;
let selectplayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const player1 = document.getElementById("edit-player-1");
const player2 = document.getElementById("edit-player-2");

const player = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const cancel_btn = document.getElementById("cancel-btn");

//const input_name = document.getElementById("player-name");
//const confirm_btn = document.getElementById("confirm-btn")

const form_submit = document.getElementById("form-submit");
const p = document.getElementById("form-error");
const newGame = document.getElementById("new-game");
const gameAreaElement = document.getElementById("active-game");
const gamefields = document.getElementById("game-board"); /*this will return the element full of array */
const gamefieldsArray = Array.from(gamefields.children);

//console.log(gamefields);
let activePlayer = document.getElementById("active-player");
const gameOver = document.getElementById("game-over");

newGame.addEventListener("click", start_new_game);
player1.addEventListener("click", overlay);
player2.addEventListener("click", overlay);
cancel_btn.addEventListener("click", can_button);
backdrop.addEventListener("click", can_button);
//confirm_btn.addEventListener("click",input_confirm)
form_submit.addEventListener("submit", submit_Form);

for (const gamefield of gamefieldsArray) {
  gamefield.addEventListener("click", selectgamefeild);
}
