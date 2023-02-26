const spawnBoss = (spawnCount, currentIndex) => {
  const now = Tone.now();

  spawnImageKeys();
  if (!gameOver) playSequence(now);

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

// Créez un objet pour stocker les images
const bossImages = {};

// Chargez les images et stockez-les dans l'objet
bossImages["left"] = new Image();
bossImages["left"].src = "../assets/boss_level_1_left.png";
bossImages["right"] = new Image();
bossImages["right"].src = "../assets/boss_level_1_right.png";
bossImages["up"] = new Image();
bossImages["up"].src = "../assets/boss_level_1_up.png";
bossImages["down"] = new Image();
bossImages["down"].src = "../assets/boss_level_1_down.png";
bossImages["destroy-13"] = new Image();
bossImages["destroy-13"].src = "../assets/boss_level_1_left_13.png";
bossImages["destroy-23"] = new Image();
bossImages["destroy-23"].src = "../assets/boss_level_1_left_23.png";

const setBossesDirection = (boss) => {
  // Define enemy direction
  let lastPositionX = boss.position.x;
  let lastPositionY = boss.position.y;
  let moveTreshold = 3.5;

  setTimeout(() => {
    if (!destroyed) {
      let newPositionX = boss.position.x;
      let newPositionY = boss.position.y;

      if (Math.abs(newPositionX - lastPositionX) > moveTreshold) {
        if (newPositionX < lastPositionX) {
          boss.image = bossImages["left"];
        } else if (newPositionX > lastPositionX) {
          boss.image = bossImages["right"];
        }
      }
      if (Math.abs(newPositionY - lastPositionY) > moveTreshold) {
        if (newPositionY < lastPositionY) {
          boss.image = bossImages["up"];
        } else if (newPositionY > lastPositionY) {
          boss.image = bossImages["down"];
        }
      }
      lastPositionX = newPositionX;
      lastPositionY = newPositionY;
    }
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
  if (bosses[0].health < 66 && sendBossWaves === 0) {
    destroyed = true;
    armExplosion(-20, -50);
    explosionEnemySound();

    setTimeout(() => {
      armExplosion(50, -50);
      explosionEnemySound();
    }, 500);
    setTimeout(() => {
      bosses[0].image = bossImages["destroy-13"];
    }, 750);
    sendBossWaves++;
    //jouer l'annimation et la deuxieme séquence
  }
  if (bosses[0].health <= 33 && sendBossWaves === 1) {
    setTimeout(() => {
      destroyed = true;
      armExplosion(-20, 50);
      explosionEnemySound();

      setTimeout(() => {
        armExplosion(50, 50);
        explosionEnemySound();
      }, 500);
      setTimeout(() => {
        bosses[0].image = bossImages["destroy-23"];
      }, 750);
      //jouer l'annimation et la deuxieme séquence
    }, 2000);
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
