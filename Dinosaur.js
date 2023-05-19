var conteniar=document.querySelector("#container")
var dino=document.querySelector("#dino")
var block=document.querySelector("#block")
var read=document.querySelector("#road")
var cloud=document.querySelector("#cloud")
var score=document.querySelector("#score")
var gameover=document.querySelector("#gameover")
//declaring variable for Score
var interval=null
var playscore=0
//fonction for Score
var scorecounter=()=>{
    playscore++
    score.innerHTML=`Score <b>${playscore}</b>`;
}

//start Game
window.addEventListener("keydown",(start)=>{
console.log(start)
if(start.code=="Space"){
gameover.style.display="none"
    block.classList.add("blockActive")
read.firstElementChild.style.animation="roadanimation 1.5s linear infinite"

//Score
var playscore=0
interval=setInterval(scorecounter,200)
}
})
// HeightScore
var heightscore=document.getElementById("heightscore")
heightscore=0
if(score>heightscore){
heightscore=score;
heightscore.innerHTML=`heightscore<b>${heightscore}</b>`
}

//jump hy character
window.addEventListener("keydown",(e)=>{
    //console.log(e)
    if(e.key==="ArrowUp")
    if(dino.classList!="dinoActive"){
dino.classList.add("dinoActive")
setTimeout(()=>{
    dino.classList.remove("dinoActive")
},500)
    }
})
//GameOver
var result=setInterval(()=>{
    var dinobottum=parseInt(getComputedStyle(dino).getPropertyValue("bottom"))
    var blockleft=parseInt(getComputedStyle(block).getPropertyValue("left"))
    if(dinobottum<=135  &&  blockleft>=20  &&  blockleft<=50){
gameover.style.display="block"
block.classList.remove("blockActive")
read.firstElementChild.style.animation="none"

clearInterval(interval)
playscore=0
    }
},10)

