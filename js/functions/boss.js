const spawnBoss = (spawnCount, currentIndex) => {
  let bassSynth = new Tone.FMSynth().toDestination();
  let instru1 = new Tone.Synth().toDestination();
  let bassGain = new Tone.Gain(0.3).toDestination();
  let instru1Gain = new Tone.Gain(-0.8).toDestination();
  let snareGain = new Tone.Gain(-0.9).toDestination();
  const reverb = new Tone.Reverb({
    decay: 1,
  }).toDestination();

  const now = Tone.now();
  // const feedbackDelay = new Tone.FeedbackDelay(0.3, 0.05).toDestination();
  const letterToTypeBoss = document.getElementById("letter-to-type-boss");
  const keyImg = document.createElement("img");
  keyImg.src = "../assets/icons/keyboard-key-up.png";
  keyImg.classList.add("arrow-key");

  letterToTypeBoss.appendChild(keyImg);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 2000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 4000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 6000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 6500);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 7000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 8000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 10000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 12000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 14000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 14500);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 15000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 16000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 18000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 20000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 22000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 22500);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 23000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 24000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 26000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 28000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 30000);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 30500);

  setTimeout(() => {
    const keyImg = document.createElement("img");
    keyImg.src = "../assets/icons/keyboard-key-up.png";
    keyImg.classList.add("arrow-key");

    letterToTypeBoss.appendChild(keyImg);
  }, 31000);

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

  Tone.loaded().then(() => {
    instru1.connect(instru1Gain);
    instru1.triggerAttackRelease("C3", "8n", now + 32);
    instru1.triggerAttackRelease("C3", "8n", now + 32.38);
    instru1.triggerAttackRelease("C3", "8n", now + 32.76);
    instru1.triggerAttackRelease("C3", "8n", now + 33.14);
    instru1.triggerAttackRelease("C3", "8n", now + 33.52);

    instru1.triggerAttackRelease("C3", "8n", now + 34);
    instru1.triggerAttackRelease("C3", "8n", now + 34.38);
    instru1.triggerAttackRelease("C3", "8n", now + 34.76);
    instru1.triggerAttackRelease("C3", "8n", now + 35.14);
    instru1.triggerAttackRelease("C3", "8n", now + 35.52);

    instru1.triggerAttackRelease("C3", "8n", now + 36);
    instru1.triggerAttackRelease("C3", "8n", now + 36.38);
    instru1.triggerAttackRelease("C3", "8n", now + 36.76);
    instru1.triggerAttackRelease("C3", "8n", now + 37.14);
    instru1.triggerAttackRelease("C3", "8n", now + 37.52);

    instru1.triggerAttackRelease("C3", "8n", now + 38);
    instru1.triggerAttackRelease("C3", "8n", now + 38.38);
    instru1.triggerAttackRelease("C#3", "8n", now + 38.76);
    instru1.triggerAttackRelease("E3", "8n", now + 39.14);
    instru1.triggerAttackRelease("C#3", "8n", now + 39.52);

    instru1.triggerAttackRelease("C3", "8n", now + 40);
    instru1.triggerAttackRelease("C3", "8n", now + 40.38);
    instru1.triggerAttackRelease("C3", "8n", now + 40.76);
    instru1.triggerAttackRelease("C3", "8n", now + 41.14);
    instru1.triggerAttackRelease("C3", "8n", now + 41.52);

    instru1.triggerAttackRelease("C3", "8n", now + 42);
    instru1.triggerAttackRelease("C3", "8n", now + 42.38);
    instru1.triggerAttackRelease("C3", "8n", now + 42.76);
    instru1.triggerAttackRelease("C3", "8n", now + 43.14);
    instru1.triggerAttackRelease("C3", "8n", now + 43.52);

    instru1.triggerAttackRelease("C3", "8n", now + 44);
    instru1.triggerAttackRelease("C3", "8n", now + 44.38);
    instru1.triggerAttackRelease("C3", "8n", now + 44.76);
    instru1.triggerAttackRelease("C3", "8n", now + 45.14);
    instru1.triggerAttackRelease("C3", "8n", now + 45.52);

    instru1.triggerAttackRelease("C3", "8n", now + 46);
    instru1.triggerAttackRelease("C3", "8n", now + 46.38);
    instru1.triggerAttackRelease("C#3", "8n", now + 46.76);
    instru1.triggerAttackRelease("E3", "8n", now + 47.14);
    instru1.triggerAttackRelease("C#3", "8n", now + 47.52);

    // kick.triggerAttackRelease("C4", "8n", now + 0);
    // snare.triggerAttackRelease("C4", "8n", now + 0.5);
    // kick.triggerAttackRelease("C4", "8n", now + 1);
    // snare.triggerAttackRelease("C4", "8n", now + 1.5);
    // kick.triggerAttackRelease("C4", "8n", now + 2);
    // snare.triggerAttackRelease("C4", "8n", now + 2.5);
    // kick.triggerAttackRelease("C4", "8n", now + 3);
    // snare.triggerAttackRelease("C4", "8n", now + 3.5);
    // kick.triggerAttackRelease("C4", "8n", now + 3.75);

    // kick.triggerAttackRelease("C4", "8n", now + 4);
    // snare.triggerAttackRelease("C4", "8n", now + 4.5);
    // kick.triggerAttackRelease("C4", "8n", now + 5);
    // snare.triggerAttackRelease("C4", "8n", now + 5.5);
    // kick.triggerAttackRelease("C4", "8n", now + 6);
    // snare.triggerAttackRelease("C4", "8n", now + 6.5);
    // kick.triggerAttackRelease("C4", "8n", now + 7);
    // snare.triggerAttackRelease("C4", "8n", now + 7.5);

    // kick.triggerAttackRelease("C4", "8n", now + 8);
    // snare.triggerAttackRelease("C4", "8n", now + 8.5);
    // kick.triggerAttackRelease("C4", "8n", now + 9);
    // snare.triggerAttackRelease("C4", "8n", now + 9.5);
    // kick.triggerAttackRelease("C4", "8n", now + 10);
    // snare.triggerAttackRelease("C4", "8n", now + 10.5);
    // kick.triggerAttackRelease("C4", "8n", now + 11);
    // snare.triggerAttackRelease("C4", "8n", now + 11.5);
    // kick.triggerAttackRelease("C4", "8n", now + 11.75);

    // kick.triggerAttackRelease("C4", "8n", now + 12);
    // snare.triggerAttackRelease("C4", "8n", now + 12.5);
    // kick.triggerAttackRelease("C4", "8n", now + 13);
    // snare.triggerAttackRelease("C4", "8n", now + 13.5);
    // kick.triggerAttackRelease("C4", "8n", now + 14);
    // snare.triggerAttackRelease("C4", "8n", now + 14.5);
    // kick.triggerAttackRelease("C4", "8n", now + 15);
    // snare.triggerAttackRelease("C4", "8n", now + 15.5);

    kick.triggerAttackRelease("C4", "8n", now + 16);
    snare.triggerAttackRelease("C4", "8n", now + 16.5);
    kick.triggerAttackRelease("C4", "8n", now + 17);
    snare.triggerAttackRelease("C4", "8n", now + 17.5);
    kick.triggerAttackRelease("C4", "8n", now + 18);
    snare.triggerAttackRelease("C4", "8n", now + 18.5);
    kick.triggerAttackRelease("C4", "8n", now + 19);
    snare.triggerAttackRelease("C4", "8n", now + 19.5);
    kick.triggerAttackRelease("C4", "8n", now + 19.75);

    kick.triggerAttackRelease("C4", "8n", now + 20);
    snare.triggerAttackRelease("C4", "8n", now + 20.5);
    kick.triggerAttackRelease("C4", "8n", now + 21);
    snare.triggerAttackRelease("C4", "8n", now + 21.5);
    kick.triggerAttackRelease("C4", "8n", now + 22);
    snare.triggerAttackRelease("C4", "8n", now + 22.5);
    kick.triggerAttackRelease("C4", "8n", now + 23);
    snare.triggerAttackRelease("C4", "8n", now + 23.5);

    kick.triggerAttackRelease("C4", "8n", now + 24);
    snare.triggerAttackRelease("C4", "8n", now + 24.5);
    kick.triggerAttackRelease("C4", "8n", now + 25);
    snare.triggerAttackRelease("C4", "8n", now + 25.5);
    kick.triggerAttackRelease("C4", "8n", now + 26);
    snare.triggerAttackRelease("C4", "8n", now + 26.5);
    kick.triggerAttackRelease("C4", "8n", now + 27);
    snare.triggerAttackRelease("C4", "8n", now + 27.5);
    kick.triggerAttackRelease("C4", "8n", now + 27.75);

    kick.triggerAttackRelease("C4", "8n", now + 28);
    snare.triggerAttackRelease("C4", "8n", now + 28.5);
    kick.triggerAttackRelease("C4", "8n", now + 29);
    snare.triggerAttackRelease("C4", "8n", now + 29.5);
    kick.triggerAttackRelease("C4", "8n", now + 30);
    snare.triggerAttackRelease("C4", "8n", now + 30.5);
    kick.triggerAttackRelease("C4", "8n", now + 31);
    snare.triggerAttackRelease("C4", "8n", now + 31.5);

    kick.triggerAttackRelease("C4", "8n", now + 32);
    snare.triggerAttackRelease("C4", "8n", now + 32.5);
    kick.triggerAttackRelease("C4", "8n", now + 33);
    snare.triggerAttackRelease("C4", "8n", now + 33.5);
    kick.triggerAttackRelease("C4", "8n", now + 34);
    snare.triggerAttackRelease("C4", "8n", now + 34.5);
    kick.triggerAttackRelease("C4", "8n", now + 35);
    snare.triggerAttackRelease("C4", "8n", now + 35.5);
    kick.triggerAttackRelease("C4", "8n", now + 35.75);

    kick.triggerAttackRelease("C4", "8n", now + 36);
    snare.triggerAttackRelease("C4", "8n", now + 36.5);
    kick.triggerAttackRelease("C4", "8n", now + 37);
    snare.triggerAttackRelease("C4", "8n", now + 37.5);
    kick.triggerAttackRelease("C4", "8n", now + 38);
    snare.triggerAttackRelease("C4", "8n", now + 38.5);
    kick.triggerAttackRelease("C4", "8n", now + 39);
    snare.triggerAttackRelease("C4", "8n", now + 39.5);

    kick.triggerAttackRelease("C4", "8n", now + 40);
    snare.triggerAttackRelease("C4", "8n", now + 40.5);
    kick.triggerAttackRelease("C4", "8n", now + 41);
    snare.triggerAttackRelease("C4", "8n", now + 41.5);
    kick.triggerAttackRelease("C4", "8n", now + 42);
    snare.triggerAttackRelease("C4", "8n", now + 42.5);
    kick.triggerAttackRelease("C4", "8n", now + 43);
    snare.triggerAttackRelease("C4", "8n", now + 43.5);
    kick.triggerAttackRelease("C4", "8n", now + 43.75);

    kick.triggerAttackRelease("C4", "8n", now + 44);
    snare.triggerAttackRelease("C4", "8n", now + 44.5);
    kick.triggerAttackRelease("C4", "8n", now + 45);
    snare.triggerAttackRelease("C4", "8n", now + 45.5);
    kick.triggerAttackRelease("C4", "8n", now + 46);
    snare.triggerAttackRelease("C4", "8n", now + 46.5);
    kick.triggerAttackRelease("C4", "8n", now + 47);
    snare.triggerAttackRelease("C4", "8n", now + 47.5);
    kick.triggerAttackRelease("C4", "8n", now + 47.75);

    //dubstep rythm

    kick.triggerAttackRelease("C4", "8n", now + 48);
    kick.triggerAttackRelease("C4", "8n", now + 48.75);

    snare.triggerAttackRelease("C3", "8n", now + 49);

    kick.triggerAttackRelease("C4", "8n", now + 50);
    kick.triggerAttackRelease("C4", "8n", now + 50.375);
    kick.triggerAttackRelease("C4", "8n", now + 50.75);

    snare.triggerAttackRelease("C3", "8n", now + 51);

    kick.triggerAttackRelease("C4", "8n", now + 52);
    kick.triggerAttackRelease("C4", "8n", now + 52.75);

    snare.triggerAttackRelease("C3", "8n", now + 53);

    kick.triggerAttackRelease("C4", "8n", now + 54);
    kick.triggerAttackRelease("C4", "8n", now + 54.375);
    kick.triggerAttackRelease("C4", "8n", now + 54.75);

    snare.triggerAttackRelease("C3", "8n", now + 55);

    snare.connect(snareGain);
    snare.triggerAttackRelease("C3", "8n", now + 16.5);
    snare.triggerAttackRelease("C3", "8n", now + 18.5);
    snare.triggerAttackRelease("C3", "8n", now + 20.5);
    snare.triggerAttackRelease("C3", "8n", now + 22.5);
    snare.triggerAttackRelease("C3", "8n", now + 24.5);
    snare.triggerAttackRelease("C3", "8n", now + 26.5);
    snare.triggerAttackRelease("C3", "8n", now + 28.5);
    snare.triggerAttackRelease("C3", "8n", now + 30.5);
    snare.triggerAttackRelease("C3", "8n", now + 32.5);
    snare.triggerAttackRelease("C3", "8n", now + 34.5);
    snare.triggerAttackRelease("C3", "8n", now + 36.5);
    snare.triggerAttackRelease("C3", "8n", now + 38.5);
    snare.triggerAttackRelease("C3", "8n", now + 40.5);
    snare.triggerAttackRelease("C3", "8n", now + 42.5);
    snare.triggerAttackRelease("C3", "8n", now + 44.5);
    snare.triggerAttackRelease("C3", "8n", now + 46.5);
    snare.triggerAttackRelease("C3", "8n", now + 48.5);

    const seq = new Tone.Sequence(
      (time, note) => {
        bassSynth.connect(bassGain);
        bassSynth.triggerAttackRelease(note, 0.05, time);
        // subdivisions are given as subarrays
      },
      [
        // boss spawn
        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        // mesure sans note
        [],
        [],
        [],
        [],
        [],
        [],
        ["A#1"],
        ["C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        // mesure sans note
        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        // mesure sans note
        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        // mesure sans note
        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "B1",
        ["B1", "G#1"],

        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2", "C2"],
        "D#2",
        ["E2", "C#2"],

        // mesure sans note
        "C2",
        ["C2", "C2"],
        "C#2",
        ["C2", "C2"],
        "C2",
        ["C2"],
        "B1",
        ["B1", "G#1"],
      ]
    );
    seq.loop = false;
    seq.start(0);
  });

  // Tone.Transport.start();
  function setup() {
    Tone.Transport.start();
  }
  setup();

  if (bosses.length === 0) {
    for (let i = 0; i < spawnCount; i++) {
      currentIndex = i;
      combinedOffset += xOffset;
      bosses.push(
        new Boss(currentIndex, {
          position: { x: waypoints[2].x + combinedOffset, y: waypoints[2].y },
        })
      );
      bossSpawn++;
    }
  }
};

const setBossesSpeed = () => {
  if (pause) {
    speedBosses = 0.1;
  } else if (gameOver) {
    speedBosses = 0;
  } else if (bosses.length > 0) {
    if (bosses[0].position.x > canvas.width) {
      speedBosses = 20;
    } else {
      if (!gameOver) {
        speedBosses = initSpeedBosses;
      }
    }
  } else {
    speedBosses = initSpeedBosses;
  }
};

const spawnBossEnemies = (spawnCount, currentIndex) => {
  for (let i = 0; i < spawnCount; i++) {
    currentIndex = i;
    combinedOffset += xOffset;
    enemies.push(
      new Enemy(currentIndex, {
        position: { x: waypoints[2].x + combinedOffset, y: waypoints[2].y },
      })
    );
    enemiesSpawn++;
  }
};

const checkBossHealth = () => {
  if (bosses[0].health <= 66 && sendBossWaves === 0) {
    spawnBossEnemies(25, 0);
    bossEnemiesWave = true;
    sendBossWaves++; // sendwave = 1
  }
  if (bosses[0].health <= 33 && sendBossWaves === 1) {
    // si bug changer condition
    spawnBossEnemies(25, 0);
    bossEnemiesWave = true;
    sendBossWaves++; // sendwave = 2
  }
  if (bosses[0].health <= 10 && sendBossWaves === 2) {
    // si bug changer condition
    spawnBossEnemies(25, 0);
    bossEnemiesWave = true;
    sendBossWaves++;
  }
  if (bosses[0].health <= 0) {
    bosses.splice(0, 1);
    bossWave = false;
    bossEnemiesWave = false;
    sendBossWaves = 0;
    bossSpawn = 0;
    wave++;
  }
};
