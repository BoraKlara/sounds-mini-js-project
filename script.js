const sounds = ["cheering", "protest", "aha", "laugh"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  //Inner text of the button
  btn.innerText = sound;

  // action when clicking
  btn.addEventListener("click", () => {
    pauseAudio();
    document.getElementById(sound).play();
  });

  // adding to the body

  document.body.appendChild(btn);
});

// Has to go over each sound to pause
function pauseAudio() {
  sounds.forEach((sound) => {
    const voice = document.getElementById(sound);
    voice.pause();
    voice.currentTime = 0;
  });
}
