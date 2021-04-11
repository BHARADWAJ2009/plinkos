var World = Matter.World;
var Engine = Matter.Engine;
var Body = Matter.Body;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
var Particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight = 300;

function setup () {
  
  //1st PLINKOS
  for (var j=40; j<=innerWidth;j=j+50){
    plinkos.push(new Plinko(j,75));

}

//2nd PLINKOS
  for (var j=40; j<=innerWidth;j=j+50){
    plinkos.push(new Plinko(j,150));
  }
// 3rd PLINKOS
for (var j=40; j<=innereWidth;j=j+50){
  plinkos.push(new Plinko(j,150));
}  
// 4th PLINKOS
for (var j=40; j<=innerwidth;j=j+50){
  plinkos.push(new Plinko(j,150));
}
// DIVISONS
 for (var k=0;k<=100;k=k+80){
   divisions.push(new Divisons(k,height-divisonHeight/2,10,divisionHeight));
 }

  
}

function draw (){
  background(0)

//1st PLINKOS
for (var i=0;plinkos.length;i++) {
plinkos[i].display();
}

for (var i=0;divisions.length;i++) {
  divisions[i].display();
  }
  

   
  


}