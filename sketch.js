var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
  background("green")
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ", 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50);
  
     if (keyDown("space")) {
        monkey.velocityY = -12;
    }

    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
  spawnFood();
  spawnObstacles();
  drawSprites();
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(width+10, 120, 40, 10);
    banana.y = random(120, 200);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 207;

    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(280, 315, 20, 20)
    obstacle.velocityX = -3;
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 207;
    
    obstaclesGroup.add(obstacle);
  }
}



