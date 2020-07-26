
// Creating the image array
// First two images are in base64 so 'getImageData' can work on local drive
var imgArray = [];
imgArray[0] = new Image();
imgArray[0].src = "data: image/png;base64, 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";
imgArray[1] = new Image();
imgArray[1].src = "data: image/png;base64, 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"
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
    updateScore();
}

// Last drawing to go back to
function undo() {
    canDraw.erase();
    canOverlay.erase();
    canDraw.context.drawImage(canDraw.backupImageArray.pop().canvas, 0, 0);
    doneDrawing();
    updateScore();
}

// Change grid color
function gridColor(color) {
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
        tds[i].style.borderColor = color;
    }
}

// Level 1 traces the drawing
function levelOne() {
    canDraw.level = 1;
    gridColor("black");
}

// Level 2 transfer the drawing by line
function levelTwo() {
    canDraw.level = 2;
    gridColor("black");

}

// Level 3 toggles the grid
function levelThree() {
    canDraw.level = 3;
    gridColor("transparent");
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
    updateScore();
}

function updateScore() {
    var imageData = canImage.context.getImageData(0, 0, 400, 400).data;
    var drawData = canDraw.context.getImageData(0, 0, 400, 400).data;

    var imageCounter = 0;
    var matchCounter = 0;
    for (var i = 0; i < imageData.length; i++) {
        if (imageData[i] === 77 && drawData[i] === 255) {
            matchCounter++;
        }
        if (imageData[i] === 0 && drawData[i] === 255) {
            matchCounter--;
        }
        if (imageData[i] === 77) {
            imageCounter++;
        }
    }
    console.log(matchCounter);

    var percentageMatch = (matchCounter / imageCounter * 100).toFixed(0).toString();

    if (percentageMatch < 0) {
        document.getElementById('negativeScore').style.display = "block";
    }
    else {
        document.getElementById('negativeScore').style.display = "none";
    }

    document.getElementById("score").innerText = percentageMatch + '%';
}



// Creating the four canvases 

// Canvas for drawing on the left
var canDraw = new Canvas("canDraw", "black");
document.getElementById('drawColumn').appendChild(canDraw.canvas);

// Canvas to draw the image on the right
var canImage = new Canvas("canImage", "black");
document.getElementById('imageColumn').appendChild(canImage.canvas);

// Canvas to overlay the left drawing on the right image
var canOverlay = new Canvas("canOverlay", "black");
document.getElementById('imageColumn').appendChild(canOverlay.canvas);

window.onload = function () {
    canImage.context.drawImage(imgArray[0], 50, 50)
}


function adjustViewport() {
    // Scaling for mobile phones on portrait
    if (screen.width < 760 && window.innerHeight > window.innerWidth) {
        document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0.9");
    }
    if (screen.width < 361 && window.innerHeight > window.innerWidth) {
        document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0.7");
    }

    // Scaling for mobile phones on landscape
    if (screen.width < 1000 && window.innerWidth > window.innerHeight) {
        document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0.9");
    }
    if (screen.width < 680 && window.innerWidth > window.innerHeight) {
        document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0.7");
    }
}

adjustViewport();

window.addEventListener('orientationchange', adjustViewport);