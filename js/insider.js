

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
