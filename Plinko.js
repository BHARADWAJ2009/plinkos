class Plinko {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r=10
        this.body=Bodies.circle(this.x, this.y,this.r, options);
        World.add(world,this.body)
     }
     display(){
      
      var angle = this.body.angle;

      var plinkoPos=this.body.position;		
			push()
			translate(plinkoPos.x, plinkoPos.y);
            rotate(angle)
			fill(255,0,255)
            imageMode(CENTER)
            noStroke();
            fill("white")
            ellipseMode(RADIUS)
			image(this.image,0,0,this.r,this.r);
			pop()
			

      

      

     }
}