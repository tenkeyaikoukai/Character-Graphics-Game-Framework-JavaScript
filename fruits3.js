
var pxmtx=new Array(4,9,14);
var fruit=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var rmtx=new Array(6,5,4,6,5,4,5,4,3,5,4,3,4,3,2,4,3,2);
var rnum=0;
var rn=0;
var px=pxmtx[2];
var mx=2;
var sc=0;
var ct=0;
var miss=0;
var rseed=6;
var waittimer=0;
function init(){

puttrees();
settimer(330);

}
function puttree(x,y,leg){
color(4);
put(chr5,x+1,y);
put(chr3,x+2,y);
put(chr4,x+3,y);
put(chr5,x+1,y+1);
put(chr3,x+2,y+1);
put(chr4,x+3,y+1);
put(chr5,x,y+2);
put(chr3,x+1,y+2);
put(chr3,x+2,y+2);
put(chr3,x+3,y+2);
put(chr4,x+4,y+2);
color(2);
for(var i=1;i<=leg;i++){
put(chr3,x+2,y+3+i-1);
}

}
function routine(){
if(waittimer>0){waittimer--;}else{
fruitset();
cls();
beep(1);
puttrees();
color(3);
ct++;
if(ct>=3){ct=0;}

for(var i=4;i>=0;i--){
fruit[(i+1)*3+ct]=fruit[i*3+ct];
}

fruit[ct]=0;
if(fruit[15+ct]>0 && mx==ct){
beep(0);fruit[15+ct]=0;sc++;
if(sc%20==0 || sc%80==0 || (sc>=100 && sc%100==0)){
rnum++;rseed=rmtx[rnum];
if(rnum==17){rnum=14;}
}
} 
else{if(fruit[15+ct]>0){miss++;
waittimer=3;
if(waittimer==3){beep(2);}
if(miss>=3){cleartimer();put(chr2,pxmtx[ct],17);}}}
fruitdraw();

color(6);put(chrv,pxmtx[mx],15);
color(7);
put(chrs,1,19);
put(chrc,2,19);
put(chro,3,19);
put(chrr,4,19);
put(chre,5,19);
color(7);
putscore();
if(miss>=1){drawmiss();}
}
}
function keyin(keychr){
color(0);put(chr3,pxmtx[mx],15);
if(keychr=="left" && mx>=1){mx--;}
if(keychr=="right" && mx<=1){mx++;}
color(6);put(chrv,pxmtx[mx],15);

}
function putscore(){

var cursc,modsc;
modsc=sc%10;
putnumchr(modsc,9,19);
cursc=Math.floor(sc/10);
modsc=cursc%10;
putnumchr(modsc,8,19);
cursc=Math.floor(cursc/10);
modsc=cursc%10;
putnumchr(modsc,7,19);
}
function putnumchr(num,x,y){
if(num==0){put(chrnum0,x,y);}
if(num==1){put(chrnum1,x,y);}
if(num==2){put(chrnum2,x,y);}
if(num==3){put(chrnum3,x,y);}
if(num==4){put(chrnum4,x,y);}
if(num==5){put(chrnum5,x,y);}
if(num==6){put(chrnum6,x,y);}
if(num==7){put(chrnum7,x,y);}
if(num==8){put(chrnum8,x,y);}
if(num==9){put(chrnum9,x,y);}
}
function puttrees(){
var x=3;
var y=3;
puttree(x,y,9);
x=8;y=5;
puttree(x,y,7);
x=13;y=7;
puttree(x,y,5);
}
function fruitset(){
var r=Math.floor(Math.random()*rseed);
if(r==1){fruit[ct+ct*3]=1;}
}
function fruitdraw(){
for(i=0;i<=15;i++){
var py=Math.floor(i/3)*2+6;
if(fruit[i]==1){put(chrname("heart"),pxmtx[i%3],py);}
}
}
function drawmiss(){
put(chrm,11,19);
put(chri,12,19);
put(chrs,13,19);
put(chrs,14,19);
put(chrname("spade"),16,19);
if(miss>=2){put(chrname("spade"),17,19);}
if(miss>=3){put(chrname("spade"),18,19);}
}