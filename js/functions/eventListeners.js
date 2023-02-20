addEventListener("keyup", (event) => {
  pressed = false;
});

document.addEventListener("keydown", (event) => {
  checkMaj(event); // check if capslock is on
  if (event.key === " " && bossWave && !bossEnemiesWave) {
    fireAudio.currentTime = 0;
    fireAudio.play();
    bosses[0].health -= 2;
    rightkey = true;
  }
  //exclude keys that are not letters
  if (filteredKeys.includes(event.key)) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
  if (event.key === "Escape") {
    pause = !pause;
    if (pause) {
      setPause();
    } else {
      removePause();
    }
  }

  if (!pause) {
    const letter = event.key.toLowerCase();
    event.stopImmediatePropagation();
    //if it's boss wave, only spacebar is allowed
    if (bossWave && bosses.length !== 0 && !bossEnemiesWave) {
      if (event.key === " ") {
        if (!pressed) {
          fireAudio.currentTime = 0;
          fireAudio.play();
          bosses[0].health -= 2;
          rightkey = true;
        }
        pressed = true;
      }
      if (bosses[0].health <= 66) {
        spawnEnemies(25, 0);
        if (sendBossWaves === 0) {
          bossEnemiesWave = true;
        }
        sendBossWaves++;
      }
      if (bosses[0].health <= 0) {
        // if boss is dead
      }
    } else {
      // if it's not boss wave
      if (
        enemies.length !== 0
        // && enemies[0].position.x < canvas.width
      ) {
        if (words[wave][0][0] === letter) {
          goodKey(event);
        } else {
          wrongKey(event);
        }
        if (enemies[0].health <= 0) {
          explosionEnemyAnimation();
          enemies.splice(0, 1);
          explosionEnemyAudio.currentTime = 0;
          explosionEnemyAudio.play();
          words[wave].splice(0, 1);
          htmlRender();
        }
        if (words[wave] !== undefined) {
          if (words[wave][0] === "") {
            words[wave].splice(0, 1);
            enemies.splice(0, 1);
            htmlRender();
          }
        }
      }
    }
    //slow tower
    if (event.key === "F1") {
      event.preventDefault();
      frozeEnemies();
    }
  }
});
