var theVideo = document.getElementById("cspd_video");
  document.onkeydown = function(event) {
      switch (event.keyCode) {
         case 37:
              event.preventDefault();
              
              vid_currentTime = theVideo.currentTime;
              theVideo.currentTime = vid_currentTime - 5;
            break;
         
         case 39:
              event.preventDefault();
              
              vid_currentTime = theVideo.currentTime;
              theVideo.currentTime = vid_currentTime + 5;
            break;
         
      }
  };