let isWinking = false;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(50);
  noStroke();
}

function draw() {
  background(255);

  // HAIR (brown semicircle)
  fill(120, 70, 20);
  arc(300, 380, 330, 500, PI, TWO_PI, CHORD);

  // HEAD
  fill(255, 230, 200);
  ellipse(300, 300, 250, 300);

  // EARS
  fill(255, 220, 180);
  ellipse(180, 300, 40, 60);
  ellipse(420, 300, 40, 60);

  // GLASSES FRAME
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(200, 250, 80, 60, 10); // left lens
  rect(320, 250, 80, 60, 10); // right lens
  line(280, 280, 320, 280);   // bridge
  noStroke();

  // EYES
  if (isWinking) {
    fill(0);
    rect(240, 270, 40, 5, 3); // wink
  } else {
    drawBigEye(240, 270);
  }
  drawBigEye(360, 270);

  // NOSE (simple line)
  stroke(100);
  strokeWeight(3);
  line(300, 290, 300, 320);
  noStroke();

  // MOUTH (:3 style)
  fill(0);
  text("U", 300, 380);
}

// Function to draw a big shiny eye
function drawBigEye(x, y) {
  fill(0);
  ellipse(x, y, 30, 30);
  fill(255);
  ellipse(x - 5, y - 5, 8, 8);
}

// On single click, toggle the wink
function mousePressed() {
  isWinking = !isWinking;
}
