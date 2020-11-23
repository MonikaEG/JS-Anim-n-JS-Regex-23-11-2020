'use strict';

/**
 * Unidentified movable object, version 0.9.1
 */
export class Umo {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.r = Math.random() * 9 + 3;
        this.x = Math.random() * (this.canvas.getWidth() - this.r - 2);
        this.y = Math.random() * (this.canvas.getHeight() - this.r - 2);
        this.dx = Math.random() * 3;
        this.dy = Math.random() * 3;
        this.color = color;
    }

    draw() {
        this.canvas.getContext().beginPath();
        this.canvas.getContext().strokeStyle = '#222';
        this.canvas.getContext().fillStyle = this.color;
        this.canvas.getContext().arc(this.x, this.y, this.r,
                                     0, Math.PI * 2,
                                     false);
        this.canvas.getContext().fill();
        this.canvas.getContext().stroke();
        this.canvas.getContext().closePath();
    }

    // Wall collision detection?
    move() {
        if (this.x + this.dx + this.r > this.canvas.getWidth()
                || this.x + this.dx - this.r < 0)
              this.dx = -this.dx;
        if (this.y + this.dy + this.r > this.canvas.getHeight()
                || this.y + this.dy - this.r < 0)
              this.dy = -this.dy;

    // Makes the objects move
        this.x += this.dx;
        this.y += this.dy;
    }

};
