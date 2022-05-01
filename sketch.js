//Game States
var START=0;
var PLAY=1;
var END=2;
var gameState=START;
var score=0;
var life=3;

function preload(){
  bg1Image=loadImage(" Space 3.jpg")
  startImage=loadImage("Start.png")
 
}

function setup(){
  
//create a canvas
createCanvas(windowWidth,windowHeight)
back1=createSprite(width/2,height/2)
back1.addImage(bg1Image)
back1.scale=0.6
startbtn=createSprite(width/2-450,height/2+100)
startbtn.addImage(startImage)
startbtn.scale=0.3



}

function draw() {
background(0)
drawSprites()
fill ("yellow")
textSize(30)
text("Score: "+score,width-300,80)
text("Lives: "+life,width-300,120)

if (gameState===START){
  if (mousePressedOver(startbtn)){
    gameState=PLAY
  }
}
}

