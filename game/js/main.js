var gameContainer = document.getElementById("gameContainer")
gameContainer.style.width = window.innerWidth + 'px'
gameContainer.style.height = window.innerHeight + 'px'

var startTime = null;
var playerDir;
var running = true;
var playerXPos = window.innerWidth/2;

var fallingCups = [
  { id: "cup1",
    elem: null,
    yPos: window.innerHeight + 200,
    xPos: window.innerWidth / 9,
    speed: 2
  },
  { id : "cup2",
    elem: null,
    yPos: window.innerHeight + 87,
    xPos: (window.innerWidth / 9) * 2,
    speed: 3
  },
  { id : "cup3",
    elem: null,
    yPos: window.innerHeight + 56,
    xPos: (window.innerWidth / 9) * 3,
    speed: 3
  },
  { id: "cup4",
    elem: null,
    yPos: window.innerHeight + 97,
    xPos: (window.innerWidth / 9) * 4,
    speed: 2
  },
  { id: "cup5",
    elem: null,
    yPos: window.innerHeight + 187,
    xPos: (window.innerWidth / 9) * 5,
    speed: 2
  },
  { id: "cup6",
    elem: null,
    yPos: window.innerHeight + 127,
    xPos: (window.innerWidth / 9) * 6,
    speed: 3
  },
  { id: "cup7",
    elem: null,
    yPos: window.innerHeight + 200,
    xPos: (window.innerWidth / 9) * 7,
    speed: 2
  },
  { id: "cup8",
    elem: null,
    yPos: window.innerHeight + 35,
    xPos: (window.innerWidth / 9) * 8,
    speed: 3
  }
]
drawGamePlayer()
setTimeout(setup(), 10000)
function setup(){
  instructions()
  for(var i = 0; i < fallingCups.length; i++){
    drawGameCup(fallingCups[i])
  }
  run()
  startTime=(new Date).getTime()
}

function drawGamePlayer(){
  var gamePlayer = document.createElement("IMG")
  gamePlayer.src = "images/gamePlayerSheep.png"
  gamePlayer.id = "gamePlayer"
  gamePlayer.className = "sheep"
  gamePlayer.style.left = playerXPos + "px"
  gamePlayer.style.bottom = "5px"
  gameContainer.appendChild(gamePlayer)
}

function instructions(){
  var instructions = document.getElementById("instructions");
  instructions.style.opacity = 0;

}


function drawGameCup(cup){
  var coffeeCup = document.createElement("IMG")
  coffeeCup.src = "images/coffeeCup.png"
  coffeeCup.id = cup.id
  coffeeCup.className = "coffeeCup"
  coffeeCup.style.left = cup.xPos + "px"
  coffeeCup.style.bottom = cup.yPos + "px"
  gameContainer.appendChild(coffeeCup)
}

function run(){
  moveCups()
  movePlayer()
  checkCollisions()
  if (running){
    window.requestAnimationFrame(run)
  }
  updateScore()
}

// window.alert("Help Sheep avoid the disposable cup shower by clicking to the left or right of her to make her move.")

function moveCups(){
  for (var i=0; i<fallingCups.length; i++){
  var cup = document.getElementById(fallingCups[i].id)
  fallingCups[i].yPos -= fallingCups[i].speed
  if (fallingCups[i].yPos<-200){
    fallingCups[i].yPos = window.innerHeight
    var random = Math.random()
    if (random>0.5){
      //fallingCups[i].speed += 1
    }
  }
  cup.style.bottom = fallingCups[i].yPos + "px"
  }
}

document.onclick = function(event){
  if (event.screenX > playerXPos){
    playerDir = "right"
  }
  else{
    playerDir = "left"
  }
}

function movePlayer(){
  if(playerDir === "right"){
    playerXPos +=2
  }
  else if(playerDir === "left"){
    playerXPos -=2
  }
  if(playerXPos < 0){
    playerDir = "right"
  }
  else if(playerXPos > window.innerWidth ){
    playerDir = "left"
  }
  document.getElementById('gamePlayer').style.left = playerXPos + "px"
}


function checkCollisions(){
  for (var i = 0; i <fallingCups.length; i++){
    var cups = fallingCups[i]
    if (
      cups.yPos < 105 &&
      cups.yPos > -50 &&
      cups.xPos < playerXPos+65 &&
      cups.xPos > playerXPos-65
    ){
      running = false
      console.log("death")
      death()
    }
  }
}

function death(){
    if(confirm("YOU HAVE BEEN KILLED BY A DISPOSABLE CUP. PLAY AGAIN?")){
      console.log("You pressed OK!");
      gameContainer.innerHTML = '';
      location.reload();
      // restart();
    }
    else{
      console.log("You pressed Cancel :( ");
	//gameContainer.innerHTML = '';
  // or <a name="jumpHere">somewhere</a> html and window.location = 'yoursite.html#jumpHere' js
    }
  var deathTime = (new Date).getTime();
  var timeAlive = deathTime - startTime;
}

// SCORE

function updateScore(){
	var now = (new Date).getTime()
	var currentScore = now - startTime
	scoreContainer.innerHTML = Math.floor(currentScore /100)
}

// IN DEATH function
// var deathTime = (new Date).getTime()
// var timeAlive = deathTime - startTime
// setTimeout(reset, 1000)

//IN RUN function
// updateScore()

//IN SET UP function
	startTime=(new Date).getTime()

//GLOBAL variable
// var startTime = null;

// var gameOver = document.getElementById("gameOver") ??


// function restart(){
//   fallingCups[0].yPos = window.innerHeight + 200
//   fallingCups[0].xPos = window.innerWidth / 9
//   fallingCups[0].speed = 1
//   fallingCups[1].yPos = window.innerHeight + 87
//   fallingCups[1].xPos = (window.innerWidth / 9) * 2
//   fallingCups[1].speed = 2
//   fallingCups[2].yPos = window.innerHeight + 56
//   fallingCups[2].xPos = (window.innerWidth / 9) * 3
//   fallingCups[2].speed = 2
//   fallingCups[3].yPos = window.innerHeight + 97
//   fallingCups[3].xPos = (window.innerWidth / 9) * 4
//   fallingCups[3].speed = 1
//   fallingCups[4].yPos = window.innerHeight + 187
//   fallingCups[4].xPos = (window.innerWidth / 9) * 5
//   fallingCups[4].speed = 1
//   fallingCups[5].yPos = window.innerHeight + 127
//   fallingCups[5].xPos = (window.innerWidth / 9) * 6
//   fallingCups[5].speed = 2
//   fallingCups[6].yPos = window.innerHeight + 200
//   fallingCups[6].xPos = (window.innerWidth / 9) * 7
//   fallingCups[6].speed = 1
//   fallingCups[7].yPos = window.innerHeight + 35
//   fallingCups[7].xPos = (window.innerWidth / 9) * 8
//   fallingCups[7].speed = 2
//   running = true
//   setup()
// }
