
var ballx = 300;
var bally = 300;
var ballSize = 40; 
var score = 0;
var gameState = "L1"; 

function preload () {
img1 = loadImage("https://joshuavargasart.github.io/images/finish-flag.jpg");
  img2 = loadImage("https://joshuavargasart.github.io/images/racetrack.jpg");
  img3 = loadImage("https://joshuavargasart.github.io/images/racecar.jpg");
}


function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20); 
} // end of setup 



function draw(){
background(220);
if(gameState=="L1"){
  levelOne();
} else if (gameState=="L2"){
  levelTwo();
}


text(("Score: " + score), width/2, 40);
} // end of draw 

function levelOne(){
 text("level 1",width/2,height-20);
 var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
     ballx=random(width);
     bally=random(height);
     score=score+1;
    } 
    
    if(score>=5){
    //background(random(255));
    gameState="L2";
    }
    
  line(ballx,bally,mouseX,mouseY);
//  ellipse(ballx, bally, ballSize, ballSize);

 image(img1,ballx, bally, ballSize, ballSize);
} // end of level one 




function levelTwo(){
 text("level 1",width/2,height-20);
 var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
     ballx=random(width);
     bally=random(height);
     score=score+1;
    } 
    
    if(score>=10){
    //background(random(255));
    
    }
  line(ballx,bally,mouseX,mouseY);
  image(img2,ballx, bally, ballSize, ballSize);
   } // end of level two
   
  
  if(score>=16){
    //background(random(255));
  
  
   line(ballx,bally,mouseX,mouseY);

    image(img3,ballx, bally, ballSize, ballSize);
   } // end of level three
   
   
