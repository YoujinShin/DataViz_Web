
var Mover = function(m, x, y) {
	this.position = new PVector(x, y);
	this.velocity = new PVector(0, 0);
	this.acceleration = new PVector(0, 0);
	this.mass = m;
};

Mover.prototype.applyForce = function(force) {
	var f = PVector.div(force, this.mass);
	this.acceleration.add(f);
};

Mover.prototype.update = function() {
	this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
	this.acceleration.mult(0);
};

Mover.prototype.display = function() {
	stroke(0);
	strokeWeight(2);
	fill(255, 127);
	ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

Mover.prototype.calculateAttraction = function(m) {
	var force = PVector.sub(this.position, m.position);
	var distance = force.mag();

	distance = constrain(distance, 5.0, 25.0);
	force.normalize();

	var strength = (G * this.mass * m.mass) / (distance * distance);
	force.mult(strength);
	return force;
};

// Mover.prototype.checkEdges = function() {
// 	if(this.position.x > width) {
// 		this.position.x = width;
// 		this.velocity.x *= -1;
// 	} else if(this.position.x < 0) {
// 		this.position.x = 0;
// 		this.position.x *= -1;
// 	}

// 	if(this.position.y > height) {
// 		this.position.y = height;
// 		this.velocity.y *= -1;
// 	}
// };