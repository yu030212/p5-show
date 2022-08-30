function setup() {
  createCanvas(windowWidth, windowHeight).parent("test");
  background(0);
  colorMode(HSB);
}
var count = 0;
function draw() {
  background(0, 0.001);
  stroke(frameCount % 360, 80, 100);
  strokeWeight(random(5));

  //   line(pmouseX, pmouseY, mouseX, mouseY);
  //   if (mouseIsPressed) {
  noFill();
  strokeWeight(random(1, 5));
  rectMode("center");
  //   rect(random(windowWidth), random(windowHeight), random(50));
  ellipse(random(windowWidth), random(windowHeight), random(50));
  //
  //   }
  count++;
  if (count > 300) {
    noLoop();
  }
}
function mousePressed() {
  background(0);
  count = 0;
}
function mouseReleased() {
  loop();
}
