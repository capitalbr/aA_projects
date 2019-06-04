const Game = require("./game");

function GameView(ctx) {
    this.game = new Game;
    this.drawing = ctx;
}

GameView.prototype.start = function () {
    let that = this;
    setInterval(function () {
        that.game.step();
        that.game.draw(that.drawing);
    }, 20);
}


module.exports = GameView;