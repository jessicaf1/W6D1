function Surrogate() {};
Surrogate.prototype = MovingObject.prototype;
Ship.prototype = new Surrogate();
Ship.prototype.constructor = Ship;

function Surrogate1() { };
Surrogate1.prototype = MovingObject.prototype;
Asteroid.prototype = new Surrogate1();
Asteroid.prototype.constructor = Asteroid;


MovingObject.prototype.floater = function() {
    console.log(`I am floating in the ocean`);
}