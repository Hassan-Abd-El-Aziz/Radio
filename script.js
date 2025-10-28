document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("quranRadio");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  playBtn.addEventListener("click", () => {
    audio.play();
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
  });
});
