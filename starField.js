class Particle {
	constructor(){
    this.x=0;
    this.y=0;
    this.target_x=0;
    this.target_y=0;
    this.angle=0;
    this.size=0.5;
    this.speed=5;
    this.spawn();
  }
  spawn(){
    this.x=spawnBox_x+(spawnBoxWidth*Math.random());
    this.y=spawnBox_y+(spawnBoxHeight*Math.random());
    this.target_x=((this.x-spawnBox_x)*scaleMultiplier_x)
    this.target_y=((this.y-spawnBox_y)*scaleMultiplier_y)+(window.innerHeight/2)-((spawnBoxHeight*(scaleMultiplier_y/2)));
    this.angle=Math.atan2((this.target_y-this.y),(this.target_x-this.x));
  }
	update(c){
    // Draw
    c.beginPath();
    c.arc(this.x,this.y,this.size,0,Math.PI * 2,false);
    c.strokeStyle = "white";
    c.stroke();
    c.fillStyle = "black";
    c.fill();
    c.closePath();
    // Movement
    this.x+=(this.speed*Math.cos(this.angle));
    this.y+=(this.speed*Math.sin(this.angle));
    //console.log("X:"+this.x+" Y:"+this.y+" Target: "+this.target_x+","+this.target_y);
    // Check respawn
    if (this.x>=window.innerWidth || this.y<0 || this.y>=window.innerHeight){
      this.spawn();
    }
    // Update Size
    this.size=(5+(this.x/window.innerWidth)*5);
	}
}
function init(){
  console.log("START");
  i=0;
  while(i<maxParticle){
    particles.push(new Particle());
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
var maxParticle=50;
var particles=[];
// Spawn Box
var scaleMultiplier_x=3;
var scaleMultiplier_y=6;
var spawnBoxWidth=window.innerWidth/scaleMultiplier_x;
var spawnBoxHeight=window.innerHeight/scaleMultiplier_y;
var spawnBox_x=0;
var spawnBox_y=(window.innerHeight/2)-(spawnBoxHeight/2);
init();
