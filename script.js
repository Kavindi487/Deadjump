const audio=new Audio();
audio.src="click.mp3";

var zgirl=document.getElementById("zgirl");
var gWalkImageNumber=1;
var gWalkTaskNumber=0;
function zombieG(){
    gWalkImageNumber=gWalkImageNumber+1;
    if(gWalkImageNumber==11){
        gWalkImageNumber=1;
    }
    zgirl.src="Walk. ("+gWalkImageNumber+").png";
}
function zombieGStart(){
    gWalkTaskNumber=setInterval(zombieG,100);
    
    
}

var zboy=document.getElementById("zboy");
var bWalkImageNumber=1;
var bWalkTaskNumber=0;
function zombieB(){
    bWalkImageNumber=bWalkImageNumber+1;
    if(bWalkImageNumber==11){
        bWalkImageNumber=1;
    }
    zboy.src="Walk ("+bWalkImageNumber+").png";
}
function zombieBStart(){
    bWalkTaskNumber=setInterval(zombieB,100);
    
}



var girl=document.getElementById("girl");
var meleeImageNumber=1;
var meleeTaskNumber=0;

function melee(){
    meleeImageNumber=meleeImageNumber+1;
    if(meleeImageNumber==8){
        meleeImageNumber=1;
    }
    girl.src="Melee ("+meleeImageNumber+").png";
}
function meleeStart(){
    meleeTaskNumber=setInterval(melee,100);
    
}

// function close() {
//     audio.play();
    
//     setTimeout(function(){
//         window.close();
//     },3000);
// }
// function windowClose() {
//     setTimeout(function(){
//     self.close();
//  },2000); 
//  }
