var gameContainer = document.getElementById("gameContainer")

var playerDir;

var playerXPos = window.innerWidth/2

document.onclick = function(event){
  if (event.screenX>playerXPos){
    playerDir = "right"
  }
  else{
    playerDir = "left"
  }
  console.log(event.screenX)
}
var fallingCups = [
  { id: "cup1",
    elem: null,
    yPos: window.innerHeight +200,
    xPos: window.innerWidth/5,
    speed: 2
  },
  { id : "cup2",
    elem: null,
    yPos: window.innerHeight + 87,
    xPos: (window.innerWidth/5) *2,
    speed: 3
  },
  { id : "cup3",
    elem: null,
    yPos: window.innerHeight +56,
    xPos: (window.innerWidth/5) *3,
    speed: 3
  },
  { id: "cup4",
    elem: null,
    yPos: window.innerHeight +97,
    xPos: (window.innerWidth/5) *4,
    speed: 2
  },
  // { id: "cup5",
  //   elem: null,
  //   yPos: window.innerHeight,
  //   xPos: window.innerWidth/5
  // },
  // same for: "cup2", "cup3", "cup4", "cup5", "cup6", "cup7", "cup8", "cup9", "cup10"]?
]

function setup(){
  drawGamePlayer()
  for(var i=0; i<fallingCups.length; i++){
    drawGameCup(fallingCups[i], i)
  }
  // will they all appear on the page? how to make them sprout from the top and fall in sequence
  run()
}

setup()

// death function - send to the call to action section
function run(){
  moveCups()
  movePlayer()
  updateScore()
  checkCollisions()
  window.requestAnimationFrame(run)
}

function moveCups(){
  for (var i=0; i<fallingCups.length; i++){
  var cup =  document.getElementById(fallingCups[i].id)
  fallingCups[i].yPos -= fallingCups[i].speed
  if (fallingCups[i].yPos<-100){
    fallingCups[i].yPos = window.innerHeight
    var random = Math.random()
    var newSpeed = 2
    if (random>0.5){
      newSpeed = 3
    }
    var margin = random * 300 - 150
    fallingCups[i].speed = newSpeed
    cup.style.marginLeft = margin + "px"
  }
  cup.style.bottom = fallingCups[i].yPos + "px"

  }
}

function movePlayer(){
  if(playerDir==="right"){
    playerXPos +=2
  }
  else if(playerDir ==="left"){
    playerXPos -=2
  }
  document.getElementById('gamePlayer').style.left = playerXPos + "px"
}

function updateScore(){

}

function checkCollisions(){
  for (var i = 0; i <fallingCups.length; i++){
    var cups = fallingCups[i]
    if (
      cups.yPos <50 &&
      cups.xPos <playerXPos+50 &&
      cups.xPos >playerXPos-50
    ){
      console.log("death")
    }
  }
  	// for (var i = 0; i < obstacles.length; i++){
  	// 	var obs = obstacles[i]
  	// 	if (yPos < obstacleHeight -20 && xPos + ballSize > obs.xPos && obs.xPos + obstacleWidth > xPos){
  	// 		death()
  		}

function drawGamePlayer(){
 var gamePlayer = document.createElement("DIV")
 gamePlayer.id = "gamePlayer"
 gameContainer.appendChild(gamePlayer)
}
function drawGameCup(cup){
  var coffeeCup = document.createElement("DIV") // create the container
  coffeeCup.id = cup.id
  coffeeCup.className = "coffeecup"
  coffeeCup.style.left = cup.xPos + "px"
  coffeeCup.style.bottom = cup.yPos + "px"
  console.log(coffeeCup);
  // gameContainer.appendChild(coffeeCup)
  //appendChild cup
  var cup = document.createElement("DIV")
  cup.className = "cup"
  coffeeCup.appendChild(cup)
  //appendChild logo
  var logo = document.createElement("DIV")
  logo.className = "logo"
  coffeeCup.appendChild(logo)
    gameContainer.appendChild(coffeeCup)

}
