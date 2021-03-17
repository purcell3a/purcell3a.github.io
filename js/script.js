/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */


function myFunction() { 
    var x = document.querySelector('.navbar-nav'); 

    if (x.style.display === "none") { 
        x.style.display = "block"; 
    } 
    else { 
        x.style.display = "none"; 
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