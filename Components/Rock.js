class Rock extends BaseClass{
    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadImage("./sprites/rocks.png")
    }
}