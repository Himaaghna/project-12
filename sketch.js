var path, pathImg, edges;
var coin,coinImg;
var runner,runnerImg;

function preload(){
  runnerImg = loadAnimation("runner-1.png","runner-2.png");
  coinImg= loadImage("coin.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(420,900);
  
   //creating ground
   path=createSprite(200,300);
   path.addImage("moving",pathImg);
   path.scale=1.55;
   path.velocityY=4;

   // creating trex
   runner = createSprite(200,160,20,50);
   runner.addAnimation("running", runnerImg);
  
   edges = createEdgeSprites(100,10);
   
   //adding scale and position to trex
   runner.scale = 0.1;
   runner.x = 500;
   runner.y = 700;
}

function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(runner.y)
  
  runner.collide(edges);
  //making ground endless
  if (path.y>400) {
    path.y=path.height/8;
  }

  runner.collide(edges);

  runner.x = World.mouseX;
  
  
 
  drawSprites();
}
