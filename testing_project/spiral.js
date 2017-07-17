var tStart = 0;

function setup()
{
	var canvas = createCanvas(640,480);
	canvas.parent("spiral");

}

function draw()
{
	background(0);
	var cX = width/2;
	var cY = height/2;
	stroke(255);
	strokeWeight(4);
	point(cX,cY);
	for(var r = 1, t = tStart; r < 200; r++)
	{

		var x = r*cos(t);
		var y = r*sin(t);
		point(cX+x,cY+y);

		t+=0.1;
	}
	tStart-=0.2;
}
