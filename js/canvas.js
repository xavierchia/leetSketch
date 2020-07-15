
// Canvas constructor
var Canvas = function (canvasID, color = "black") {
  this.canvas = document.createElement("canvas");
  this.canvas.id = canvasID;
  this.canvas.width = 400;
  this.canvas.height = 400;
  this.canvas.style.border = "1px solid";
  this.canvas.style.position = "absolute";
  this.context = this.canvas.getContext("2d");
  this.prevX = 0;
  this.prevY = 0;
  this.currX = 0;
  this.currY = 0;
  this.isMousePressed = false;
  this.penColor = color;
  this.penSize = 8;
  this.imageVisible = true;
  this.backupImage = false;
  this.backupImageArray = [];
  this.level = 1;

  // Adding event listeners for mouse, touch, and pointer

  this.isTouchSupported = 'ontouchstart' in window;
  this.isPointerSupported = navigator.pointerEnabled;
  this.isMSPointerSupported = navigator.msPointerEnabled;

  this.downEvent = this.isTouchSupported ? 'touchstart' : (this.isPointerSupported ? 'pointerdown' : (this.isMSPointerSupported ? 'MSPointerDown' : 'mousedown'));
  this.moveEvent = this.isTouchSupported ? 'touchmove' : (this.isPointerSupported ? 'pointermove' : (this.isMSPointerSupported ? 'MSPointerMove' : 'mousemove'));
  this.upEvent = this.isTouchSupported ? 'touchend' : (this.isPointerSupported ? 'pointerup' : (this.isMSPointerSupported ? 'MSPointerUp' : 'mouseup'));

  this.canvas.addEventListener(this.downEvent, function (e) {
    e.preventDefault();
    if (this.isTouchSupported) {
      e = e.targetTouches[0];
    }
    this.findxy("down", e)
  }.bind(this), false);
  this.canvas.addEventListener(this.moveEvent, function (e) {
    e.preventDefault();
    if (this.isTouchSupported) {
      e = e.targetTouches[0];
    }
    this.findxy("move", e)
  }.bind(this), false);
  this.canvas.addEventListener(this.upEvent, function (e) {
    e.preventDefault();
    if (this.isTouchSupported) {
      e = e.targetTouches[0];
    }
    this.findxy("up", e)
  }.bind(this), false);

  // Block right-click menu by preventing default action.
  this.canvas.addEventListener('contextmenu', function (e) {
    if (e.button === 2) {
      e.preventDefault();
    }
  });

  // Drawing when the mouse/touch is being moved after pressed
  this.draw = function () {
    this.context.beginPath();
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.moveTo(this.prevX, this.prevY);
    this.context.lineTo(this.currX, this.currY);
    this.context.strokeStyle = this.penColor;
    this.context.lineWidth = this.penSize;
    this.context.stroke();
    this.context.closePath();
  };

  this.erase = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  // Copies the drawing from this canvas to the target canvas
  this.overlay = function (targetCanvas) {
    targetCanvas.context.drawImage(this.canvas, 0, 0);
  };

  // What should happen when the mouse/touch events are different
  this.findxy = function (res, e) {

    // Update coordinates when the mouse/touch is pressed
    if (res == 'down') {
      this.backupImageArray.push(this.backup());
      this.prevX = this.currX;
      this.prevY = this.currY;
      var canvasBoundary = this.canvas.getBoundingClientRect();
      this.currX = e.clientX - canvasBoundary.left;
      this.currY = e.clientY - canvasBoundary.top;

      this.isMousePressed = true;
      this.context.beginPath();
      this.context.fillStyle = this.penColor;
      this.context.fillRect(this.currX-4, this.currY-4, this.penSize, this.penSize);
      this.context.closePath();
      if (this.level === 1) doneDrawing();
    }

    // Mouse/touch is no longer pressed
    if (res == 'up') {
      this.isMousePressed = false;
      if (this.level !== 1) doneDrawing();
      updateScore();
    }

    // It should draw if mouse/touch is pressed and is moving
    if (res == 'move') {
      if (this.isMousePressed) {
        this.prevX = this.currX;
        this.prevY = this.currY;
        var canvasBoundary = this.canvas.getBoundingClientRect();
        this.currX = e.clientX - canvasBoundary.left;
        this.currY = e.clientY - canvasBoundary.top;
        this.draw();
        if (this.level === 1) doneDrawing();
      }
    }
  };

  this.toggleImage = function () {
    if (this.imageVisible) {
      this.backupImage = this.backup();
      this.erase();
      this.imageVisible = false;
    }
    else {
      this.context.drawImage(this.backupImage.canvas, 0, 0);
      this.imageVisible = true;
    }
  };

  // Backup image if you want to make changes
  this.backup = function () {
    var canBack = new Canvas('canBack');
    canBack.context.drawImage(this.canvas, 0, 0);
    return canBack;
  }

  this.changeOpacity = function (number) {
    var canBack = this.backup();
    this.context.save();
    this.erase();
    this.context.globalAlpha = number;
    this.context.drawImage(canBack.canvas, 0, 0);
    this.context.restore();
  };
}