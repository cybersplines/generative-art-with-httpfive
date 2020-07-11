void setup() {
size(500,500, P3D);
}

void draw() {
  background(0);
  translate(width/2, height/2);
  translate(0, -100);
  rotateY(frameCount/10);
  stroke(255);
  strokeWeight(4);
  
  line(0, 0, 0, 200);
  line(100,0, 100, 200);
  line(100, 100, 0, 100);
  line(0, 0, mouseX/5, 200);
  sphere(10);
  translate(0,200,0);
  sphere(10);
  translate(100,200,0);
  translate(0,-200,0);
  sphere(10);
  translate(0,-200,0);
  sphere(10);
  sphereDetail(mouseX/100);
}
