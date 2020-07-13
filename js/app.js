
// Creating the image array
var imgArray = [];
imgArray[0] = new Image();
imgArray[0].src = "assets/icecream.png";
imgArray[1] = new Image();
imgArray[1].src = "assets/icecream2.png";
imgArray[2] = new Image();
imgArray[2].src = "assets/icecream3.png";
imgArray[3] = new Image();
imgArray[3].src = "assets/smile.png";
imgArray[4] = new Image();
imgArray[4].src = "assets/apple.png";
imgArray[5] = new Image();
imgArray[5].src = "assets/peach.png";
imgArray[6] = new Image();
imgArray[6].src = "assets/cake.png";
imgArray[7] = new Image();
imgArray[7].src = "assets/cup.png";
imgArray[8] = new Image();
imgArray[8].src = "assets/heart.png";
imgArray[9] = new Image();
imgArray[9].src = "assets/idea.png";
imgArray[10] = new Image();
imgArray[10].src = "assets/spoon.png";
imgArray[11] = new Image();
imgArray[11].src = "assets/cupcake.png";

// Clears both canvas
function clearAll() {
    canDraw.erase();
    canOverlay.erase();
}

// Last drawing to go back to
function undo() {
    canDraw.erase();
    canOverlay.erase();
    canDraw.context.drawImage(canDraw.backupImageArray.pop().canvas, 0, 0);
    doneDrawing();
}

// Level 1 traces the drawing
function levelOne() {
    canDraw.level = 1;
    document.getElementById("gridLeft").style.display = "table";
    document.getElementById("gridRight").style.display = "table";
}

// Level 2 transfer the drawing by line
function levelTwo() {
    canDraw.level = 2;
    document.getElementById("gridLeft").style.display = "table";
    document.getElementById("gridRight").style.display = "table";
}

// Level 3 toggles the grid
function levelThree() {
    canDraw.level = 3;
    document.getElementById("gridLeft").style.display = "none";
    document.getElementById("gridRight").style.display = "none";
}

// Overlays current drawing to the right image and reduces opacity
function doneDrawing() {
    canImage.context.drawImage(imgArray[imgNumber], 50, 50)
    canImage.changeOpacity(0.3);
    canDraw.overlay(canOverlay);
    canOverlay.changeOpacity(0.5);
}


// Cycles through images in the library 
var imgNumber = 0;
function nextImage() {
    imgNumber++;
    imgNumber = imgNumber % (imgArray.length);
    canDraw.erase();
    canImage.erase();
    canOverlay.erase();
    canImage.imageVisible = true;
    canDraw.backupImageArray = [];
    canImage.context.drawImage(imgArray[imgNumber], 50, 50)
}


// Creating the four canvases 

// Canvas for drawing on the left
var canDraw = new Canvas("canDraw", "black");
document.body.appendChild(canDraw.canvas);

// Canvas to draw the image on the right
var canImage = new Canvas("canImage", "black");
document.body.appendChild(canImage.canvas);

// Canvas to overlay the left drawing on the right image
var canOverlay = new Canvas("canOverlay", "black");
document.body.appendChild(canOverlay.canvas);

window.onload = function () {
    canImage.context.drawImage(imgArray[0], 50, 50)
}

if (window.innerHeight > window.innerWidth) {
    alert("Please tilt me to landscape mode :)");
} 
