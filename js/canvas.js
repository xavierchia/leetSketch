
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
  this.penSize = 3;
  this.imageVisible = true;
  this.backupImage = false;

  // Event listeners for desktop mouse
  this.canvas.addEventListener("mousemove", function (e) {
    this.findxy("move", e)
  }.bind(this), false);
  this.canvas.addEventListener("mousedown", function (e) {
    this.findxy("down", e)
  }.bind(this), false);
  this.canvas.addEventListener("mouseup", function (e) {
    this.findxy("up", e)
  }.bind(this), false);
  this.canvas.addEventListener("mouseout", function (e) {
    this.findxy("out", e)
  }.bind(this), false);

  // Event listeners for touch screens
  this.canvas.addEventListener("touchstart", function(e) {
    e.preventDefault();
    this.findxy("down", e)
  }.bind(this), false);
  this.canvas.addEventListener("touchmove", function(e) {
    e.preventDefault();
    this.findxy("move", e)
  }.bind(this), false);
  this.canvas.addEventListener("touchend", function(e) {
    this.findxy("up", e)
  }.bind(this), false);
  this.canvas.addEventListener("touchcancel", function(e) {
    this.findxy("out", e)
  }.bind(this), false);


  // Drawing when the mouse is being moved after pressed
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

  // What should happen when the mouse events are different
  this.findxy = function (res, e) {

    // Create a rectangle when the mouse is pressed
    if (res == 'down' && e.button === 0) {
      e.preventDefault();
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.currX = e.clientX - this.canvas.offsetLeft;
      this.currY = e.clientY - this.canvas.offsetTop;

      this.isMousePressed = true;
      this.context.beginPath();
      this.context.fillStyle = this.penColor;
      this.context.fillRect(this.currX, this.currY, this.penSize, this.penSize);
      this.context.closePath();
    }

    // Mouse is no longer pressed or cursor has left canvas boundary
    if (res == 'up' || res == "out") {
      e.preventDefault();
      this.isMousePressed = false;
    }

    // It should draw if mouse is pressed and mouse is moving
    if (res == 'move') {
      e.preventDefault();
      if (this.isMousePressed) {
        this.prevX = this.currX;
        this.prevY = this.currY;
        this.currX = e.clientX - this.canvas.offsetLeft;
        this.currY = e.clientY - this.canvas.offsetTop;
        this.draw();
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