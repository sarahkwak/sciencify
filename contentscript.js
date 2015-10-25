var badsite_goaway = (function() {
var taboo = ["foxnews", "trump"];
  function checker() {
    for (var i = 0; i <= taboo.length; i++) {
      if (window.location.href.includes(taboo[i])) {
        eraser();
        redirect();
      }
    }
  };
  function eraser() {
    document.body.style.display = "none";
    alert("Unscientific page detected!")
  };
  function redirect() {
    location.replace("http://www.sciencemag.org/")
  };
  return {
    checker: checker,
    eraser: eraser,
    redirect: redirect
  }
})();
badsite_goaway.checker();
// badsite_goaway.eraser();
// badsite_goaway.redirect();
