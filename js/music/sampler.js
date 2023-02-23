const sampler = new Tone.Sampler({
  urls: {
    "D#4": "guitarPm.mp3",
  },
  release: 1,
  baseUrl: "../assets/sounds/",
})
  .connect(gain)
  .connect(reverb)
  .toDestination();
addEventListener("keyup", (event) => {
  pressed = false;
});

const kick = new Tone.Sampler({
  urls: {
    "D#4": "kick.mp3",
  },
  release: 1,
  baseUrl: "../assets/sounds/",
}).toDestination();

const snare = new Tone.Sampler({
  urls: {
    "D#3": "snare.mp3",
  },
  release: 1,
  baseUrl: "../assets/sounds/",
}).toDestination();
