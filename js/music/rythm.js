const playRythm = (now) => {
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

  Tone.Transport.scheduleRepeat(
    (now) => {
      kickTrigger = true;
      bossFire = false;
    },
    "0.5t",
    "8m"
  );

  // Planifie l'exécution de la fonction en utilisant le même temps que le déclenchement de l'attaque du kick
  const test = Tone.Transport.getSecondsAtTime(16);
  // if (now === 16) {
  console.log(test);
  //   kickTrigger = true;
  // }
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

  //humanize
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
};
