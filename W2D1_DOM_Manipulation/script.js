// console.log("here")

var h1 = document.querySelector("#hello");

// console.log(h1)


function deleteBox(){

  var box = document.querySelector("#box")
  // var box = document.querySelectorAll("div");

  console.log(box)
  box.remove()
}



function changeMe(){
  var h3 = document.querySelector("h3");
  h3.innerText = "New Title";

}


function setActive(element) {
  element.style.backgroundColor = "#222222";
  element.style.color = "#ffffff";
  var body = document.querySelector("body");
  body.style.backgroundColor ="#000000"
}



function chooseLunch(element) {
  alert("You picked " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}


function message() {
  console.log("Delayed message");    
}
  
console.log("Start");
setTimeout(message, 5000);
console.log("End");

