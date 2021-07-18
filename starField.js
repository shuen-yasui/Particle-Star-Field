class Particle {
	constructor(){
	}
	update(){
	}
}
function init(){
	update();
}
function update(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
  c.beginPath();
  c.arc(window.innerWidth/2,window.innerHeight/2,10,0,Math.PI * 2,false);
  c.strokeStyle = "white";
  c.stroke();
  c.fillStyle = "black";
  c.fill();
  c.closePath();
	requestAnimationFrame(update);
}
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
init();
