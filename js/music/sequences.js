const playSequence = (now) => {
  Tone.loaded().then(() => {
    playBass(now);
    playInstru1(now);
    playRythm(now);
  });
};
