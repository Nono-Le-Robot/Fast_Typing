const spawnBoss = (spawnCount, currentIndex) => {
  let bassSynth;

  const now = Tone.now();
  // const feedbackDelay = new Tone.FeedbackDelay(0.3, 0.05).toDestination();
  const letterToTypeBoss = document.getElementById("letter-to-type-boss");
  const keyImg = document.createElement("img");
  keyImg.src = "../assets/icons/keyboard-key-up.png";
  keyImg.classList.add("arrow-key");
  letterToTypeBoss.appendChild(keyImg);

  if (keyImg !== undefined) {
    letterToTypeBoss.style.left = "105vw";
  }

  const vol = new Tone.Volume(-15).toDestination();

  const sampler = new Tone.Sampler({
    urls: {
      "D#4": "explosionEnemy.mp3",
    },
    release: 1,
    baseUrl: "../assets/sounds/",
  }).toDestination();

  Tone.loaded().then(() => {
    sampler.triggerAttackRelease("C4", "8n", now + 16.5);
    sampler.triggerAttackRelease("C4", "8n", now + 17.5);
    sampler.triggerAttackRelease("C4", "8n", now + 18.5);
    sampler.triggerAttackRelease("C4", "8n", now + 19.5);
    sampler.triggerAttackRelease("C4", "8n", now + 20.5);
    sampler.triggerAttackRelease("C4", "8n", now + 21.5);
    sampler.triggerAttackRelease("C4", "8n", now + 22.5);
    sampler.triggerAttackRelease("C4", "8n", now + 23.5);

    const seq = new Tone.Sequence(
      (time, note) => {
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
      ]
    );
    seq.loop = false;
    seq.start(0);
  });

  // Tone.Transport.start();
  function setup() {
    bassSynth = new Tone.FMSynth().toDestination();
    bassSynth.connect(vol);
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
