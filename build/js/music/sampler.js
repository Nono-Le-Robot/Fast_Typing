const goodKeySound = new Tone.Sampler({
  urls: {
    "D#4": "goodTiming.mp3",
  },
  release: 1,
  baseUrl: "https://sannier-renaud.fr/type-tower/assets/sounds/",
})
  .connect(goodKeySoundGain)
  .connect(reverb)
  .toDestination();

const instru3 = new Tone.Sampler({
  urls: {
    "D#4": "goodTiming.mp3",
  },
  release: 2,
  baseUrl: "https://sannier-renaud.fr/type-tower/assets/sounds/",
})
  .connect(instru3Gain)
  .connect(reverbLong)
  .toDestination();

const wrongKeySound = new Tone.Sampler({
  urls: {
    "D#4": "wrongTiming.mp3",
  },
  release: 1,
  baseUrl: "https://sannier-renaud.fr/type-tower/assets/sounds/",
})
  .connect(wrongKeySoundGain)
  .connect(reverb)
  .toDestination();

const kick = new Tone.Sampler({
  urls: {
    "D#4": "kick.mp3",
  },
  baseUrl: "https://sannier-renaud.fr/type-tower/assets/sounds/",
})
  .connect(kickGain)
  .toDestination();

const snare = new Tone.Sampler({
  urls: {
    "D#3": "snare.mp3",
  },

  baseUrl: "https://sannier-renaud.fr/type-tower/assets/sounds/",
})
  .connect(snareGain)
  .connect(reverbShort)
  .toDestination();
