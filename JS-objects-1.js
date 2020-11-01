'use strict';

class Planet {
    constructor(distance, siderealPeriod, synodicPeriod, eccentricity, orbitalInclination) { //Laver et objekt til alle planeter.
    this.distance = distance;
    this.siderealPeriod = siderealPeriod;
    this.synodicPeriod = synodicPeriod;
    this.eccentricity = eccentricity
    this.orbitalInclination = orbitalInclination;
    }

    getDistance() {
        return this.distance;
    }

    toString() {
        let s = 'Distance: ' + this.getDistance();
        s += '<br> Sidereal period: ' + this.siderealPeriod;
        s += '<br> Synodic period: ' + this.synodicPeriod;
        s += '<br> Eccentricity: ' + this.eccentricity
        s += '<br> Orbital inclination: ' + this.orbitalInclination;
        return s;
    }
}

let theSun = new Planet('','','','',''); //Ingen values til Solen.
let Mercury = new Planet('0.3871 AU','0.2408 years','115.88 days','0.206','7.00°'); //Values til Mercury.
let Venus = new Planet('0.7233 AU','0.6152 years','583.92 days','0.007','3.39°'); //Values til Venus.
let Earth = new Planet('1.0000 AU','1.0000 years','','0.017','0.00°'); //Values til Earth.
let Mars = new Planet('1.5237 AU','1.8809 years','779.94 days','0.093','1.85°'); //Values til Mars.
let Jupiter = new Planet('5.2028 AU','11.862 years','398.9 days','0.048','1.31°') //Values til Jupiter.
let Saturn = new Planet('9.5388 AU','29.458 years','378.1 days','0.056','2.49°') //Values til Saturn.
let Uranus = new Planet('19.1914 AU','84.01 years','369.7 days','0.046','0.77°') //Values til Uranus.
let Neptune = new Planet('30.0611 AU','164.79 years','367.5 days','0.010','1.77°') //Values til Neptune.
let Pluto = new Planet('39.5294 AU','248.5 years','366.7 days','0.248','17.15°') //Values til Pluto.

document.getElementById("demo").innerHTML = theSun.toString(); //Viser mit script på hjemmesiden.
document.getElementById("demo2").innerHTML = Mercury.toString();
document.getElementById("demo3").innerHTML = Venus.toString();
document.getElementById("demo4").innerHTML = Earth.toString(); 
document.getElementById("demo5").innerHTML = Mars.toString(); 
document.getElementById("demo6").innerHTML = Jupiter.toString();
document.getElementById("demo7").innerHTML = Saturn.toString();
document.getElementById("demo8").innerHTML = Uranus.toString();
document.getElementById("demo9").innerHTML = Neptune.toString();
document.getElementById("demo10").innerHTML = Pluto.toString();


