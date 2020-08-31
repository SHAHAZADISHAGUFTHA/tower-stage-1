class Box {
  constructor(x, y, width, height){
  var options= {
    restitution : 0.8,
    friction : 0.01,
    density : 0.05,
    isStatic:false

  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
      }
};
