
function Particle(position) {
	this.acceleration = new PVector(0, 0.05);
	this.velocity = new PVector(random(-1, 1), random(-1, 0));
	this.position = position.get();
	this.lifespan = 255.0;
}

Particle.prototype.run = function() {
	this.update();
	this.display();
}

Particle.prototype.update = function() {
	this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
	this.lifespan -= 2;
}

Particle.prototype.display = function() {
	stroke(255, this.lifespan);
	strokeWeight(2);
	fill(127, this.lifespan);
	ellipse(this.position.x, this.position.y, 12, 12);
}

Particle.prototype.isDead = function() {
	if(this.lifespan < 0.0) {
		return true;
	} else {
		return false;
	}
}