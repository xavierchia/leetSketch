
// Creating the image array
var imgArray = [];
imgArray[0] = new Image();
imgArray[0].src = "data: image/png;base64, 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";
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
    canOverlay.changeOpacity(0.3);
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

function score() {
    var imageData = canImage.context.getImageData(0,0,400,400).data;
    var drawData = canDraw.context.getImageData(0,0,400,400).data;

    var counter = 0;
    for(var i = 0; i < imageData.length; i++) {
        if (imageData[i] === 77 && drawData[i] === 255) {
            counter++;
        }
        if (imageData[i] === 0 && drawData[i] === 255) {
            counter--;
        }
    }
    return counter;
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

