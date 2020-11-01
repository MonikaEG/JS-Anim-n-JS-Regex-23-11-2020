//Laver tomme arrays til at starte med.
var songTitle=new Array();
var albumTitle=new Array();
var year=new Array();
var writers=new Array();
var mainPerformers=new Array();

function insert(){
    var titleValue = document.getElementById('songTitle').value;
    var albumValue = document.getElementById('albumTitle').value;
    var yearValue = document.getElementById('year').value;
    var writersValue = document.getElementById('writers').value;
    var performersValue = document.getElementById('mainPerformers').value;
    songTitle[songTitle.length]=titleValue;
    albumTitle[albumTitle.length]=albumValue;
    year[year.length]=yearValue;
    writers[writers.length]=writersValue;
    mainPerformers[mainPerformers.length]=performersValue;
  }

//Funktioner til at tjekke og gemme de indtastede data/inputs.
function show() {
  var content="<b>Your saved inputs:</b><br>";
    for(var i = 0; i < songTitle.length; i++) {
     content +=songTitle[i]+"<br>";
  }
    for(var i = 0; i < albumTitle.length; i++) {
     content +=albumTitle[i]+"<br>";
  }
    for(var i = 0; i < year.length; i++) {
     content +=year[i]+"<br>";
  }
    for(var i = 0; i < writers.length; i++) {
     content +=writers[i]+"<br>";
  }
    for(var i = 0; i < mainPerformers.length; i++) {
     content +=mainPerformers[i]+"<br>";
  }
  
  document.getElementById('display').innerHTML = content; //Fremviser mit script på siden.
}
