class Bob{

    constructor(x,y,r){
            var options={
            frictionAir:0.005,
            friction:0,
            density:1.5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
    display()
    {
        var bob=this.body.position;
        push()
        translate(bob.x,bob.y);
        ellipseMode(CENTER);
        strokeWeight(3)
        fill("pink")
        ellipse(0,0,this.r*2)
        pop()
    }
}