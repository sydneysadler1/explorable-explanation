/*
Title: Break the Paywall Net Neutrality Game
Imagined, Designed, and Programmed by: Sydney Sadler
Date: 12/12/17
Description: This explorable explanation prompts the user to learn about net neutrality with an
engaging modified version of the classic game Breakout.
Sources of ideas and inspiration (title, author, URL):
 * (Join the Fast Lane, BitTorrent, http://jointhefastlane.com/)
 * (Removal of Net Neturality Simulator, Keep Our Net Free, https://chrome.google.com/webstore/detail/removal-of-net-neutrality/macmdnlopncdoehmjhfenfblflnohoen?hl=en-US)

Includes code from (title, author, URL):
 * (p5.play Breakout Example, molleindustria, http://p5play.molleindustria.org/examples/index.html?fileName=breakout.js)
 * (Loading Bar.js, zbryikt, https://loading.io/progress/)
 * (p5.gif, antiboredom, https://github.com/antiboredom/p5.gif.js/tree/master)

*/
var paddle, ball, wallTop, wallBottom, wallLeft, wallRight;
var brick;
var bricksImage;
var MAX_SPEED = 9;
var WALL_THICKNESS = 5;
var BRICK_W = 40;
var BRICK_H = 20;
var BRICK_MARGIN = 4;
var ROWS = 9;
var COLUMNS = 16;
var colors  = ["#6D7177", "#33cc54","#cc3333","#b233cc"];
var score = 0;
var myP;
var bar1;



function setup() {

  cnv = createCanvas(800, 600);
  cnv.position(450,0);
  cnv.style('z-index','-1');
  bar1 = new ldBar("#myItem1");
  bar2 = document.getElementById('myItem1').ldBar;
  gif = loadGif('source.gif');
  var img3 = loadImage("assets/router.png");
  paddle = createSprite(800/2, 600-50, 100, 10);
  paddle.addImage(img3);
  paddle.immovable = true;
  wallTop = createSprite(800/2, -WALL_THICKNESS/2, 800+WALL_THICKNESS*2, WALL_THICKNESS);
  wallTop.immovable = true;
  wallBottom = createSprite(800/2, 600+WALL_THICKNESS/2, 800+WALL_THICKNESS*2, WALL_THICKNESS);
  wallBottom.immovable = true;
  wallBottom.color = "#A7A9AC";
  wallLeft = createSprite(-WALL_THICKNESS/2, 600/2, WALL_THICKNESS, 600);
  wallLeft.immovable = true;
  wallRight = createSprite(800+WALL_THICKNESS/2, 600/2, WALL_THICKNESS, 600);
  wallRight.immovable = true;
  bricks = new Group();

  var offsetX = 800/2-(COLUMNS-1)*(BRICK_MARGIN+BRICK_W)/2;
  var offsetY = 80;
  var img  = loadImage("assets/dollar.png");
  for(var r = 0; r<ROWS; r++)
    for(var c = 0; c<COLUMNS; c++) {
      var brick = createSprite(offsetX+c*(BRICK_W+BRICK_MARGIN), offsetY+r*(BRICK_H+BRICK_MARGIN), BRICK_W, BRICK_H);
      brick.addImage(img);
      bricks.add(brick);
      brick.immovable = true;
    }

  var img2 = loadImage("assets/wifi.png");
  ball = createSprite(800/2, 600-200, 11, 11);
  ball.maxSpeed = MAX_SPEED;
  ball.addImage(img2);
  paddle.shapeColor = ball.shapeColor = color(89,89,89);

}

function drawScore(){
  textSize(40);
  text("Score: $"+score, 20,45);

}

function draw() {
  background("#A7A9AC");
  drawScore();
  end();
  textSize(18);
  text("Do you want to learn about net neutrality? Break the paywall to load the explanation.", 65,63);
  textSize(20);
  paddle.position.x = constrain(mouseX, paddle.width/2, 800-paddle.width/2);
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
  bar1.set(score/144);
}

function end(){
  if(score == 14400)
  {
    textSize(20);
    text("Thanks for playing!", 310,400);
    image(gif, 150, 80);
  }
  if (score > 0 && score <= 1000)
  {
    textSize(20);
    text("Net Neutrality is the concept that all web traffic should be treated equally.", 100,400);
  }
  if (score > 1000 && score <= 2500)
  {
    textSize(20);
    text("ISPs want to end net neutrality to give their sites and companies that pay them ", 50,400);
    text("faster access while slowing down their competitors and anyone who can't pay them.", 30,425);
  }
  if (score > 2500 && score <= 4000)
  {
    textSize(20);
    text("Under Obama, the FCC passed the Open Internet Order, a law which protected",50,400);
    text("net neutrality and classified ISPs as Title II companies that can be regulated.",55, 425);
  }
  if (score > 4000 && score <= 5500)
  {
    textSize(20);
    text("Ajit Pai, the new chairman of the FCC appointed by Trump, is in the process of ",45,400);
    text("rolling back Title II and net neutrality.", 245,425);
  }
  if (score > 5500 && score <= 7000)
  {
    textSize(20);
    text("ISP lobbyists pay more money to Congress than the defense contractor lobby, ",50,400);
    text("behind oil and pharmaceutical industries; $572 million was spent since 2008.",55,425);
  }
  if (score > 7000 && score <= 8000)
  {
    textSize(20);
    text("According to Pai and the ISPs, net neutrality is anti-competitive and bad for business.",25,400);
  }
  if (score > 8000 && score <= 9500)
  {
    textSize(20);
    text("Without net neutrality, the ISPs would be able to block sites and content they don’t like", 20,400);
    text("and could decide which companies and sites succeed and fail.", 120,425);
  }
  if (score > 9500 && score <= 11000)
  {
    textSize(20);
    text("Without net neutrality, disruptive sites would be shut down and the cost for high traffic", 20,400);
    text("would prevent small companies from getting off the ground.", 120,425);
  }
  if (score > 11000 && score <= 12500)
  {
    textSize(20);
    text("Petitions such as Battle for the Net gained 2.5 million signatures and was backed by", 30,400);
    text("tech companies like Google, Facebook, Netflix, Amazon, and Reddit.",100,425);
  }
  if (score > 12500 && score <= 14400)
  {
    textSize(20);
    text("Regardless, the FCC is still reversing net neutrality despite ",140,400);
    text("protest from citzens and tech companies alike.", 200,425);
  }
}
