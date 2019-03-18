

var t = 0;
var d = 0;
var canvas;
var scroll;

var img;
function setup() {
  img= loadImage("logo.png");
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  //canvas.position(0,0);
  // canvas.style('z-index', '-1');
   //canvas.style('display', 'block');

  a= floor(random(1,6));
  b= floor(random(a,6));
  fill(127,44,229);

}

function draw() {


   d=map(mouseY,0,height,0,0.5);
  background(200);
  image(img, width-480,30,596/2,59/2);


  for (t = 0;t < 1600; t+=0.1) {

    x = 680*sin(a*t+PI*d);
		y = 350*sin(b*t)+50;
		noStroke();
    strokeWeight(0.5);


		ellipse(width/2+x, height/2+y, 8, 8);
	}

}
