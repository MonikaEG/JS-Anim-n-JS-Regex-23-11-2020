'use strict';
import {Canvas} from './nmlCanvas.js'
import {Umo} from './nmlUmo0.js'
import {newRect} from './myNewRect.js'

var c0;
var c1;
var c2;
var c3;
var c4;
var r5;
var r6;
var r7;
var r8;
var r9;
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
    r5.moveRect();              // move thing ie change coordinates
    r5.drawRect();              // draw thing
    r6.moveRect();              // move thing ie change coordinates
    r6.drawRect();              // draw thing
    r7.moveRect();              // move thing ie change coordinates
    r7.drawRect();              // draw thing
    r8.moveRect();              // move thing ie change coordinates
    r8.drawRect();              // draw thing
    r9.moveRect();              // move thing ie change coordinates
    r9.drawRect();              // draw thing
    
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
    r5 = new newRect(canvas, '#B9E8EA');
    r6 = new newRect(canvas, '#86D6D8');
    r7 = new newRect(canvas, '#3FD0D4');
    r8 = new newRect(canvas, '#22C6F0');
    r9 = new newRect(canvas, '#7A4988');
    repeater();
}

var nml = window.addEventListener('load', init);
