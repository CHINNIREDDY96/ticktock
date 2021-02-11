var hours, minutes, seconds;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  text('Current hour : \n' + hours, 51,50);
  text('Current minute : \n' + minutes, 500,50);
  text('Current second : \n' + seconds, 300,50);

 
    let c = map(mouseX, 0, width, 0, 175);
    // Scale the mouseX value from 0 to 720 to a range between 40 and 300
    let d = map(mouseX, 0, width, 40, 300);
    fill(255, c, 0);
    ellipse(width/2, height/2, d, d);
  
    arc(50, 55, 50, 50, 0, HALF_PI);
    noFill();
    arc(50, 55, 60, 60, HALF_PI, PI);
    arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  angleMode(DEGREES);
  map();
  line();
  arc(50,50,80,80,0, PI );
  drawSprites();
}


function map(){
  hoursAngle  = map(hours%12 , 0, 60, 0,360);
  minutesAngle  = map(minutes%12 , 0, 60,0,360);
  secondsAngle = map(seconds%12 , 0, 60, 0, 360);
}

function line(){
  push();
  rotate(hoursAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

}