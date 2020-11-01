const svg = document.querySelector('svg');

const svgns = 'http://www.w3.org/2000/svg';

//USA

//Base
let rec6 = document.createElementNS(svgns, 'rect');
rec6.setAttribute('x', '0');
rec6.setAttribute('y', '0');
rec6.setAttribute('width', '300');
rec6.setAttribute('height', '200');
rec6.setAttribute('fill', 'red');

svg.appendChild(rec6); //Får den tilhørende SVG frem på hjemmesiden.

//Hvide striber
let rec7 = document.createElementNS(svgns, 'rect');
rec7.setAttribute('x', '0');
rec7.setAttribute('y', '15.3');
rec7.setAttribute('width', '300');
rec7.setAttribute('height', '15.3');
rec7.setAttribute('fill', 'beige');

svg.appendChild(rec7); //Får den tilhørende SVG frem på hjemmesiden.

let rec8 = document.createElementNS(svgns, 'rect');
rec8.setAttribute('x', '0');
rec8.setAttribute('y', '45.9');
rec8.setAttribute('width', '300');
rec8.setAttribute('height', '15.3');
rec8.setAttribute('fill', 'beige');

svg.appendChild(rec8); //Får den tilhørende SVG frem på hjemmesiden.

let rec9 = document.createElementNS(svgns, 'rect');
rec9.setAttribute('x', '0');
rec9.setAttribute('y', '76.5');
rec9.setAttribute('width', '300');
rec9.setAttribute('height', '15.3');
rec9.setAttribute('fill', 'beige');

svg.appendChild(rec9); //Får den tilhørende SVG frem på hjemmesiden.

let rec10 = document.createElementNS(svgns, 'rect');
rec10.setAttribute('x', '0');
rec10.setAttribute('y', '107.1');
rec10.setAttribute('width', '300');
rec10.setAttribute('height', '15.3');
rec10.setAttribute('fill', 'beige');

svg.appendChild(rec10); //Får den tilhørende SVG frem på hjemmesiden.

let rec11 = document.createElementNS(svgns, 'rect');
rec11.setAttribute('x', '0');
rec11.setAttribute('y', '137.7');
rec11.setAttribute('width', '300');
rec11.setAttribute('height', '15.3');
rec11.setAttribute('fill', 'beige');

svg.appendChild(rec11); //Får den tilhørende SVG frem på hjemmesiden.

let rec12 = document.createElementNS(svgns, 'rect');
rec12.setAttribute('x', '0');
rec12.setAttribute('y', '168.3');
rec12.setAttribute('width', '300');
rec12.setAttribute('height', '15.3');
rec12.setAttribute('fill', 'beige');

svg.appendChild(rec12); //Får den tilhørende SVG frem på hjemmesiden.

//Blåt rektangel
let recBlu = document.createElementNS(svgns, 'rect');
recBlu.setAttribute('x', '0');
recBlu.setAttribute('y', '0');
recBlu.setAttribute('width', '140');
recBlu.setAttribute('height', '107.1');
recBlu.setAttribute('fill', 'darkblue');

svg.appendChild(recBlu); //Får den tilhørende SVG frem på hjemmesiden.

//"Stjerner"
let circ1 = document.createElementNS(svgns, 'path');
circ1.setAttribute("d", "M 40, 25 m -15, 0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0"); //De koordinater, som path går igennem for at her danne en cirkel. De to første tal er x- og y-akser. 15 er radius på cirklen her.
circ1.setAttribute("fill", "beige");

svg.appendChild(circ1);

let circ2 = document.createElementNS(svgns, 'path');
circ2.setAttribute("d", "M 100, 25 m -15, 0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0"); //De koordinater, som path går igennem for at her danne en cirkel. De to første tal er x- og y-akser. 15 er radius på cirklen her.
circ2.setAttribute("fill", "beige");

svg.appendChild(circ2);

let curv1 = document.createElementNS(svgns, 'path');
curv1.setAttribute("d", "M 20, 50 a1, 1 0 0, 0 100, 0")
curv1.setAttribute("fill", "beige");

svg.appendChild(curv1);