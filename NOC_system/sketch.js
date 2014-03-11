
var systems = [];

function setup() {
	createGraphics(640, 360);
}

function draw() {
	background(0);
	
	for(var i = 0; i < systems.length; i++) {
		systems[i].addParticle();
		systems[i].run();
	}

	fill(255);
	stroke(255);
	strokeWeight(1);
	textSize(16);
	text("click to add particle systems", 10, height -30);
}

function mousePressed() {
	systems.push(new ParticleSystem(1, new PVector(mouseX, mouseY)));
}