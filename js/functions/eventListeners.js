let noteIndex = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "'") {
    event.preventDefault();
  }

  const TIME_TO_PLAY = "0.8t";
  const letterToTypeBoss = document.getElementById("letter-to-type-boss");
  const ARROW_KEY_CLASS = ".arrow-key";

  if (goodTiming && event.key === "ArrowUp") {
    const keyToRemove = document.querySelectorAll(ARROW_KEY_CLASS);
    letterToTypeBoss.removeChild(keyToRemove[0]);
    sampler.triggerAttackRelease(melodyToPlay[noteIndex], TIME_TO_PLAY);
    noteIndex++;
    if (goodTiming && !perfectTiming) {
      activeShield = true;
      goodReward();
      const divTiming = document.createElement("div");
      divTiming.classList.add("good-timing");
      const popTiming = document.createElement("p"); // Créer un nouvel élément div
      popTiming.textContent = "GOOD";
      popTiming.classList.add("pop-timing");
      divTiming.appendChild(popTiming);
      document.body.appendChild(divTiming); // Ajouter le nouvel élément div au corps de la page
    }
    if (perfectTiming) {
      activeShield = true;
      perfectReward();
      const divTiming = document.createElement("div");
      divTiming.classList.add("perfect-timing");
      const popTiming = document.createElement("p"); // Créer un nouvel élément div
      popTiming.textContent = "PERFECT";
      popTiming.classList.add("pop-timing");
      divTiming.appendChild(popTiming);
      document.body.appendChild(divTiming); // Ajouter le nouvel élément div au corps de la page
    }
    goodTiming = false;
    perfectTiming = false;
    goodKey();
  }

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
      checkBossHealth();
    } else {
      // if it's not boss wave
      if (
        enemies.length !== 0
        // && enemies[0].position.x < canvas.width
      ) {
        if (
          (words.length > 0 &&
            words[wave][0][0] === letter &&
            !bossEnemiesWave) ||
          (wordsEnemiesBoss.length > 0 &&
            bossEnemiesWave &&
            wordsEnemiesBoss[0][0] === letter)
        ) {
          goodKey(event);
        } else {
          wrongKey(event);
        }
        if (enemies[0].health <= 0) {
          // si probleme vie regarder ici
          explosionEnemyAnimation();
          enemies.splice(0, 1);
          explosionEnemyAudio.currentTime = 0;
          explosionEnemyAudio.play();
          words[wave].splice(0, 1);
          if (bossEnemiesWave) {
            wordsEnemiesBoss.splice(0, 1);
          }
          htmlRender();
        }

        if (words[wave] !== undefined && !bossEnemiesWave) {
          if (words[wave][0] === "") {
            words[wave].splice(0, 1);
            enemies.splice(0, 1);
            htmlRender();
          }
          if (wordsEnemiesBoss[0] === "") {
            wordsEnemiesBoss.splice(0, 1);
            htmlRender();
          }
        }
      }
    }
    //slow tower
    if (event.key === "F1") {
      event.preventDefault();
      if (!bossWave) frozeEnemies();
    }
  }
});
