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

var tour = document.getElementById('wc-bookings-booking-form');
var tourID = tour.dataset.tourid // "3"
var button = new TrekkSoft.Embed.Button();
button  .setAttrib("target", "fancy")
.setAttrib("entryPoint", "tour")
.setAttrib("tourId", tourID)
.setAttrib("referral", "INSIDERLONDONLTD")
.registerOnClick("#BookNow");
} catch(e) {
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
