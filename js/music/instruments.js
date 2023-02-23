let bassSynth = new Tone.FMSynth().toDestination();
let instru1 = new Tone.Synth().toDestination();

const playBass = (now) => {
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
};

const playInstru1 = (now) => {
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
};
