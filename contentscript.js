var eraser = function() {
  document.body.style.display = "none";
  alert("Unscientific page detected!")
}

eraser();

var redirect = function() {
  window.open("http://www.sciencemag.org/")
};
redirect();