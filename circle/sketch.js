// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
var canvasWidth = 500;
var canvasHeight = 500;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
};


var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;

var radius = 100;
var angle = 0;
var clock = true;
var DEBUG = false;
var gameOver = false;
var circleColors = [
    color(230, 143, 143),
    color(125, 240, 125),
    color(0, 0, 240),
    color(250, 0, 250),
    color(255, 222, 8)];

var colorSize = circleColors.length;

var randomInt = function(low, high) {
    var result =  floor(random(low, high + 1));
    if(result === high+1) {
        result = low;
    }
    return result;
};

var randomExclude = function(low, high, exclude) {
    var result = randomInt(low, high-1);
    if(result >= exclude) {
        result = exclude + 1;
    }
    return result;
};
var hitted = false;
var lineColorIndex = randomExclude(0, colorSize -1, 1);



function drawBackground() {
  background(52);
  rect(0, 0, canvasWidth, canvasHeight);
}

function drawBall() {
  x = x + xspeed;
  y = y + yspeed;

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
  stroke(0);
  strokeWeight(2);
  fill(255, 0, 0);
  ellipse(x, y, 48, 48);
}

function rectLeftTop() {
  noStroke();
  fill(0, 255, 1);
  rect(0, 0, 50, 30);
}

function drawLine() {
  //line
  stroke(0, 173, 0);
  strokeWeight(4);
  line(0, 0, 100, 310);
}

function drawArc() {
  strokeWeight(2);
  arc(100, 100, 200, 200, 0, 80);
}

function draw() {

  //background(51);
  drawBackground();

  // Add the current speed to the position.

  // Display circle at x position
  drawBall();
  rectLeftTop();

  drawLine();



  drawArc();
  var centerX = canvasWidth / 2;
  var centerY = canvasHeight / 2;
  var range = 360 / circleColors.length;
  console.log("length: " + circleColors.length);
  console.log("range: " + range);

  // var angleBegin = 0;
  // strokeWeight(2);
  // arc(100, 100, 200, 200, 0, 80);

  // for(var i = 0; i < circleColors.length; i++) {
  //     stroke(circleColors[i]);
  //     arc(centerX, centerY, radius * 2, radius * 2, angleBegin, angleBegin + range);
  //     angleBegin = angleBegin + range;
  // }
  // angle += (clock ?  1 : -1) * 3;
  // if(angle > 360) {
  //     angle -= 360;
  // }
  // if(angle < -360) {
  //     angle += 360;
  // }
  
  // var colorIndex = floor((angle/range)) % circleColors.length;
  // if(DEBUG) {
  //     println("range : " + range + " angle: " + angle + "colorIndex: " + colorIndex);
  // }
  // var currentColor = circleColors[colorIndex];
  // stroke(circleColors[lineColorIndex]);
  // line(centerX, centerY, centerX + radius * cos(angle), centerY + radius * sin(angle));
  // var hit = colorIndex === lineColorIndex;


};

