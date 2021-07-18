class Particle {
	constructor(sX,sY){
    this.x=sX;
    this.y=sY;
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
  i=0;
  while(i<maxParticle){
    spawnX=spawnBox_x+(spawnBoxWidth*Math.random());
    spawnY=spawnBox_y+(spawnBoxHeight*Math.random());
    particles.push(new Particle(spawnX,spawnY));
    i+=1
  }
	update();
}
function update(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
  // Draw starting rect
  c.beginPath();
  c.rect(spawnBox_x,spawnBox_y,spawnBoxWidth,spawnBoxHeight);
  c.strokeStyle = "white";
  c.stroke();
  c.closePath();
  // Update
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
var maxParticle=10;
var particles=[];
// Spawn Box
var spawnBoxWidth=window.innerWidth/6;
var spawnBoxHeight=window.innerHeight/6;
var spawnBox_x=0;
var spawnBox_y=(window.innerHeight/2)-(spawnBoxHeight/2);
init();
