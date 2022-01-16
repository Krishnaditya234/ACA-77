const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball, rock1,rock2;
var flag,  log1, log2,cart, backgroundImg;
var sling;

function preload(){
    backgroundImg = loadImage("./sprites/golf-background.jpg");
}

function setup(){
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2,height-10,width,20);
    rock1 = new Rock(300, 500);
    rock2 = new Rock(900, 500);

    flag = new Flag(1100, 550);
   
    cart = new Cart(600,570)

    log1 = new Log(250,420,200, PI/7);
    log2 = new Log(950,420,200, -PI/7);

    ball = new Ball(170,520);

    sling = new Slingshot({x:150,y:520},ball.body)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();

    rock1.display();
    rock2.display();

    flag.display();

    log1.display();
    log2.display();

    cart.display();

    ball.display();

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
