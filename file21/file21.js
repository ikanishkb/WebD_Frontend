var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1score=0;
var p2score=0;
var res = document.getElementById("reset");
var gameOver = false;
var winningScore=5;
var input = document.getElementById("numselector");
var playingtill = document.getElementById("playingto");

input.addEventListener("change",function(){
    winningScore = Number(input.value);
    playingtill.textContent= input.value;
})

p1.addEventListener("click",function(){
    if(!gameOver){
    p1score++;
    p1sc.textContent = p1score;
    }
    if(p1score === winningScore){
        gameOver=true;
        p1sc.style.color = "green";
    }
})

p2.addEventListener("click",function(){
    if(!gameOver){
    p2score++;
    p2sc.textContent = p2score;
    }
    if(p2score === winningScore){
        gameOver=true;
        p2sc.style.color = "green";
    }
})

res.addEventListener("click",function(){
    p1sc.textContent = 0;
    p1score=0;
    p2sc.textContent = 0;
    p2score=0;
    gameOver = false;
    p1sc.style.color = "black";
    p2sc.style.color = "black";
})