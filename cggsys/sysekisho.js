var ctx=document.getElementById("cvs").getContext("2d");
var timercount=200;
var timerctx;
var chrmtx=new Array();
var wait=false;
window.onload=(function(){
//vraminit();
document.onkeydown=getkeychr;
document.onkeyup=keyclr;
document.onmousedown=getmouse;
init();
timerctx=setInterval("routine();",timercount);
});

function settimer(t){
timercount=t;
}
function cleartimer(){
clearInterval(timerctx);
}

function peek(x,y){
//return chr;
}
function beep(mode){
switch(mode){
case 0:
alerm.play();
break;
case 1:
clck.play();
break;
default:
break;
}
}
function putc(chrcode,chrctx,cx,cy){
var i,j;
for(i=0;i<=chrctx[2]-1;i++){
for(j=0;j<=chrctx[1]-1;j++){
if(chrcode[i*chrctx[1]+j]==1){
ctx.fillRect((cx+j)*4,(cy+i)*4,3,3);
}

}
}


}
function color(cc){
/*
switch(cc){
case 0:
ctx.fillStyle="rgb(0,0,0)";
break;
case 1:
ctx.fillStyle="rgb(0,0,255)";
break;
case 2:
ctx.fillStyle="rgb(255,0,0)";
break;
case 3:
ctx.fillStyle="rgb(255,0,255)";
break;
case 4:
ctx.fillStyle="rgb(0,255,0)";
break;
case 5:
ctx.fillStyle="rgb(0,255,255)";
break;
case 6:
ctx.fillStyle="rgb(255,255,0)";
break;
case 7:
ctx.fillStyle="rgb(255,255,255)";
break;
default:
break;
}
*/
ctx.fillStyle="rgb(0,0,0)";

}
function cls(){
ctx.fillStyle="rgb(100,100,100)";
ctx.fillRect(0,0,640,420);
}
function getkeychr(ev){

evt=ev.which
keychr=String.fromCharCode(evt).toLowerCase();
if(evt==39){keychr="right";}
if(evt==37){keychr="left";}
if(evt==40){keychr="down";}
if(evt==38){keychr="up";}
if(evt==13){keychr="cr";wait=false;}

keyin(keychr);
}
function getmouse(ev){
var keychr;
if(ev.pageX>320){keychr="right";}else{keychr="left";}
keyin(keychr);
}
function keyclr(){
keychr="";
}
function printw(str){
println(str);
while(wait){
var muda=0;
muda++;
}
}
function setchrscreen(){
var i,j;
for(i=0;i<=19;i++){
for(j=0;j<=19;j++){
chrmtx[i*20+j]=0;
}
}
}
function setchrmode(){
}
function chrmove(){
}
function chrscreen(){
}
function scrollup(){
for (i=18 ; i>=0 ;i--){
for (j = 0 ;j<=19 ;j++){
chrmtx[(i+1)*20+j] = chrmtx[i*20+j];
}
}  
for(i=0;i<=19;i++){
chrmtx[19*20+i]=0;
}
}
function scrolldown(){
for (i=0 ; i<=18 ;i++){
for (j = 0 ;j<=19 ;j++){
chrmtx[i*20+j] = chrmtx[(i+1)*20+j];
}
}  
for(i=0;i<=19;i++){
chrmtx[i]=0;
}
}
function println(str){
ctx,fillStyle="rgb(255,255,255)";
ctx.font="16px 'MSƒSƒVƒbƒN'";
ctx.fillText(str,10,405);
}