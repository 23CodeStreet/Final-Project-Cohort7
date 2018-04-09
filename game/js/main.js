var gameContainer = document.getElementById("gameContainer")

var playerDir;
var running = true
var playerXPos = window.innerWidth/2

var sheep = '<div class="sheep" id="gamePlayer"><span class="top"><div class="body"></div><div class="head" id="head"><div class="eye one"></div><div class="eye two"></div><div class="ear one"></div><div class="ear two"></div></div></span><div class="legs"><div class="leg"></div><div class="leg"></div><div class="leg"></div><div class="leg"></div></div></div>'
gameContainer.innerHTML = sheep;

document.onclick = function(event){
  if (event.screenX>playerXPos){
    playerDir = "right"
  }
  else{
    playerDir = "left"
  }
  //console.log(event.screenX)
}
var fallingCups = [
  { id: "cup1",
    elem: null,
    yPos: window.innerHeight +200,
    xPos: window.innerWidth/9,
    speed: 2
  },
  { id : "cup2",
    elem: null,
    yPos: window.innerHeight + 87,
    xPos: (window.innerWidth/9) *2,
    speed: 3
  },
  { id : "cup3",
    elem: null,
    yPos: window.innerHeight +56,
    xPos: (window.innerWidth/9) *3,
    speed: 3
  },
  { id: "cup4",
    elem: null,
    yPos: window.innerHeight +97,
    xPos: (window.innerWidth/9) *4,
    speed: 2
  },
  { id: "cup5",
    elem: null,
    yPos: window.innerHeight +187,
    xPos: (window.innerWidth/9) *5,
    speed: 2
  },
  { id: "cup6",
    elem: null,
    yPos: window.innerHeight +127,
    xPos: (window.innerWidth/9) *6,
    speed: 3
  },
  { id: "cup7",
    elem: null,
    yPos: window.innerHeight +200,
    xPos: (window.innerWidth/9) *7,
    speed: 4
  },
  { id: "cup8",
    elem: null,
    yPos: window.innerHeight +35,
    xPos: (window.innerWidth/9) *8,
    speed: 3
  }
]

function setup(){
  // drawGamePlayer()
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
  //updateScore()
  checkCollisions()
  if (running){
    window.requestAnimationFrame(run)
    // restart()
  }
}
// function restart(){
// running = true
// 	setup()
// }

function moveCups(){
  for (var i=0; i<fallingCups.length; i++){
  var cup = document.getElementById(fallingCups[i].id)
  fallingCups[i].yPos -= fallingCups[i].speed
  if (fallingCups[i].yPos<-200){
    fallingCups[i].yPos = window.innerHeight
    var random = Math.random()
    var newSpeed = 2
    if (random>0.5){
      newSpeed = 3
    }
    // var margin = random * 300 - 150
    // fallingCups[i].speed = newSpeed
    // cup.style.marginLeft = margin + "px"
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
  //console.log(playerXPos);
}

function updateScore(){

}

function checkCollisions(){
  for (var i = 0; i <fallingCups.length; i++){
    var cups = fallingCups[i]
    if (
      cups.yPos < 166 &&
      cups.xPos < playerXPos+75 &&
      cups.xPos > playerXPos-75
    ){
  running = false
      console.log("death")
      death()


    }
  }
}
// function checkCollisions(){
//   for (var i = 0; i <fallingCups.length; i++){
//     var cups = fallingCups[i]
//     if (
//       cups.yPos <166 &&
//       cups.xPos < playerXPos+75 &&
//       cups.xPos >playerXPos-75
//     ){
//   running = false
//       death()
//
//       console.log("death")
//     }
//   }
//   		}

// function drawGamePlayer(sheep){
//  var gamePlayer = document.createElement("DIV")
//  // gamePlayer.id = "gamePlayer"
//  // gamePlayer.className = "sheep"
//  // gamePlayer.style.left = playerXPos.xPos + "px"
//  // gamePlayer.style.bottom = playerXPos.xPos + "px"
//  // gameContainer.appendChild(gamePlayer)
// }

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

/*function drawGameCup(cup){
  var coffeeCup = document.createElement("DIV") // create the container
  coffeeCup.id = cup.id
  coffeeCup.className = "coffeeCup"
  coffeeCup.style.left = cup.xPos + "px"
  coffeeCup.style.bottom = cup.yPos + "px"
  console.log(coffeeCup);
}*/
function death(){
  var head = document.getElementById("head")
  head.classList += " dead"
  // setup()
  // pop up - died and replay
  // window.alert("YOU HAVE BEEN KILLED BY A DISPOSABLE CUP")
  // window.confirm("YOU HAVE BEEN KILLED BY A DISPOSABLE CUP. PLAY AGAIN?")

    if(confirm("YOU HAVE BEEN KILLED BY A DISPOSABLE CUP. PLAY AGAIN?")){
      console.log("You pressed OK!");
      gameContainer.innerHTML = sheep;
      running = true;
      for(var i=0; i<fallingCups.length; i++){
        drawGameCup(fallingCups[i], i)
      }
            run()
    }
  //
  //
  // else{
  //   txt = "You pressed Cancel!";
// }
   // if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//
// } else {
//     txt = "You pressed Cancel!";
// }
};



// function death(){
// 	var deathTime = (new Date).getTime()
// 	var timeAlive = deathTime - startTime
// 	var score = Math.floor(timeAlive /100)
// 	// reset all variables and put enemies off the screen
// 	yPos = 300;
// 	xPos = window.innerWidth /2 - ballSize /2
// 	xSpeed = 0
// 	ySpeed = 0
// 	obstacles[0].xPos = window.innerWidth
// 	obstacles[1].xPos = window.innerWidth + window.innerWidth /2
// 	playing = false
// 	getScores(score)
// }
