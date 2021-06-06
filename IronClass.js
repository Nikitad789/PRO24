class IronClass{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.3,
		friction : 5,
		density: 15
	}
		this.x=x;
		this.y=y;
		
		
		this.body=Bodies.rectangle(this.x, this.y,50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x,Ironpos.y);
		
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0,0,50,50)

			pop()
	}

}