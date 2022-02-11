
var invisibleBlockGroup, invisibleBlock;
var gameState =play;
var play = 1;
var end = 0;
var cohete, coheteImg;
var obs1, obsImg;
//var space, spaceImg;



function preload(){
coheteImg = loadImage("cohete.png");
 obsImg = loadImage("obs1.png");
//  spaceImg = loadImage("spaceImg");
 }

 function setup() {
   createCanvas(600, 600);
  //   space = createSprite(300,300);
  //  space.addImage("spaceImg");
   //space.velocityY = 1;
   cohete = createSprite(300,300,50,50);
   cohete.addImage("coheteImg");
   obs1 = createSprite( 100,100,20,20);
   obs1.addImage("obsImg");
   
  
   }

   function draw() {
   background(200);
   if(gameState===play){
   if(keyDown("a")){
    cohete.x=cohete.x-4;
   }
   if(keyDown("d")){
    cohete.x=cohete.x+4;
   }
   if(keyDown("space")){
    cohete.velocityY = -7;
   }
   cohete.velocityY = cohete.velocityY + 0.7;
   if(space.y > 400){
    space.y = 300
    }
   obs1.lifetime = 150;
   
    if(obs1.isTouching(cohete)){
      cohete.velocityY = 0;
   }
   if(obs1.isTouching(cohete)||cohete.y>600){
    cohete.destroy();
   gameState = end;
   }
   } else if(gamestate === end){
     background(0);
   fill("yellow");
   text("GAMEOVER",300,300);
   }

   
   drawSprites();
  }  

 
