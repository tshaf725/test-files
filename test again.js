videojs.registerPlugin('arrowKeys', function() {
  var myPlayer = this,
      jumpAmount = 5;

  // +++ Add event handlers to jump back or forward +++
  // Back button logic, don't jump to negative times
  myPlayer.addEventListener('case' 37, function () {
    var newTime,
        rewindAmt = jumpAmount,
        videoTime = myPlayer.currentTime();
    if (videoTime >= rewindAmt) {
      newTime = videoTime - rewindAmt;
    } else {
      newTime = 0;
    }
    myPlayer.currentTime(newTime);
  });

  // Forward button logic, don't jump past the duration
  myPlayer.addEventListener('click', function () {
    var newTime,
        forwardAmt = jumpAmount,
        videoTime = myPlayer.currentTime(),
        videoDuration = myPlayer.duration();
    if (videoTime + forwardAmt <= videoDuration) {
      newTime = videoTime + forwardAmt;
    } else {
      newTime = videoDuration;
    }
    myPlayer.currentTime(newTime);
  });
});