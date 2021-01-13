var engine, world;
var date, h, m, s;
var arc1, arc2, arc3;
var angle = 1;
var clock, clockImg, hourHand, hourHandImg, minuteHand, minuteHandImg, secondHand, secondHandImg;
var clockType = 1;
var clockMatter = [], clockCount = 0;
var platform;

function preload() {
  clockImg = loadImage("img/4.png");
  hourHandImg = loadImage("img/1.png");
  minuteHandImg = loadImage("img/2.png");
  secondHandImg = loadImage("img/3.png");
}

function setup() {
  engine = Matter.Engine.create();
  world = engine.world;
  createCanvas(1000, 600);
  clock = createSprite(200, 200);
  clock.addImage(clockImg);
  hourHand = createSprite(200, 200);
  hourHand.addImage(hourHandImg);
  hourHand.scale = 0.5;
  minuteHand = createSprite(200, 200);
  minuteHand.addImage(minuteHandImg);
  minuteHand.scale = 0.5;
  secondHand = createSprite(200, 200);
  secondHand.addImage(secondHandImg);
  secondHand.scale = 0.5;
  clock.visible = false;
  hourHand.visible = false;
  minuteHand.visible = false;
  secondHand.visible = false;
  clockMatter[clockCount] = new Clock(200, 0);
  clockCount += 1;
  platform = new Base();
  Matter.Engine.run(engine);
}

function draw() {
  background(200);
  date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  strokeWeight(5);
  angleMode(DEGREES);
  for (i = 0; i < clockMatter.length; i++) {
    clockMatter[i].show();
  }
  platform.show();
  clockHour();
  clockMinute();
  clockSecond();
  drawSprites();
  fill(0);
  text("PRESS R TO RELOAD", 875, 20);
  text("PRESS C FOR SOURCE CODE", 825, 40);
  text("CLICK MOUSE ANYWHERE ON THE CANVAS", 735, 60);
  text("PRESS SPACE BAR TO SWITCH CLOCK STYLE", 730, 80);
}

function mouseClicked() {
  clockMatter[clockCount] = new Clock(mouseX, mouseY);
  clockCount += 1;
}

function clockHour() {
  if (clockType === 1) {
    clock.visible = false;
    hourHand.visible = false;
    minuteHand.visible = false;
    secondHand.visible = false;
    push();
    noFill();
    stroke("#ff0000");
    translate(200, 200);
    push();
    rotate(h * 30);
    line(0, -40, 0, 0);
    pop();
    arc(0, 0, 180, 180, 270, h * 30 - 90);
    pop();
  } else if (clockType === 2) {
    clock.visible = true;
    hourHand.visible = true;
    minuteHand.visible = true;
    secondHand.visible = true;
    hourHand.rotation = h * 30;
  }

}

function clockMinute() {
  if (clockType === 1) {
    push();
    noFill();
    stroke("#0000ff");
    translate(200, 200);
    push();
    rotate(m * 6);
    line(0, -60, 0, 0);
    pop();
    arc(0, 0, 190, 190, 270, m * 6 - 90);
    pop();
  } else if (clockType === 2) {
    minuteHand.rotation = m * 6;
  }
}

function clockSecond() {
  if (clockType === 1) {
    push();
    noFill();
    stroke("#00ff00");
    translate(200, 200);
    push();
    rotate(s * 6);
    line(0, -80, 0, 0);
    pop();
    arc(0, 0, 200, 200, 270, s * 6 - 90);
    pop();
  } else if (clockType === 2) {
    secondHand.rotation = s * 6;
  }
}

function keyPressed() {
  if (keyCode === 82) {
    window.location.reload();
  }
  if (keyCode === 67) {
    window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-43";
  }
  if (keyCode === 32) {
    if (clockType === 1) {
      clockType = 2;
    } else if (clockType === 2) {
      clockType = 1;
    }
  }
}
