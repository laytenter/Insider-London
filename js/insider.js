//$("#dt-menu-toggle").on("click touchenter", function () {
//$("#menu-main-menu").fadeToggle();
//});
function stopDefAction(evt) {
  evt.preventDefault();
  ga("send","event","Tour pages", "Book Now Button Clicked", document.URL);
}

try {

  document.getElementById('BookNow').addEventListener(
    'click', stopDefAction, false
  );

  document.getElementById('BookNow1').addEventListener(
    'click', stopDefAction, false
  );

  var tour = document.getElementsByClassName('wc-bookings-booking-form');
  var tourID = tour[0].dataset.tourid // "3"

  // Need to do this via two buttons as we added a new 'booknow' button to
  // when reorganising the tour layout.
  var button = new TrekkSoft.Embed.Button();
  button.setAttrib("target", "fancy")
  .setAttrib("entryPoint", "tour")
  .setAttrib("tourId", tourID)
  .setAttrib("referral", "INSIDERLONDONLTD")
  .registerOnClick("#BookNow");

  var button2 = new TrekkSoft.Embed.Button();
  button2.setAttrib("target", "fancy")
  .setAttrib("entryPoint", "tour")
  .setAttrib("tourId", tourID)
  .setAttrib("referral", "INSIDERLONDONLTD")
  .registerOnClick("#BookNow1");

} catch(e) {
  console.log(e);
}

var jt = jt || {};

// same functions as above
jt.nav = (function() {
  function mobileMenu() {
  document.getElementById('dt-menu-toggle').addEventListener(
    'click', function(e){

      e.preventDefault();
      var menu = document.getElementById('menu-main-menu');

      if(menu.style.display == 'none' || menu.style.display == '')
      {
        menu.style.display = 'block';
      }
      else
      {
        menu.style.display = 'none';
      }

    }
  )

  }

    return {
        mobileMenu: mobileMenu
    };
})();

// listen for the DOMContentLoaded event, then bind our function
jt.nav.mobileMenu();

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
