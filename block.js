class Block{
  constructor(x, y, width, height) {
    var options = {
      
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos= this.body.position;

    if(this.body.speed < 3.8) {

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
} 
else{
World.remove(world, this.body);
push();
this.Visibility = this.Visibility - 1;
tint(25, this.Visibility);
pop()
}
      }
    }