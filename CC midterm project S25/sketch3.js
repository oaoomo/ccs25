let fragments = [];
let customFont;

function preload() {
    customFont = loadFont('fonts/HomemadeApple-Regular.ttf'); 
  }

function setup() {
    canvas = createCanvas (windowWidth, windowHeight);
    canvas.position (0,0);
    canvas.style ('z-index','-1');
  textSize(24);
  textAlign(CENTER, CENTER);
  textFont(customFont); 
  for (let i = 0; i < 10; i++) {
    fragments.push(new MemoryFragment(random(width), random(height)));
  }
}

function draw() {
  background(0); 

  for (let frag of fragments) {
    frag.show();
    frag.update();
  }
}


class MemoryFragment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = random(150, 255);
    this.text = random([
      "A distant voice...",
      "A place once known...",
      "A face, now blurred...",
      "The laughter fades...",
      "Did it really happen?",
      "Just a dream..."
    ]);
    this.size = random(16, 32);
    this.fadingSpeed = random(0.5, 2);
    this.glitchOffset = 0;
  }

  update() {
    
    this.alpha -= this.fadingSpeed;
    
    
    if (random(1) < 0.02) {
      this.glitchOffset = random(-5, 5);
    } else {
      this.glitchOffset = 0;
    }
    
    
    if (this.alpha <= 0) {
      this.x = random(width);
      this.y = random(height);
      this.alpha = random(150, 255);
    }
  }

  show() {
    fill(200, 200, 255, this.alpha);
    textSize(this.size);
    textFont(customFont);
    text(this.text, this.x + this.glitchOffset, this.y);
  }
}
