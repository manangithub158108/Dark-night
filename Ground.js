class Ground {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = 600;
        this.height = 20;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        fill ("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop ();
    }
}