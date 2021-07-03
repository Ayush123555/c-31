class Particle{
  constructor(x,y,r,color){
      var options ={
          'restitution':0.03,
          'density':0.1,
          'isStatic':false
      }
     Matter.Color=color(random(0,255),random(0,255));
     this.body=Bodies.circle(x,y,r,options,color)
      this.r=r
     World.add(world,this.body);
  }
  display(){
  var pos1=this.body.position;
  rectMode(CENTER);
  rect(pos1.x,pos1.y,this.r,this.color);


  }

}