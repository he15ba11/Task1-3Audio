var audio = document.getElementsByTagName("audio")[0];
var img = document.querySelector("img");
var btnPlay = document.getElementById("play");
var btnPause = document.getElementById("pause");
var btnstop = document.getElementById("stop");
var volume = document.getElementById("volume");
var durBtn = document.getElementById("duration");
var p = document.getElementsByTagName("p");

btnPlay.addEventListener("click", function () {
  audio.play();
});
btnPause.addEventListener("click", function () {
  audio.pause();
});
btnstop.addEventListener("click", function () {
  audio.load();
  audio.pause();
});

volume.addEventListener("input", function () {
  audio.volume = volume.value;
});
durBtn.addEventListener("input", function () {
  audio.currentTime = durBtn.value;
});
audio.addEventListener("durationchange", function () {
  durBtn.max = audio.duration;
});

for (var i = 0; i < p.length; i++) {
  p[i].addEventListener("click", function () {
    img.setAttribute("src", `images/${this.getAttribute("index")}.jpg`);
    audio.setAttribute("src", `audios/${this.getAttribute("index")}.mp3`);
  });
}
