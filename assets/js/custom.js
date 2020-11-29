var header = document.getElementsByClassName("c-tabs");
var list = header.getElementsByClassName("c-tabs__list");
for (var i = 0; i < btns.length; i++) {
  list[i].addEventListener("mouseover", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}