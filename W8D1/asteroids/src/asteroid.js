const Util = require("./util")
const MovingObject = require("./moving_object")

function Asteroid (options) {
    options = options || {};
    options.color = "grey";
    options.radius = 10;
    options.pos = options.pos
    options.vel = Util.randomVec(5);
    
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;