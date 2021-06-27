var bg;
var pingu, pinguImage;
var snow =[];

function preload() {
  bg = loadImage("snow0.png");
  pinguImage = loadImage("pingu.png");
}

function setup() {

  createCanvas(1200,800);
  

  for (var i = 0; i < 15; i++) {
    snow.push(new Snow());
  }
  //var widthheight = (random(0, 512))
  //snow = new Snow(random(0, 960), random(0, 678), widthheight, widthheight, random(0, 360));
}

function draw() {


  background(bg);
  
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
    snow[i].update();
  }

  // snow.display();
}