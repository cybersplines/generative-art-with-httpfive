W=500;N= 2
def setup():
    size(W,W,P3D);
    smooth(8);
    textFont(createFont('',100));
    textAlign(3)
def draw():
    clear();
    if mousePressed:
        fill (255, 0, 0)
    else:
        fill(255)
    translate(mouseX,mouseY);
    rotate(0);
    for i in range(N):
        textSize(i * 100), rotateX(PI), rotateZ(0), rotateY(0), text('SALE'[frameCount//10% 5 : frameCount//10%9 + 6],i+50,0, i =0)
