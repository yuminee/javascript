var startBtn = document.getElementById("startBtn");
var restartBtn = document.getElementById('restart');
var character =document.getElementById("character");
var block = document.getElementById("block");
var node = document.getElementById("div1");



function jump(){
    
    if(character.classList !="animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

function start(){
    startBtn.style.display = 'none' ;
    restartBtn.style.display ='none';

    var checkDead = setInterval(function(){
        var characterTop = 
        parseInt(window.getComputedStyle(character).
        getPropertyValue("top"));

        var blockLeft = 
        parseInt(window.getComputedStyle(block).
        getPropertyValue("left"));

        if(blockLeft<50 && blockLeft>0 &&
            characterTop >=110) {
                //block.style.animation = "none";
                block.style.display = "none";
                alert("u lose.");
                restartBtn.style.display ='block';
               

            }
        

    }, 10); 
}

function restart(){
   
   // block.style.animation = "block";
    block.style.display = "block";
    start();


}

startBtn.addEventListener('click',init)
restartBtn.addEventListener('click',restart)

function init(){
    
    start();
}
