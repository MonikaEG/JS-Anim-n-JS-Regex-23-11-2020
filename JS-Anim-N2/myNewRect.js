'use strict';

// Draw random rectangles
export class newRect {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.dx = Math.random() * 3;
        this.dy = Math.random() * 3;
    
        this.width = Math.random() * 30 + 3;
        this.height = Math.random() * 30 + 3;
    
        this.x = Math.random() * ( this.canvas.getWidth() - this.width );
        this.y = Math.random() * ( this.canvas.getHeight() - this.height);
        this.color = color;
    }

    drawRect() {
        this.canvas.getContext().beginPath();
        this.canvas.getContext().rect(10, 10, 30, 30);
        this.canvas.getContext().strokeStyle = '#222';
        this.canvas.getContext().fillStyle = this.color;
        this.canvas.getContext().fill();
        this.canvas.getContext().stroke();
        this.canvas.getContext().closePath();
    }

    // Wall collision detection?
   moveRect() {
    if ( this.x + this.dx + this.width > this.canvas.getWidth() ||
    this.x + this.dx - this.width < 0 )
    this.dx = -this.dx;
  if ( this.y + this.dy + this.height > this.canvas.getHeight() ||
    this.y + this.dy - this.height < 0 )
    this.dy = -this.dy;

    // Makes the objects move
    this.x += this.dx;
    this.y += this.dy;
    }

};
