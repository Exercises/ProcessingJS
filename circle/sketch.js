// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;
var canvasWidth = 300;
var canvasHeight = 300;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
};

function draw() {
  rect(0, 0, canvasWidth, canvasHeight);
  background(51);

  // Add the current speed to the position.
  x = x + xspeed;
  y = y + yspeed;

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(255, 0, 0);
  ellipse(x, y, 48, 48);

};

