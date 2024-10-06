function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  myShape(0,0,400,400)
  
}

function myShape(x,y,w,h) {
  strokeWeight(0.4) 
  fill("white")
  let diameter = 2 * sqrt((mouseX-(x+w/2))**2 + (mouseY-(y+h/2))**2)
  circle(x+w/2,y+h/2, diameter)
  fill("black")
  arc(x+w/2,y+h/2,diameter,diameter,0.75*PI,PI+PI/2,CHORD)
  arc(x+w/2,y+h/2,diameter, diameter,-PI/2,0.25*PI,CHORD)

}