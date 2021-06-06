class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.3,
		friction : 5,
		density: 1
	}
		this.x=x;
		this.y=y;
		this.r=r
		console.log(x,y,this.r)
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
		//	console.log(rubberpos.x, rubberpos.y)
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r)

			pop()
	}

}