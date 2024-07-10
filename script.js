function coverScreen() {
    var button = document.getElementById("myButton");
    var audio = document.getElementById("myAudio");
  
    audio.play();

    button.style.opacity = "0";
    setTimeout(function() {
      button.classList.add("hidden");
    }, 500);
}


  var audio = document.getElementById("myAudio");
  var playPauseButton = document.getElementById("playPauseButton");
  var lowerVolumeButton = document.getElementById("lowerVolumeButton");
  var raiseVolumeButton = document.getElementById("raiseVolumeButton");

  // Play/pause toggle function
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = "Pause";
    } else {
      audio.pause();
      playPauseButton.textContent = "Play";
    }
  }

  // Lower volume function
  function lowerVolume() {
    if (audio.volume >= 0.1) {
      audio.volume -= 0.1;
    }
  }

  // Raise volume function
  function raiseVolume() {
    if (audio.volume <= 0.9) {
      audio.volume += 0.1;
    }
  }

  // Event listeners for buttons
  playPauseButton.addEventListener("click", function() {
    togglePlayPause();
  });

  lowerVolumeButton.addEventListener("click", function() {
    lowerVolume();
  });

  raiseVolumeButton.addEventListener("click", function() {
    raiseVolume();
  });
