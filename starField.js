class Particle {
	constructor(){
    this.x=0;
    this.y=0;
    this.target_x=0;
    this.target_y=0;
    this.angle=0;
    this.size=0.5;
    this.vel=5;
    this.accel=0;
    this.spawn();
  }
  spawn(){
    var randomRadians=Math.random()*(Math.PI*2);
    var randomHypot=Math.random()*spawnRadius;
    this.x=spawn_x+(randomHypot*Math.cos(randomRadians));
    this.y=spawn_y+(randomHypot*Math.sin(randomRadians));
    this.target_x=spawn_x+(10*randomHypot*Math.cos(randomRadians));
    this.target_y=spawn_y+(10*randomHypot*Math.sin(randomRadians));
    this.angle=Math.atan2((this.target_y-this.y),(this.target_x-this.x));
  }
	update(c){
    // Draw
    c.beginPath();
    c.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    c.strokeStyle = "white";
    c.stroke();
    c.fillStyle = "black";
    c.fill();
    c.closePath();
    // Movement
    this.x+=(this.vel*Math.cos(this.angle));
    this.y+=(this.vel*Math.sin(this.angle));
    //console.log("X:"+this.x+" Y:"+this.y+" Target: "+this.target_x+","+this.target_y);
    // Check respawn
    if (this.x>=window.innerWidth || this.y<0 || this.y>=window.innerHeight){
      this.spawn();
    }
    // Update Size
    //this.size=(1+(this.x/window.innerWidth)*1);
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
  c.arc(spawn_x,spawn_y,spawnRadius,0,Math.PI * 2,false);
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
var maxParticle=100;
var particles=[];
// Spawn Circle
var spawn_x=window.innerWidth/2;
var spawn_y=window.innerHeight/2;
var spawnRadius=100;
init();
