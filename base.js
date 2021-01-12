class Base {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(400, 600, 2000, 20, options);
        Matter.World.add(world, this.body);
    }
    show() {
        push();
        // noStroke();
        rectMode(CENTER);
        noStroke();
        fill(150);
        rect(this.body.position.x, this.body.position.y, 2000, 20);
        pop();
    }
}