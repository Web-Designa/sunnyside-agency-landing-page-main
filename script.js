'use strict';

// if document.getElementbyId('')
document.getElementById("mobile-nav").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("nav").classList.toggle("hidden-nav")
}
