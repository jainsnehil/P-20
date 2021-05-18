var garden,gardenImage,cat,catImage,mouse,mouseImage,mouseImage2;
var catImage2;
function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png");
    catImage=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImage=loadImage("images/mouse2.png")
    mouseImage2=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
      garden=createSprite(400,400);
      garden.addImage(gardenImage);
      cat=createSprite(700,650);
      cat.addAnimation("cat1",catImage);
      cat.scale=0.1;
      mouse=createSprite(200,650)
      mouse.addImage(mouseImage)
      mouse.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    
    if(cat.isTouching(mouse)){
        cat.addAnimation("cat1",catImage)
        cat.velocityX=0
        mouse.addImage(mouseImage2)
    }
    
    
    
   // mouse.debug=true
    mouse.setCollider("rectangle",5,10,80,10)
    
    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
        if(keyDown("LEFT_ARROW")){
            
            cat.velocityX=-4
            cat.addAnimation("cat1",catImage2)
            cat.changeAnimation("cat1")
            
           }

}
