(function () {

  // Bind event listener on window and close any open dropsown
  document.addEventListener('click', closeOpenDropDowns, true);

  // Get the nav element
  var nav = document.querySelector('.nav');

  // Extract the dropdowns from the nav element (why not just do this?)
  var dropdowns = nav.querySelectorAll('.dropdown');

  //Loop over all the dropdown elements
  Array.prototype.forEach.call(dropdowns, function (dropdown)
  {
    // Add click event listener to dropdown toggles
    dropdown.addEventListener('click', toggleDropDown, true);
	});

  // Close any open dropdowns, ignoring the one that's been clicked
  function closeOpenDropDowns(event)
  {
    Array.prototype.forEach.call(dropdowns, function (dropdown) {

      if (event.target.parentNode === dropdown) {
        // This is the one we need to keep open...
        return
      }
      // Remove the show class to hide the dropdown
	    dropdown.classList.remove('show');
	  });
  }

  // Toggles the dropdown to open or close
  function toggleDropDown(event)
  {
    // Close open dropdowns
    closeOpenDropDowns(event);

    // Toggle the show class. i.e. if already open it will close
    event.target.parentNode.classList.toggle('show');
  }
})();
