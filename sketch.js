var canvas;
var bubbles = [];

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");


	for(var i = 0; i < 25; i++)
	{
		bubbles[i] = new Bubble(random(0, width),random(0,height));
		bubbles[i].col = color(random(150,255),random(100, 180),0);
	}

}

function draw() {
	background(0);

	//	fill(255,0,0);
	//  rect(windowWidth/2-50, windowHeight/2-30, 100, 60);
	//	rect(0, 0, 200, 100);

	for(var i = 0; i < bubbles.length; i++)
	{
		bubbles[i].tick();
		bubbles[i].display();
	}

}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}