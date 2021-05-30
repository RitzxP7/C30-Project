class Hexagon{
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'mass': 15000
        
    }
        this.body = Bodies.circle(x, y, 20);
        World.add(world, this.body);

        this.image = loadImage("polygon.png");
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image, 0, 0, 40, 40);
        pop();
      }
}
