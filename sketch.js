var car1,wall,speed,weight;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  wall=createSprite(700,200,50,200)
 wall.shapeColor="black"

  car1=createSprite(100,200,30,30)
 car1.shapeColor="white"

 weight=random(400,1500)
 speed=random(55,90)
 car1.velocityX=speed;
 

}

function draw() {
  background("grey");  

  

    

   

  if(wall.x-car1.x<car1.width/2+wall.width/2){
     
     car1.velocityX=0;
      
      var deformation=0.5*weight*speed*speed/22500;
  
      if(deformation<100){

       car1.shapeColor=color(0,255,0)


       }
       if(deformation<180 && deformation>100){
 
        car1.shapeColor=color(230,230,0)
 
       }
       if(deformation>180){

        car1.shapeColor=color(255,0,0)
       }

  }



  drawSprites();
}