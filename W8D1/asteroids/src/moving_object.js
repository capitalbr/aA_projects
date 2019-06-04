const Game = require("./game")

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;    
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
};

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let changeX = this.pos[0] - otherObject.pos[0];
    let changeY = this.pos[1] - otherObject.pos[1];
    let distance = Math.sqrt((changeX*changeX) + (changeY*changeY));
    
    if (distance <= (this.radius + otherObject.radius)) {
        return true;
    } else {
        return false;
    }
}

module.exports = MovingObject;