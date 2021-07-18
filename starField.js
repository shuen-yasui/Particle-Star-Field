class Particle {
	constructor(){
    this.x=window.innerWidth/2;
    this.y=window.innerHeight/2;
    this.size=1;
	}
	update(c){
    c.beginPath();
    c.arc(this.x,this.y,this.size,0,Math.PI * 2,false);
    c.strokeStyle = "white";
    c.stroke();
    c.fillStyle = "black";
    c.fill();
    c.closePath();
    this.x+=5;
    if (this.x>=window.innerWidth){
      this.x=0;
    }
    this.size=(5+(this.x/window.innerWidth)*20);
	}
}
function init(){
  console.log("START");
  particles.push(new Particle())
	update();
}
function update(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
	requestAnimationFrame(update);
  for (var i=0;i<particles.length;i++){
    P=particles[i]
    P.update(c)
  }
}
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var particles=[]
init();
