
var badsite_goaway = (function() {

  function eraser() {
    document.body.style.display = "none";
    alert("Unscientific page detected!")
  };
  function redirect(arg) {
    location.replace(badwords[arg])
  };
  function warning() {
    confirm("There are some unscientific words in the text");
  }
  return {
    eraser: eraser,
    redirect: redirect,
    warning: warning
  }
})();

var current_url = window.location.href.toLowerCase();
var badwords = {
  foxnews : "http://www.bbc.co.uk/science", 
  trump : "http://betonbernie2016.com/", 
  antivaccin: "http://www.fda.gov/BiologicsBloodVaccines/default.htm", 
  antivax: "http://www.fda.gov/BiologicsBloodVaccines/default.htm", 
  creation: "https://en.wikipedia.org/wiki/Evolution",
  creationism: "http://ncse.com/", 
  integlligentdesign: "http://ncse.com/",
};
var keys = Object.keys(badwords)
for (var i in keys) {
  if (current_url.includes(keys[i])) {
    badsite_goaway.eraser();
    badsite_goaway.redirect(keys[i]);
  }
};
var context = document.body.innerText;
for (var i in keys) {
  if (context.includes(keys[i])) {
    badsite_goaway.warning();
  }
}