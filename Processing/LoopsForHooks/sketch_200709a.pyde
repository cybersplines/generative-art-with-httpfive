W=1000; N=100;
def setup():
    size(W,W,P3D);
    textFont(createFont('',20));
    textAlign(3)
def draw():
    clear();
    translate(W/2,W/2);
    rotate(frameCount*TAU/2000);
    for N in range (100):
        N+=frameCount//100+1
    for i in range(N):
            textSize(i%30), smooth(8), rotateZ(10), text('httpfive'[:frameCount/100+1 ],i+50,0, i =0)
