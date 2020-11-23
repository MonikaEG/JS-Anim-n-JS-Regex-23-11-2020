'use strict';
import {Canvas} from './nmlCanvas.js'
import {Umo} from './nmlUmo0.js'

var c0;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;
var canvas;

/** Redraws as many circles as I make (c0, c1, c2, c3, etc.) **/
const redraw = function () {
    canvas.clear();         // clear canvas
    canvas.prep();          // prep canvas with background color
    c0.move();              // move thing ie change coordinates
    c0.draw();              // draw thing
    c1.move();              // move thing ie change coordinates
    c1.draw();              // draw thing
    c2.move();              // move thing ie change coordinates
    c2.draw();              // draw thing
    c3.move();              // move thing ie change coordinates
    c3.draw();              // draw thing
    c4.move();              // move thing ie change coordinates
    c4.draw();              // draw thing
    c5.move();              // move thing ie change coordinates
    c5.draw();              // draw thing
    c6.move();              // move thing ie change coordinates
    c6.draw();              // draw thing
    c7.move();              // move thing ie change coordinates
    c7.draw();              // draw thing
    c8.move();              // move thing ie change coordinates
    c8.draw();              // draw thing
    c9.move();              // move thing ie change coordinates
    c9.draw();              // draw thing
    
}

const repeater = function () {
    setInterval(redraw, 10);
}

/** Create and customize the balls (and canvas color) **/
const init = function () {
    canvas = new Canvas('canvas', '#D2EEF3');
    c0 = new Umo(canvas, '#B19CD9');
    c1 = new Umo(canvas, '#CDB7F6');
    c2 = new Umo(canvas, '#E9D3FF');
    c3 = new Umo(canvas, '#FFEFFF');
    c4 = new Umo(canvas, '#FFFFFF');
    c5 = new Umo(canvas, '#B9E8EA');
    c6 = new Umo(canvas, '#86D6D8');
    c7 = new Umo(canvas, '#3FD0D4');
    c8 = new Umo(canvas, '#22C6F0');
    c9 = new Umo(canvas, '#7A4988');
    repeater();
}

var nml = window.addEventListener('load', init);
