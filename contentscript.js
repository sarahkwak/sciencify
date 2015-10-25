
var badsite_goaway = (function() {

  function eraser() {
    document.body.style.display = "none";
    alert("Unscientific page detected!")
  };
  function redirect() {
    location.replace("http://www.sciencemag.org/")
  };
  return {
    eraser: eraser,
    redirect: redirect
  }
})();

var current_url = location.hostname;
var badwords = ['foxnews', 'trump', 'aaai'];
for (var i in badwords) {
  if (location.hostname.includes(badwords[i])) {
    badsite_goaway.eraser();
    badsite_goaway.redirect();
  }
};
