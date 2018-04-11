function onQ1Click(i){
  console.log(labels[i])
  p[i].style.opacity = "1";
}
var labels = document.getElementsByTagName("label");

var p = document.getElementsByTagName("p");

// selector.classList.add("hidden")

function showNext(y, x){
  var section = document.getElementsByTagName("section")
  section[y].classList.add("hidden")
  section[x].classList.remove("hidden")
}

function finalQ(i){
  var answer = ["Great job! You're an environmental superstar.", "No, well follow the link."];
  document.getElementById("final-p").innerHTML= answer[i];
  document.getElementById("final-p").style.opacity = "1";
}
