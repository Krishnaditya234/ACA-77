class Slingshot {
    constructor(pointA, bodyB) {
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.25,
            length: 4
        }
        this.sling = Constraint.create(options);
        Composite.add(world, this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }

    display() {
        if(this.sling.bodyB){
            var pointA = this.sling.pointA;
            var pointB = this.sling.bodyB.position;
            strokeWeight(5);
            stroke("green")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
