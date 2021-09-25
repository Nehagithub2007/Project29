class Slingshot{
    constructor(bodyA, pointBa){
        var options = {
            bodyA: bodyA,
            pointB: pointBa,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointBa
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        if (this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
    fly(){
        this.slingshot.bodyA = null
    }
}