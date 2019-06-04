const MovingObject = require("./moving_object");
 
function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 4;


Game.prototype.addAsteroids = function () {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
    }
}

Game.prototype.randomPosition = function () {
    let x = Math.floor(Math.random() * Game.DIM_X + 1);
    let y = Math.floor(Math.random() * Game.DIM_Y + 1);
    return [x, y];
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 500, 500);
    this.asteroids.forEach(el => {
        el.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
   
}

Game.prototype.wrap = function(pos) {
 
    if (pos[0] > 500) {
        pos[0] = 0;
    }
    if (pos[0] < 0) {
        pos[0] = 500;
    }
    if (pos[1] > 500) {
        pos[1] = 0;
    }
    if (pos[1] < 0) {
        pos[1] = 500;
    }
    return pos;
}

Game.prototype.checkCollisions = function() {
    for (let i = 0; i < this.asteroids.length; i++) {   
        for (let j = i + 1; j < this.asteroids.length; j++) { 
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                alert("COLLISION");
                this.remove(i, j);
            }
        }
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function (a1, a2) {
    // this.asteroids.splice( ,1)

    let arr = [];

    for (let i = 0; i < this.asteroids.length; i++) {
        if (i !== a1 && i !== a2) {
            arr.push(this.asteroids[i])
        }
    }

    this.asteroids = arr;

}



module.exports = Game;