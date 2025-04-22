var jumpSound=new Audio("jump.mp3");
var deadSound=new Audio("dead.mp3");
var shootSound=new Audio("shoot.mp3");
var vehicleSound=new Audio("vehicleSound.wav");
var backgroundSound=new Audio("background.mp3"); 


function keyCheck(event){
    var k=event.which;
    if(k==13){
       
        if(runTaskNumber==0){
            runTaskNumber=setInterval(run,50);
            backgroundSound.play();
            vehicleSound.play();

            clearInterval(idleTaskNumber);
            backgroundTaskNumber=setInterval(background,50);
            boxTaskNumber=setInterval(moveBoxes,50);
            frontboxTaskNumber=setInterval(moveFrontBoxes,50);
            backboxTaskNumber=setInterval(moveBackBoxes,50);           
            
        }
      
        
        
    }
    if(k==32){
        
        
        if(jumpTaskNumber==0){
            jumpTaskNumber=setInterval(jump,200);
            backgroundSound.play();
            vehicleSound.play();
            jumpSound.play();
            clearInterval(idleTaskNumber);
            clearInterval(runTaskNumber);
        }
      
    }
    // if(k==83){
 
        
    //     if(shootTaskNumber==0){
    //         shootTaskNumber=setInterval(shoot,200);
    //         clearInterval(idleTaskNumber);
    //         clearInterval(jumpTaskNumber);
    //         clearInterval(runTaskNumber);
    //         clearInterval(backgroundTaskNumber);
    //         backgroundSound.play();
    //         vehicleSound.play();
    //         shootSound.play();
    //     }
    // }
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
        girlMarginTop=girlMarginTop-75;
        document.getElementById("girl").style.marginTop=girlMarginTop+"px";

    }
    if(jumpImageNumber>=6){
        girlMarginTop=girlMarginTop+75;
        document.getElementById("girl").style.marginTop=girlMarginTop+"px";
    }
    jumpImageNumber=jumpImageNumber+1;
    if(jumpImageNumber==11){
        jumpImageNumber=1;
        clearInterval(jumpTaskNumber);
        runTaskNumber=setInterval(run,50);
        jumpTaskNumber=0;
        if(backgroundTaskNumber==0){
            backgroundTaskNumber=setInterval(background,50);
        }
        if(boxTaskNumber==0){
            boxTaskNumber=setInterval(moveBoxes,50);
        }
        if(frontboxTaskNumber==0){
            frontboxTaskNumber=setInterval(moveFrontBoxes,50);
        }
        if(backboxTaskNumber==0){
            backboxTaskNumber=setInterval(moveBackBoxes,50);
        }
    }

    document.getElementById("girl").src="Jump ("+jumpImageNumber+").png";
}

// var shootImageNumber=0;
// var shootTaskNumber=0;
// function shoot(){
//     score=score+2;
//     document.getElementById("score").innerHTML=score;
//     shootImageNumber=shootImageNumber+1;
//     if(shootImageNumber==4){
//         shootImageNumber=1;
//         clearInterval(shootTaskNumber);
//         runTaskNumber=setInterval(run,100);
//         shootTaskNumber=0;
        
//         backgroundTaskNumber=setInterval(background,50);
//         if(boxTaskNumber==0){
//             boxTaskNumber=setInterval(moveBoxes,50);
//         }
//         if(frontboxTaskNumber==0){
//             frontboxTaskNumber=setInterval(moveFrontBoxes,50);
//         }

//         if(backboxTaskNumber==0){
//             backboxTaskNumber=setInterval(moveBackBoxes,50);
//         }
        
        
//     }
//     document.getElementById("girl").src="Shoot ("+shootImageNumber+").png";
// }

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

        if(newboxml>=80 & newboxml<=100){
            //alert("dead");

            if(girlMarginTop>280){
                //alert("maruna");

                clearInterval(runTaskNumber);
                backgroundSound.pause;
                vehicleSound.pause;
                runTaskNumber=-1;
                 

                clearInterval(jumpTaskNumber);
                jumpTaskNumber=-1;
                jumpSound.pause();

                clearInterval(backgroundTaskNumber);
                backgroundTaskNumber=-1;

                clearInterval(boxTaskNumber);
                boxTaskNumber=-1;

                clearInterval(frontboxTaskNumber);
                frontboxTaskNumber=-1;

                clearInterval(backboxTaskNumber);
                backboxTaskNumber=-1;

                 

                deadTaskNumber=setInterval(dead,100);
                deadSound.play();

               

            }
        }
    }
}


var frontboxMarginLeft=332;

function createFrontBoxes(){
    for(var i=0;i<100;i++){
        var frontbox=document.createElement("div");
        frontbox.className="frontWheel";
        frontbox.id="frontbox"+i;

        if(i<10){
            frontboxMarginLeft=frontboxMarginLeft+800;
        }
        if(i>=10&i<40){
            frontboxMarginLeft=frontboxMarginLeft+600;
        }
        if(i>=40){
            frontboxMarginLeft=frontboxMarginLeft+500;
        }


        frontbox.style.marginLeft=frontboxMarginLeft+"px";
        document.getElementById("background").appendChild(frontbox);
    }
}




var frontboxTaskNumber=0;
function moveFrontBoxes(){
    for(var i=0;i<100;i++){
        var newBox=document.getElementById("frontbox"+i);
        var boxml=getComputedStyle(newBox).marginLeft;
        var newboxml=parseInt(boxml)-20;
        newBox.style.marginLeft=newboxml+"px";


        if(newboxml>=80 & newboxml<=100){
            //alert("dead");

            if(girlMarginTop>280){
                //alert("maruna");

                clearInterval(runTaskNumber);
                backgroundSound.pause;
                vehicleSound.pause;
                runTaskNumber=-1;
                 

                clearInterval(jumpTaskNumber);
                jumpTaskNumber=-1;
                jumpSound.pause();

                clearInterval(backgroundTaskNumber);
                backgroundTaskNumber=-1;

                clearInterval(boxTaskNumber);
                boxTaskNumber=-1;

                clearInterval(frontboxTaskNumber);
                frontboxTaskNumber=-1;

                clearInterval(backboxTaskNumber);
                backboxTaskNumber=-1;

                 

                deadTaskNumber=setInterval(dead,100);
                deadSound.play();

               

            }
        }




    }
}


var backboxMarginLeft=509;

function createBackBoxes(){
    for(var i=0;i<100;i++){
        var backbox=document.createElement("div");
        backbox.className="backWheel";
        backbox.id="backbox"+i;
 
        if(i<10){
             backboxMarginLeft=backboxMarginLeft+800;
        }
        if(i>=10&i<40){
             backboxMarginLeft=backboxMarginLeft+600;
        }
        if(i>=40){
             backboxMarginLeft=backboxMarginLeft+500;
        }
 
 
        backbox.style.marginLeft=backboxMarginLeft+"px";
        document.getElementById("background").appendChild(backbox);
    }
}
 
 
 
 
var backboxTaskNumber=0;
function moveBackBoxes(){
      for(var i=0;i<100;i++){
          var newBox=document.getElementById("backbox"+i);
          var boxml=getComputedStyle(newBox).marginLeft;
          var newboxml=parseInt(boxml)-20;
          newBox.style.marginLeft=newboxml+"px";

          if(newboxml>=80 & newboxml<=100){
            //alert("dead");

            if(girlMarginTop>280){
                //alert("maruna");

                clearInterval(runTaskNumber);
                backgroundSound.pause;
                vehicleSound.pause;
                runTaskNumber=-1;
                 

                clearInterval(jumpTaskNumber);
                jumpTaskNumber=-1;
                jumpSound.pause();

                clearInterval(backgroundTaskNumber);
                backgroundTaskNumber=-1;

                clearInterval(boxTaskNumber);
                boxTaskNumber=-1;

                clearInterval(frontboxTaskNumber);
                frontboxTaskNumber=-1;

                clearInterval(backboxTaskNumber);
                backboxTaskNumber=-1;

                 

                deadTaskNumber=setInterval(dead,100);
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
