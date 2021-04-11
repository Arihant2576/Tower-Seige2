class Block{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
    }

    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity-9;
            tint(255, this.Visiblity);
            rect(-100, -100, this.width, this.height);
            pop();
        }
      }
  };