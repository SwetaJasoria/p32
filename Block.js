class Block
{
    constructor(x, y, width, height)
    {
        var options = {
            restitution :0.4,
            friction :0.0,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.fading = 0;

        World.add(world, this.body);
    }

    display()
    {
      //console.log(this.body.speed);
      if (this.body.speed < 3)
      {
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
      
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
          
        pop();

      }
      else
      {
        this.fading = this.fading - 5;
          if(this.fading < 0 && this.fading > -105){
            score++;
          }

        World.remove(world, this.body);
      }
    } 
    
    
}