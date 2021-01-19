const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var maxDrops=100,drops=[],thunderCratedFrame=0;
var thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
  
  thunder1=loadImage("thunderbolt/1.png"); 
  thunder2=loadImage("thunderbolt/2.png");
  thunder3=loadImage("thunderbolt/3.png"); 
  thunder4=loadImage("thunderbolt/4.png");
}

function setup(){
  createCanvas(1500,800);
  engine=Engine.create;
  world=engine.world;
  
  umbrella = new Umbrella(300,500);
  if(frameCount%100===0){
      for(var i=0;i<maxDrops;i++)
      {
          drops.push(new Drops(random(0,400),random(0,400)));
      }
  }
    
}

function draw(){
    Engine.update(engine);
    background(0);
    var rand=Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCratedFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:
                thunder.addImage(thunder1);
                break;
            case 2:
                thunder.addImage(thunder2);
                break;
                case 3: 
                thunder.addImage(thunder3);
                break;
                case 4:
                    thunder.addImage(thunder4);
                    break;
                default:break;
        }
        thunder.scale=random(0.3,0.6)
    }
    if(thunderCratedFrame +10===frameCount && thunder){
        thunder.destroy();
    }
   

    for(var i=0;i<maxDrops;i++){
        drops[i].displayDrop();
        drops[i].update();
    }
    umbrella.display();
    drawSprites();
}   

