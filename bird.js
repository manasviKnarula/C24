class Bird {
    constructor(x,y){
        var options={
            restitution:1.0,
            friction : 0.5, 
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height= 50;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("red");
    stroke("white");
    strokeWeight(4);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}