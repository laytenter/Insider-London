(function () {
  var btn = document.getElementById('modal_opener');
  var modal = document.querySelector('.modal');
  const media = document.querySelector('video');

  function attachModalListeners(modalElm) {
    modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
    media.addEventListener('ended',toggleModal);
  }

  function detachModalListeners(modalElm) {
    modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
  }

  function toggleModal() {

    var currentState = modal.style.display;

    // If modal is visible, hide it. Else, display it.
    if (currentState === 'none') {
      modal.style.display = 'block';
      attachModalListeners(modal);
    }
    else
    {
      modal.style.display = 'none';
      detachModalListeners(modal);

      // Pause the media...
      media.pause();
    }
  }
  // Only do this if we have a btn
  if (btn)
  {
    btn.addEventListener('click', toggleModal);
  }

})();
