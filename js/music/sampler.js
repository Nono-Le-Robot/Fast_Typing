const goodKeySound = new Tone.Sampler({
  urls: {
    "D#4": "goodTiming.mp3",
  },
  release: 1,
  baseUrl: "../assets/sounds/",
})
  .connect(goodKeySoundGain)
  .connect(reverb)
  .toDestination();

const wrongKeySound = new Tone.Sampler({
  urls: {
    "D#4": "wrongTiming.mp3",
  },
  release: 1,
  baseUrl: "../assets/sounds/",
})
  .connect(wrongKeySoundGain)
  .connect(reverb)
  .toDestination();

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
