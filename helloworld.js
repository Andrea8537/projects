console.log("Hello world");

// var h1tag = document.getElementsByTagName("h1")[0];
//
// document.getElementsByTagName("headings")
//
// var loc = document.getElementsByTagName("headings")[3];

var adjectives=["cool", "funny", "pretty", "happy", "amazing", "lovely", "wonderful"];
var pos=0;


var loc = document.getElementById("adjective");

function changeAdj(){
  loc.innerHTML = adjectives[pos];
  pos++;
  if (pos>= adjectives.length){
    pos=0;
  }
}
Math.random()
var x =document.getElementsByTagName("body")[0]

function colorfulBackground(){
  x.setAttribute("style", `background-color:rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
}
// x.setAttribute("onmousehover", colorfulbackground());
