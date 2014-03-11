
function ParticleSystem(num, index) {
	this.particles = [];
	this.num = num;
	this.index = index; // from 0 to 7
	for(var i = 0; i < num; i++) {
		this.particles.push(new Particle());
	}

	// about axis
	var gap = width/18;
	this.tx = map(this.index+1, 0, 9, 0, width);
	this.ty = height*0.6 + 50;

	this.pos_axis = new PVector(0, this.ty);
	this.tpos_axis = new PVector(this.tx - gap, this.ty);

	this.selected = false;
}

ParticleSystem.prototype.update = function() {
	for(var i = 0; i < this.particles.length; i++) {
		var p = this.particles[i];
		p.update();
	}
}

ParticleSystem.prototype.render = function() {
	for(var i = 0; i < this.particles.length; i++) {
		var p = this.particles[i];
		p.render();
	}
}

ParticleSystem.prototype.setpos = function() {
	var total = 15413;
	var dia = map(this.num, 0, total, 5, 275);

	for(var i = 0; i < this.particles.length; i++) {
		var p = this.particles[i];
		var d = random(0, dia);
		var th = random(0, TAU);
		var x = this.tx + d*cos(th);
		var y = this.ty + d*sin(th);

		p.setpos(x, y);
	}
}

// AXIS
ParticleSystem.prototype.update_axis = function() {
	this.pos_axis.lerp(this.tpos_axis, 0.13);
}

ParticleSystem.prototype.render_axis = function() {
	var st;
	if(this.index == 0) {st = '5'}
	else if(this.index == 1) {st = '15'}
	else if(this.index == 2) {st = '25'}
	else if(this.index == 3) {st = '35'}
	else if(this.index == 4) {st = '45'}
	else if(this.index == 5) {st = '55'}
	else if(this.index == 6) {st = '65'}
	else if(this.index == 7) {st = '75 years old'}

	pushMatrix();
		translate(this.pos_axis.x, this.pos_axis.y);
		stroke(120);
		strokeWeight(0.8);
		line(0, 170,0, - 70);

		fill(160);
		textSize(18);
		text(st, 4, 170);
	popMatrix();
}

ParticleSystem.prototype.check_selected = function() {
	var d = dist(mouseX, mouseY, this.tx, this.ty);

	if(d < 50) {
		this.selected = true;
		//println(this.index);
	} else {
		this.selected = false;
	}
}

ParticleSystem.prototype.render_selected = function() {
	var st;
	if(this.index == 0) {st = 'Due to her parents divorce, 10 year old girl commits suicide 2009.04.08'}
	else if(this.index == 1) {st = 'After his teacher punished him 110 times, high school student commits suicide 2009.05.02'}
	else if(this.index == 2) {st = 'Storm in South Korea over Jang Ja-yeon suicide 2009.03.07'}
	else if(this.index == 3) {st = 'Suicide is the number one reason for deaths'}
	else if(this.index == 4) {st = 'Record the most suicide rates after the Subprime mortgage crisis'}
	else if(this.index == 5) {st = 'Former S. Korean President Roh commits suicide. He was 62.'}
	else if(this.index == 6) {st = 'Elderly suicide rates increase evey year'}
	else if(this.index == 7) {st = 'Korea, Highest in Elderly Poverty: OECD'}

	textSize(26);
	fill(255, 200);
	text(this.num, width*0.1, height*0.31);
	text(st, width*0.17, height*0.31);
}


