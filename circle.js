var processing = require('Processing.js');
var canvasWidth = 300;
var canvasHeight = 300;
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


var Circle = function() {

}

Circle.prototype.draw = function() {
    rect(0, 0, canvasWidth, canvasHeight);
    println("gameOver : " + gameOver);
    if(gameOver) {
        fill(0, 234, 255);
        rect(0, 0, 199, 50, 59);
        fill(237, 19, 237);
        textSize(19);
        text("Restart", 110, 136);

        mouseClicked = function() {
            if (mouseX >= 100 && mouseX <= 250 &&
                mouseY >= 100 && mouseY <= 150) {
                println("Still pretty useless");
            }
        };
        return;
    }
    noStroke();
    fill(36, 1, 1);
    //fill(115, 92, 115);
    var centerX = canvasWidth / 2;
    var centerY = canvasHeight / 2;

    //ellipse(centerX, centerY, radius * 2, radius * 2);
    var range = 360 / circleColors.length;
    //if(DEBUG) {
    //println(circleColors.length + " range " + range);
    //}
    var angleBegin = 0;
    strokeWeight(2);
    for(var i = 0; i < circleColors.length; i++) {
        stroke(circleColors[i]);
        arc(centerX, centerY, radius * 2, radius * 2, angleBegin, angleBegin + range);
        angleBegin = angleBegin + range;
    }
    angle += (clock ?  1 : -1) * 3;
    if(angle > 360) {
        angle -= 360;
    }
    if(angle < -360) {
        angle += 360;
    }
    //angle = 65;
    var colorIndex = floor((angle/range)) % circleColors.length;
    if(DEBUG) {
        println("range : " + range + " angle: " + angle + "colorIndex: " + colorIndex);
    }
    var currentColor = circleColors[colorIndex];
    stroke(circleColors[lineColorIndex]);
    line(centerX, centerY, centerX + radius * cos(angle), centerY + radius * sin(angle));
    var hit = colorIndex === lineColorIndex;
    if(hit) {
        hitted = true;
        println(lineColorIndex);
        // println(randomInt(2, 5));
    }else if(hitted) {
        println("SB LE BA");
        gameOver = true;
    }
};

keyPressed = function() {
    clock = !clock;
    lineColorIndex = randomExclude(0, colorSize -1, lineColorIndex);
};
