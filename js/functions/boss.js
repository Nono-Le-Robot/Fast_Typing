const spawnBoss = (spawnCount, currentIndex) => {
  const now = Tone.now();
  playSequence(now);

  spawnImageKeys();

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

const setBossesDirection = (boss) => {
  //define enemy direction
  let lastPositionX = boss.position.x;
  let lastPositionY = boss.position.y;
  let moveTreshold = 3.5;
  setTimeout(() => {
    let newPositionX = boss.position.x;
    let newPositionY = boss.position.y;
    if (Math.abs(newPositionX - lastPositionX) > moveTreshold) {
      if (newPositionX < lastPositionX) {
        boss.image.src = "../assets/boss_level_1_left.png";
      } else if (newPositionX > lastPositionX) {
        boss.image.src = "../assets/boss_level_1_right.png";
      }
    }
    if (Math.abs(newPositionY - lastPositionY) > moveTreshold) {
      if (newPositionY < lastPositionY) {
        boss.image.src = "../assets/boss_level_1_up.png";
      } else if (newPositionY > lastPositionY) {
        boss.image.src = "../assets/boss_level_1_down.png";
      }
    }
    lastPositionX = newPositionX;
    lastPositionY = newPositionY;
  }, 100);
};

const setBossesSpeed = () => {
  if (pause) {
    speedBosses = 0;
  } else if (gameOver) {
    speedBosses = 0;
  } else if (finalBossPoisition) {
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
