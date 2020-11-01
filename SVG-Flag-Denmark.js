const svg = document.querySelector('svg');

const svgns = 'http://www.w3.org/2000/svg';

//DANMARK
//Rektangler til Danmarks flag.
let rec3 = document.createElementNS(svgns, 'rect');
rec3.setAttribute('x', '0');
rec3.setAttribute('y', '0');
rec3.setAttribute('width', '300');
rec3.setAttribute('height', '200');
rec3.setAttribute('fill', 'red');

svg.appendChild(rec3); //Får den tilhørende SVG frem på hjemmesiden.

//Hvidt kors
let rec4 = document.createElementNS(svgns, 'rect');
rec4.setAttribute('x', '0');
rec4.setAttribute('y', '90');
rec4.setAttribute('width', '300');
rec4.setAttribute('height', '20');
rec4.setAttribute('fill', 'beige');

svg.appendChild(rec4); //Får den tilhørende SVG frem på hjemmesiden.

let rec5 = document.createElementNS(svgns, 'rect');
rec5.setAttribute('x', '110');
rec5.setAttribute('y', '0');
rec5.setAttribute('width', '20');
rec5.setAttribute('height', '200');
rec5.setAttribute('fill', 'beige');

svg.appendChild(rec5); //Får den tilhørende SVG frem på hjemmesiden.

