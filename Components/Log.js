class Log extends BaseClass{
    constructor(x, y, height, angle){
        super(x, y, 20, height);
        this.image = loadImage("./sprites/wood.png");
        Matter.Body.setAngle(this.body, angle);
    }
}
