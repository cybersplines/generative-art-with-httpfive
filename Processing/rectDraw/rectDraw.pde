void setup() {
  size(500, 500);
}

void draw() {
  background(100);
  noStroke();
  fill(255);
  ellipse(width/2, height/2, 100, 100);
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  };
