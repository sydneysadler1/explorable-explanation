//breakout close (core mechanics)
//mouse to control the paddle, click to start

var paddle, ball, wallTop, wallBottom, wallLeft, wallRight;
var brick;
var bricksImage;
var MAX_SPEED = 9;
var WALL_THICKNESS = 30;
var BRICK_W = 40;
var BRICK_H = 20;
var BRICK_MARGIN = 4;
var ROWS = 9;
var COLUMNS = 16;
var colors  = ["#4286f4", "#33cc54","#cc3333","#b233cc"];
var score = 0;
var myP;



function setup() {
  createCanvas(800, 600);


  //brickImage = loadImage("assets/dollar.png");
  //brick.addImage(brickImage);

  var img3 = loadImage("assets/router.png");
  paddle = createSprite(width/2, height-50, 100, 10);
  paddle.addImage(img3);
  paddle.immovable = true;

  wallTop = createSprite(width/2, -WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
  wallBottom.immovable = true;

  wallLeft = createSprite(-WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallLeft.immovable = true;

  wallRight = createSprite(width+WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallRight.immovable = true;


  bricks = new Group();

  var offsetX = width/2-(COLUMNS-1)*(BRICK_MARGIN+BRICK_W)/2;
  var offsetY = 80;
  var img  = loadImage("assets/dollar.png");
  for(var r = 0; r<ROWS; r++)
    for(var c = 0; c<COLUMNS; c++) {
      var brick = createSprite(offsetX+c*(BRICK_W+BRICK_MARGIN), offsetY+r*(BRICK_H+BRICK_MARGIN), BRICK_W, BRICK_H);
      brick.addImage(img);


      bricks.add(brick);
      brick.immovable = true;
    }

  //the easiest way to avoid pesky multiple collision is to
  //have the ball bigger than the bricks
  var img2 = loadImage("assets/wifi.png");
  ball = createSprite(width/2, height-200, 11, 11);
  ball.maxSpeed = MAX_SPEED;
  ball.addImage(img2);
  paddle.shapeColor = ball.shapeColor = color(89,89,89);

}

function drawScore(){
  textSize(40);
  text("Score: $"+score, 20,45);

}

function draw() {
  background(217, 219, 217);
  drawScore();
  end();
  textSize(18);
  text("Do you want to learn about net neutrality? Break the paywall to continue.", 100,63);


  paddle.position.x = constrain(mouseX, paddle.width/2, width-paddle.width/2);

  ball.bounce(wallTop);
  ball.bounce(wallBottom);
  ball.bounce(wallLeft);
  ball.bounce(wallRight);

  if(ball.bounce(paddle))
  {
    var swing = (ball.position.x-paddle.position.x)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }

  ball.bounce(bricks, brickHit);

  drawSprites();
}

function mousePressed() {
  if(ball.velocity.x == 0 && ball.velocity.y == 0)
    ball.setSpeed(MAX_SPEED, random(90-10, 90+10));
}

function brickHit(ball, brick) {
  brick.remove();
  score+=100;
}

function end(){
  if(score == 14400)
  {
    textSize(20);
    text("Congratulations! You have broken the paywall. You can now load the site.", 80,300);
  }

}
