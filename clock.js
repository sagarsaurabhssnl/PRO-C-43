class Clock {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction:10
        }
        this.body = Matter.Bodies.circle(x, y, 45, options);
        Matter.World.add(world, this.body);
        this.clock=createSprite(this.body.position.x, this.body.position.y);
        this.hourHand=createSprite(this.body.position.x, this.body.position.y);
        this.minuteHand=createSprite(this.body.position.x, this.body.position.y);
        this.secondHand=createSprite(this.body.position.x, this.body.position.y);
        this.clock.addImage(clockImg);
        this.hourHand.addImage(hourHandImg);
        this.minuteHand.addImage(minuteHandImg);
        this.secondHand.addImage(secondHandImg);
        this.clock.scale=0.3;
        this.hourHand.scale=0.1;
        this.minuteHand.scale=0.1;
        this.secondHand.scale=0.1;
        // console.log(this.hourHand.position.x);
    }
    show() {
        push();
        translate(this.body.position.x, this.body.position.y);
        // console.log(this.body.angle);
        this.clock.position={x:this.body.position.x, y:this.body.position.y}
        this.hourHand.position={x:this.body.position.x, y:this.body.position.y}
        this.minuteHand.position={x:this.body.position.x, y:this.body.position.y}
        this.secondHand.position={x:this.body.position.x, y:this.body.position.y}
        this.clock.rotation = this.body.angle;
        this.hourHand.rotation = h * 30+this.body.angle;
        this.minuteHand.rotation = m * 6+this.body.angle;
        this.secondHand.rotation = s * 6+this.body.angle;
        pop();
    }
}