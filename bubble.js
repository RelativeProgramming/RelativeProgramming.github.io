function Bubble(x,y)
{
	this.x = x;
	this.y = y;
	this.sX = random(-2,2);
	this.sY = random(-2,2);
	this.col = color(255,100,0);
	this.lifespan = 255;
	this.radius = 20;

	this.display = function()
	{
		fill(this.col);
		stroke(200);
		ellipse(this.x,this.y,2*this.radius,2*this.radius); 
	};
	this.tick = function()
	{
		this.x+=this.sX;
		this.y+=this.sY;

		if(this.x-this.radius < 0 || this.x+this.radius > width)
		{
			this.sX = -this.sX;
			if(this.x-this.radius < 0)
				this.x = this.radius;
			else
				this.x = width-this.radius;
		}
		if(this.y-this.radius < 0 || this.y+this.radius > height)
		{
			this.sY = -this.sY;
			if(this.y-this.radius < 0)
				this.y = this.radius;
			else
				this.y = height-this.radius;
		}

		//this.col = color(0,100,0, this.lifespan);
		//this.lifespan--;
	};
	this.isFinished = function()
	{
		return this.lifespan < 0;	
	};
}