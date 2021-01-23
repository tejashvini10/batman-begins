class Drops{
    constructor(x,y){
        var options={
            
            restitution:0.1,
            friction:0.1
            
    
        }
        this.body=Bodies.circle(x,y,5,options);
        this.radius=5;
       
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
    displayDrop(){
    var pos=this.body.position;
    
    strokeWeight(2);
    fill("blue");
   translate(pos.x,pos.y);
    ellipseMode(RADIUS);
   
     ellipse(pos.x,pos.y,5,5);
     

} 
    }
