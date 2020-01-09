// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    updateText()
  });

function updateText() {
    const targetText = document.getElementById("text")
    targetText.innerHTML = "This is really cool!"
 }