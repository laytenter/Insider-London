(function () {
  var btn = document.getElementById('modal_opener');

    if (btn) {

    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);
    var modal = document.querySelector('.modal');
    //const media = document.querySelector('video');

    player.on('play', function() {
        console.log('played the video!');
    });
    player.on('pause', function() {
        console.log('player paused!');
    });
    player.on('ended', function() {
        console.log('player ended!');
        toggleModal();

    });
    }


  function attachModalListeners(modalElm) {
    modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
  }

  function detachModalListeners(modalElm) {
    modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
    modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
  }

  function toggleModal() {
    var currentState = modal.style.display;
    console.log(currentState);

    // If modal is visible, hide it. Else, display it.
    if (currentState === 'none') {
      modal.style.display = 'block';
      attachModalListeners(modal);
    }
    else
    {
      // Pause the media...
      //media.pause();
      player.pause().then(function() {
        // the video was paused
      }).catch(function(error) {
        switch (error.name) {
          case 'PasswordError':
          // the video is password-protected and the viewer needs to enter the
          // password first
          break;

          case 'PrivacyError':
          // the video is private
          break;

          default:
          // some other error occurred
          break;
        }
      });
      modal.style.display = 'none';
      detachModalListeners(modal);

    }
  }
  // Only do this if we have a btn
  if (btn)
  {
    btn.addEventListener('click', toggleModal);
  }

})();
