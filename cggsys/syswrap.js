
function emove(){
}
function collide(){
}
function dispchr(){
}
function putn(){
}
function chrname(stg){
switch(stg){
case "circle":
return chr1;
break;
case "heart":
return chr2;
break;
case "fill":
return chr3;
break;
case "sw":
return chr4;
break;
case "se":
return chr5;
break;
case "wave":
return chr6;
break;
case "spade":
return chr7;
break;
case "sharp":
return chr8;
break;
case "star":
return chr9;
break;
case "flag":
return chr10;
break;
case "slash":
return chr11;
break;
case "backslash":
return chr12;
break;
case "nw":
return chr13;
break;
case "ne":
return chr14;
break;
case "block":
return chr15;
break;
case "brick":
return chr16;
break;
case "equal":
return chr17;
break;
case "point":
return chr18;
break;
default:
break;

}
}
function put(chrcode,cx,cy){
var chrctx=new Array(0,8,5);
putc(chrcode,chrctx,cx*8,cy*5);
}