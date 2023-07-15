var boy = document.getElementById("boy");


 idleImageNumber = 1;

 idleAnimationNumber = 0;


function idleAnimation(){

    idleImageNumber = idleImageNumber +1 ;

    if (idleImageNumber == 11 ){
        idleImageNumber = 1 ;
    }

    boy.src = "./assets/Images/BoyImages/IdleImages/idle(" + idleImageNumber + ").png";

}

function idleAnimationStart(){

    idleAnimationNumber = setInterval(idleAnimation,200);
}





runImageNumber = 1;
runAnimationNumber = 0;

function runAnimation(){

    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11 ){

        runImageNumber = 1;
    }


  boy.src = "./assets/Images/BoyImages/RunImages/run("+ runImageNumber +").png";


}



function runAnimationStart(){

   runAnimationNumber = setInterval(runAnimation,100);
   clearInterval(idleAnimationNumber);
}

jumpImageNumber = 1;
jumpAnimationNumber = 0;
boyMarginTop = 350 ;

function jumpAnimation(){

    jumpImageNumber = jumpImageNumber + 1;


    if (jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 35;
        boy.style.marginTop = boyMarginTop + "px";
    }


    if (jumpImageNumber >= 7){

        boyMarginTop = boyMarginTop + 35;
        boy.style.marginTop = boyMarginTop + "px";

    }



    if (jumpImageNumber == 11){

        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();

    }



    boy.src = "./assets/Images/BoyImages/JumpImages/jump("+ jumpImageNumber +").png";



}

function jumpAnimationStart(){
    clearInterval(idleAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);

    jumpAnimationNumber=setInterval(jumpAnimation,110);
}



function keyCheck(event){




    var KeyCode = event.which;


    if (KeyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }

        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);

        }

       if (boxAnimationId == 0){
             boxAnimationId = setInterval(boxAnimation,70);

        }

    }


    if (KeyCode == 32){

        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }


        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);

        }

        if (boxAnimationId == 0){
            boxAnimationId = setInterval(boxAnimation,70);

        }
    }
}



var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX - 20 ;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
}





boyMarginLeft = 1500;

function createBoxes() {

    for (var i = 0; i <= 15; i++) {


        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boyMarginLeft + "px";
        box.id = "box" + i;

      //  boyMarginLeft = boyMarginLeft + 500;


        if (i<8){
            boyMarginLeft = boyMarginLeft + 1000;
        }

        if (i>=7){
            boyMarginLeft = boyMarginLeft + 1200;
        }


    }
}

var boxAnimationId = 0;

function boxAnimation(){

    for (var i=0; i<15; i++){
        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft =parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";
    }
}
