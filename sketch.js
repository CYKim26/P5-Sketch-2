function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  myShape(0,0,400,400)
}


function myShape(x,y,w,h) {
  let cX = x+w/2
  let cY = y+h/2
  let diameter = 2 * sqrt((mouseX-(cX))**2 + (mouseY-(cY))**2)
  strokeWeight(0.4) 
  fill("white")
  circle(cX,cY,diameter)
  fill("black")
  arc(cX,cY,diameter,diameter,0.75*PI,PI+PI/2,CHORD)
  arc(cX,cY,diameter, diameter,-PI/2,0.25*PI,CHORD)
}
