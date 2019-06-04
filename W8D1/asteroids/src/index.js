console.log("Webpack is working!");


const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js")
const GameView = require("./game_view.js")
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    window.ctx = ctx;
    let newGame = new GameView(ctx);
    newGame.start();
});