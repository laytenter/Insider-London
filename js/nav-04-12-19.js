(function () {

  var toggle = document.querySelector('#menu-toggle');
  var close = document.querySelector('#close');

  var nav = document.querySelector('#nav');

  toggle.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.toggle('open');
    document.documentElement.classList.toggle('nav-open');
  })

  close.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.toggle('open');
    document.documentElement.classList.toggle('nav-open');
  })

})();
