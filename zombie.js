var jumpSound=new Audio("jump.mp3");
var deadSound=new Audio("dead.mp3");
var shootSound=new Audio("shoot.mp3");
var vehicleSound=new Audio("vehicleSound.wav");
var backgroundSound=new Audio("zombie.mp3"); 


function keyCheck(event){
    var k=event.which;
    if(k==13){
       
        if(runTaskNumber==0){
            runTaskNumber=setInterval(run,100);
            backgroundSound.play();
            vehicleSound.play();

            clearInterval(idleTaskNumber);
            backgroundTaskNumber=setInterval(background,100);
            boxTaskNumber=setInterval(moveBoxes,100);           
            
        }
      
        
        
    }
    if(k==32){
        
        
        if(jumpTaskNumber==0){
            jumpTaskNumber=setInterval(jump,170);
            backgroundSound.play();
            vehicleSound.play();
            jumpSound.play();
            clearInterval(idleTaskNumber);
            clearInterval(runTaskNumber);
        }
      
    }
    if(k==83){
 
        
        if(shootTaskNumber==0){
            shootTaskNumber=setInterval(shoot,200);
            clearInterval(idleTaskNumber);
            clearInterval(jumpTaskNumber);
            clearInterval(runTaskNumber);
            clearInterval(backgroundTaskNumber);
            backgroundSound.play();
            vehicleSound.play();
            shootSound.play();
        }
    }
}

var idleImageNumber=1;
var idleTaskNumber=0;
function idle(){
    idleImageNumber=idleImageNumber+1;

    if(idleImageNumber==11){
        idleImageNumber=1;
    }
    document.getElementById("girl").src="Idle ("+idleImageNumber+").png";
}
function idleStart(){
    idleTaskNumber=setInterval(idle,100);
}

var runImageNumber=0;
var runTaskNumber=0;
var score=0;
function run(){

    score=score+1;
    document.getElementById("score").innerHTML=score;
    runImageNumber=runImageNumber+1;

    if(runImageNumber==9){
        runImageNumber=1;
    }
    
    document.getElementById("girl").src="Run ("+runImageNumber+").png";
}

var girlMarginTop=450;
var jumpImageNumber=1;
var jumpTaskNumber=0;
function jump(){
    score=score+2;
    document.getElementById("score").innerHTML=score;

    if(jumpImageNumber<=5){
        girlMarginTop=girlMarginTop-80;
        document.getElementById("girl").style.marginTop=girlMarginTop+"px";

    }
    if(jumpImageNumber>=6){
        girlMarginTop=girlMarginTop+80;
        document.getElementById("girl").style.marginTop=girlMarginTop+"px";
    }
    jumpImageNumber=jumpImageNumber+1;
    if(jumpImageNumber==11){
        jumpImageNumber=1;
        clearInterval(jumpTaskNumber);
        runTaskNumber=setInterval(run,100);
        jumpTaskNumber=0;
        if(backgroundTaskNumber==0){
            backgroundTaskNumber=setInterval(background,100);
        }
        if(boxTaskNumber==0){
            boxTaskNumber=setInterval(moveBoxes,100);
        }
    }

    document.getElementById("girl").src="Jump ("+jumpImageNumber+").png";
}

var shootImageNumber=0;
var shootTaskNumber=0;
function shoot(){
    score=score+2;
    document.getElementById("score").innerHTML=score;
    shootImageNumber=shootImageNumber+1;
    if(shootImageNumber==4){
        shootImageNumber=1;
        clearInterval(shootTaskNumber);
        runTaskNumber=setInterval(run,100);
        shootTaskNumber=0;
        
        backgroundTaskNumber=setInterval(background,100);
        if(boxTaskNumber==0){
            boxTaskNumber=setInterval(moveBoxes,100);
        }
        
        
    }
    document.getElementById("girl").src="Shoot ("+shootImageNumber+").png";
}

var backgroundPosition=0;
var backgroundTaskNumber=0;
function background(){
    backgroundPosition=backgroundPosition-20;
    document.getElementById("background").style.backgroundPositionX=backgroundPosition+"px";
}



var boxMarginLeft=300;

function createBoxes(){
    for(var i=0;i<100;i++){
        var box=document.createElement("div");
        box.className="box";
        box.id="box"+i;

        if(i<10){
            boxMarginLeft=boxMarginLeft+800;
        }
        if(i>=10&i<40){
            boxMarginLeft=boxMarginLeft+600;
        }
        if(i>=40){
            boxMarginLeft=boxMarginLeft+500;
        }


        box.style.marginLeft=boxMarginLeft+"px";
        document.getElementById("background").appendChild(box);
    }
}




 var boxTaskNumber=0;
 function moveBoxes(){
     for(var i=0;i<100;i++){
         var newBox=document.getElementById("box"+i);
         var boxml=getComputedStyle(newBox).marginLeft;
         var newboxml=parseInt(boxml)-20;
         newBox.style.marginLeft=newboxml+"px";

         //alert(newboxml);
         // 80-200

         if(newboxml>20 & newboxml<=160){
             //alert("dead");

             if(girlMarginTop>310){
                 //alert("maruna");

                 clearInterval(runTaskNumber);
                 runTaskNumber=-1;
                 

                 clearInterval(jumpTaskNumber);
                 jumpTaskNumber=-1;
                 jumpSound.pause();

                 clearInterval(backgroundTaskNumber);
                 backgroundTaskNumber=-1;

                 clearInterval(boxTaskNumber);
                 boxTaskNumber=-1;

                 

                 deadTaskNumber=setInterval(dead,200);
                 deadSound.play();
             }
         }
     }
 }

var deadImageNumber=1;
var deadTaskNumber=0;
function dead(){
     deadImageNumber=deadImageNumber+1;

     if(deadImageNumber==11){
         deadImageNumber=10;
         document.getElementById("girl").style.marginTop="450px";
         clearInterval(deadTaskNumber);
         setTimeout(function(){
            document.getElementById("endGame").style.visibility="visible";
        document.getElementById("endScore").innerHTML=score;

        },1000);
     }
     document.getElementById("girl").src="Dead ("+deadImageNumber+").png";
}

function newGame(){
    location.reload();
}
function windowClose() {
    window.close();
}
