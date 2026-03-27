
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .05;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    //background(225);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
    strokeWeight(0);
    fill(255);
    ellipse(_x, _y, 30, 30);
}
