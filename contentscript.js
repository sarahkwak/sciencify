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

badsite_goaway.eraser();
badsite_goaway.redirect();
