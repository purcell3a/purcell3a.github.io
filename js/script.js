/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/* flip the cards in about me*/

$(".flipper").click(function() {
  var target = $( event.target );
  if ( target.is("a") ) {
    //follow that link
    return true;
  } else {
    $(this).toggleClass("flip");
  }
  return false;
});