/* ma'am so in this project there are no images given so the yellow Bar appering is
the lightning and the big ball in the middle is the human
the rectangular drops are the rain.*/

// creating the constants
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;

// creating the variables
var Boy, ground, lightning, drop1;

function setup(){
   createCanvas(600,1000);
    
   engine = Engine.create();
   world = engine.world;

   // creating the bodies.
   Boy = new Umbrella(300,700,400);

    Body.setVelocity(Boy.body,{x : 0,y :9});
    ground = new Ground(300,900);
   
}

function draw(){
    background("darkblue");
    ground.display();
    Boy.display();
    fill ("yellow");
    textSize(30);
    text ("The Raining Effect !!", 160,950);


    if(frameCount % 10 === 0){
        var rand = 1;
       if(rand === 1){
        var drop1 = createSprite(random(0,600),100,20,20);
        drop1.shapeColor = "lightblue";
        drop1.setVelocity(0,9);
       }
    }

    

    if(frameCount % 80 === 0){
        var rand = 1;
       if(rand === 1){
        var lightning = createSprite(random(0,600),50,100,20);
        lightning.shapeColor = "yellow";
        lightning.lifetime = 50;
       }
    }

    drawSprites();
}   

