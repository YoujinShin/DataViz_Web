var Liquid = function(x, y, w, h, c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;
};

// Is the mover in the liquid?
Liquid.prototype.contains = function(m) {
	var l = m.position;
	return l.x > this.x && l.x < this.x + this.w &&
	       l.y > this.y && l.y < this.y + this.h;
};

// Calculate drag force
Liquid.prototype.calculateDrag = function(m) {
	var speed = m.velocity.mag();
	var dragMagnitude = this.c * speed * speed;

	var dragForce = m.velocity.get();
	dragForce.mult(-1);

	dragForce.normalize();
	dragForce.mult(dragMagnitude);
	return dragForce;
};

Liquid.prototype.display = function() {
	noStroke();
	fill(50);
	rect(this.x, this.y, this.w, this.h);
};