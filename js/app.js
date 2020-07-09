
// Creating the image array
var imgArray = [];
imgArray[0] = new Image();
imgArray[0].src = "assets/portrait0.png";
imgArray[1] = new Image();
imgArray[1].src = "assets/portrait1.png";
imgArray[2] = new Image();
imgArray[2].src = "assets/portrait2.png";
imgArray[3] = new Image();
imgArray[3].src = "assets/portrait3.png";

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
    canCorrect.erase();
    canImage.imageVisible = true;
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

// Canvas to do corrections on the right overlay
var canCorrect = new Canvas("canCorrect", "red");
document.body.appendChild(canCorrect.canvas);

window.onload = function () {
    canImage.context.drawImage(imgArray[0], 50, 50)
}


