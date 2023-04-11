import {TennisGame} from "./TennisGame";

let game = new TennisGame();
game.getScore('player1', 'player2', 9, 9);
console.log(game.score)
