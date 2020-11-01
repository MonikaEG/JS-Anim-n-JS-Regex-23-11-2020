const svg = document.querySelector('svg');

const svgns = 'http://www.w3.org/2000/svg';

//GRØNLAND
//Rektangler til Grønlands flag.
let rec0 = document.createElementNS(svgns, 'rect');
rec0.setAttribute('x', '0');
rec0.setAttribute('y', '0');
rec0.setAttribute('width', '300');
rec0.setAttribute('height', '100');
rec0.setAttribute('fill', 'beige');

svg.appendChild(rec0); //Får den tilhørende SVG frem på hjemmesiden.

let rec1 = document.createElementNS(svgns, 'rect');
rec1.setAttribute('x', '0');
rec1.setAttribute('y', '100');
rec1.setAttribute('width', '300');
rec1.setAttribute('height', '100');
rec1.setAttribute('fill', 'red');

svg.appendChild(rec1); //Får den tilhørende SVG frem på hjemmesiden.

//Halvcirkler til Grønlands flag.
let upperC = document.createElementNS(svgns, 'path');
upperC.setAttribute("d", "M 58, 100 a1, 1 0 0, 1 100, 0"); //Bestemmer koordinaterne af path. M står for "move to", tror jeg.
upperC.setAttribute("fill", "red");

svg.appendChild(upperC);

let lowerC = document.createElementNS(svgns, 'path');
lowerC.setAttribute("d", "M 58, 100 a1, 1 0 0, 0 100, 0") //Bestemmer koordinaterne af path. M står for "move to", tror jeg.
lowerC.setAttribute("fill", "beige");

svg.appendChild(lowerC);




