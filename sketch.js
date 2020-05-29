var ball,ballimg;
var paddle1,paddle1img,paddle2,paddle2img;
var player1Score;
var player2Score;

function preload() {  
  ballimg=loadImage("Ball1.png");
  paddle1img=loadImage("paddle1.png");
  paddle2img=loadImage("paddle2.png");
}
  
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200,20,80);
   ball.addImage("ball",ballimg);
   ball.scale=0.05
   ball.velocityX=2;
   ball.velocityY=1;
   paddle1=createSprite(370,200,20,100);
   paddle1.addImage("paddle1",paddle1img)
   paddle1.scale=0.10
   paddle2=createSprite(30,200,20,100);
   paddle2.addImage("paddle2",paddle2img);
   paddle2.scale=0.14;
   player1Score=0;
   player2Score=0;
   
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle1);
  ball.bounceOff(paddle2);
  paddle1.collide(edges[2]);
  paddle1.collide(edges[3]);
  paddle2.collide(edges[2]);
  paddle2.collide(edges[3]);
  
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  text(player1Score,220,30);
  text(player2Score,180,30);
  text("Press'space' to restart",150,80);
  
  if(ball.x > 400){
  player2Score=player2Score+1;
  ball.x=200;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0;
  }
  if(ball.x < 0){
  player1Score=player1Score+1;
  ball.x=200;
  ball.y=200;
  }
  if (keyDown("space")){
  ball.x=200;
  ball.y=200;
  ball.velocityX=2;
  ball.velocityY=1;
  }
  
  if (keyWentDown(UP_ARROW)){
  paddle1.velocityY=-4;
  }
  if (keyWentUp(UP_ARROW)){
  paddle1.velocityY=0;
  }
  if (keyWentDown(DOWN_ARROW)){
  paddle1.velocityY=4;
  }
  if (keyWentUp(DOWN_ARROW)){
  paddle1.velocityY=0;
  }  
  if (keyWentDown("w")){
  paddle2.velocityY=-4;
  }
  if (keyWentUp("w")){
  paddle2.velocityY=0;
  }
  if (keyWentDown("s")){
  paddle2.velocityY=4;
  }
  if (keyWentUp("s")){
  paddle2.velocityY=0;
  }
  
  
  drawSprites();
}