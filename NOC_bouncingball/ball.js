var Ball = function(x, y) {
	this.position = new PVector(x, y);
};

Ball.prototype.display = function() {
	fill(255, 0, 0);
	ellipse(mouseX, mouseY, 50, 50);
};