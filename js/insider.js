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
    document.getElementById('dt-menu-toggle').addEventListener('click', function(e){
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
    })
  }
  return {
    mobileMenu: mobileMenu
  };
})();

// listen for the DOMContentLoaded event, then bind our function
jt.nav.mobileMenu();


  var slideshow = document.querySelector('#slideshow');

  imagesLoaded( slideshow, function() {


    var simple = document.querySelector('.js_slider');

    if (simple) {

      slider = lory(simple, {
        rewind: true,
        infinite: 1,
        ease: 'easeInOutElastic'
      });

      setInterval(function () {
        slider.next();
      }, 5000 + 300); // Interval + Transition

    }




  });


// boxElement = document.querySelector("#box");
//
// createObserver();
//
// function handleIntersect(entries, observer) {
//   console.log(entries);
// }
//
// function createObserver() {
//   var observer;
//
//   var options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1
//   };
//
//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(boxElement);
// }
