class Alien {
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,50, options);
      this.radius = 50

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };