window.onload = function(){
  console.log('hello')
  window.scrollTo(0,0)
}

var trees = document.getElementById("treesContainer")
var trunks = document.getElementsByClassName('treeTrunk')
var treeTops = document.getElementsByClassName('treeLeavesContainer')
var sun = document.getElementById('sunContainer')
var factory = document.getElementById('factory')
var truck = document.getElementById('truckContainer')
var cup = document.getElementById('coffeecup')
var rectangle = document.getElementById('rectangle')
var text = document.getElementById('text')
var text2 = document.getElementById('text2')

window.onscroll=function(){
  window.requestAnimationFrame(run)
}

function run(){
  var h = window.innerHeight;
  var scroll = window.pageYOffset
  if (scroll < h * 10){
   moveTree(scroll, 0, h * 10)
   // moveSun(scroll, 0, h* 8)
 } else if(scroll< h*10){
   text.style.opacity = 0;
 }  if (scroll > h * 10 && scroll < h * 30 ){
   moveTruck(scroll, h * 10, h * 30)
 } else if(scroll< h*10){
   truck.style.left = window.innerWidth /2 + 'px'
   text2.style.opacity = 0;
 }
   if (scroll > h * 12 && scroll < h * 16) {
    animateFactoryIn(scroll, h*12, h*16)
  } else if (scroll < h * 12){
    factory.style.opacity = 0;
  }
   if (scroll > h * 18 && scroll < h * 25) {
    animateCup(scroll, h*18, h*25)
  } else if (scroll < h * 18){
    cup.style.opacity = 0;
  }
  if (scroll > h * 27 && scroll < h * 32) {
   dropCup(scroll, h*27, h*32)
 }
 if (scroll > h * 33 && scroll < h * 40) {
  rectangleUp(scroll, h*33, h*40)
}
}


// function moveSomething(scroll, start, end){
//   var range = end - start
//   var y = scroll-start
//   console.log(scroll, y, range)
//  // var trees = document.getElementById("treesContainer")
//  // trees.style.marginLeft = scroll/2-600 + "px"
// }


function moveTree(scroll, start, end){
  var range = end - start
  var y = scroll-start
  console.log(scroll, y, range)
  console.log(trunks)
  var xLimit = window.innerWidth/ 2
  console.log(treeTops)
  for (var i =0; i < trunks.length; i++){
    var viewportOffset = treeTops[i].getBoundingClientRect();
    var trunkPos = viewportOffset.left;
    console.log(trunkPos, xLimit)
    if (trunkPos < xLimit){
      treeTops[i].style.opacity = 0
      trunks[i].style.height = '65px'
    } else {
      treeTops[i].style.opacity = 1
      trunks[i].style.height = '150px'
    }
  }
 trees.style.left = map(y, 0, range, window.innerWidth, -window.innerWidth) + 'px'
text.style.opacity = map(y, 0, range, 0, 1)
}


function animateFactoryIn(scroll, start, end){
	var y = scroll - start
	var range = end - start
	console.log(map(y, 0, range, 0, 1))
	factory.style.opacity = map(y, 0, range, 0, 1)
	factory.style.transform = 'scale(' + (0.8  + map(y, 0, range, 0, 1) /2) + ')'
	console.log(map(y, 0, range, 0, 1))
}

function moveTruck(scroll, start, end){
  var y = scroll - start
  var range = end - start
  truck.style.left = map(y, 0, range, window.innerWidth/2, window.innerWidth) + 'px'
  text2.style.opacity = map(y, 0, range, 0, 1)
}

function animateCup(scroll, start, end){
	var y = scroll - start
	var range = end - start
	cup.style.opacity = map(y, 0, range, 0, 1)
	cup.style.transform = 'scale(' + (0.2  + map(y, 0, range, 0, 0.7) /2) + ')'
  // cup.style.transform = 'rotate(' +  map(y, 0, range, -50, 120)  + 'deg)'
  console.log(map(y, 0, range, 0, 1))
}

function dropCup(scroll, start, end){
  var y = scroll - start
  var range = end - start
  cup.style.bottom = map(y, 0, range, 0, -800) + 'px'
}

function rectangleUp(scroll, start, end) {
  var y = scroll - start
  var range = end - start
  rectangle.style.top = map(y, 0, range, 920, 0) + 'px'
}


// the map function returns a number with one
function mapInt(num, inMin, inMax, outMin, outMax) {
  return Math.floor((num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin)
}
function map(num, inMin, inMax, outMin, outMax) {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
