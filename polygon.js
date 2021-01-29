class Polygon
{
    constructor(x,y,r){
        
       var options= {
           isStatic:false,
           restituition:0,
           friction:1,
           density:1.2
       }

       this.x = x
       this.y = y
       this.r = r
       this.image = loadImage("polygon.png");
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world,this.body);
    }
 
    display(){
        var polypos = this.body.position;
        push()
        translate(polypos.x,polypos.y);
        //strokeWeight(3)
        //fill(127,0,255);
        //ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop()  
    }
}    




