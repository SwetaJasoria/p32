class Slingshot
{
    constructor(body, point)
    {
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 1
        }

        this.sling = Constraint.create(options);
        this.point = point;

        World.add(world, this.sling);
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        if (this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.point;
            
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }    
}