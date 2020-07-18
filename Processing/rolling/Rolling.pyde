W=1000;N=15
def setup():
    size(W,W,P3D);
    textFont(createFont('',40));
def draw():
    clear();
    translate(W/2,W/2);
    [[rotateZ(frameCount*TAU/400), rotateY(frameCount*TAU/400),rotateX(frameCount*TAU/200),text(u'text'[i%8],0,0, frameCount /10)]for i in range(N)]
