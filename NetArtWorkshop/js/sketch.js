var x1 = 0;
var x2 = 0;
var y1= 0;
var y2= 0;
var r=0;

function setup() {
  createCanvas(300, 300);
  colorMode(HSB);
  
}

function draw() {

  background(x1,50,150,120);
  fill(150,x1,x1);
  circle(x1,50,50);
   
  
    x1 = x1 + 1 
     var r = random (200);
  var y2 = random (100);
  
  if (x1> 300) {;
  x1 = 0;
  
 
                
  
 // console.log (x1);
  
 // console.log (r);               
              
}
 line(50,50,r,y2); 
  fill(y2,x1,r);
  circle(100,200,y2);
  
}