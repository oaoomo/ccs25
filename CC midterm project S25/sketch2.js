
var canvas;
let sentence = "THE FUTURE IS BECOMING THE PAST ";
let sentenceArray;
let x, y;
let r = 500; let angle = 0;




function windowResized() {
  
  resizeCanvas(windowWidth, windowHeight);
}

  
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style ('z-index','-1');
  angleMode(DEGREES);
  sentenceArray = sentence.split("");
  x = r * cos (angle);
  y = r * sin (angle);
}



function draw() {
 background(0);
 translate(width/2, height/2);
 textSize(40);
 fill(255);
 rotate(angle);
  for (let i=0; i<sentenceArray.length; i++) {
    push();
    let startingAngle = 360 / sentenceArray.length * i;
    rotate (startingAngle);
    text(sentenceArray[i], x, y);
    pop();
  }
  angle += 0.5;
}



