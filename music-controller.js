function changeImage() {
    var img = document.getElementById("imgButton");
    if (img.src.match("Play")) {
      img.src = "Mute.png";
      document.getElementById("bgMusic").pause();
    } else {
      img.src = "Play.png";
      document.getElementById("bgMusic").play();
    }
  }