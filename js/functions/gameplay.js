const setMultiplier = () => {
  if (combo % 10 === 0) {
    multiplierWinSound();
    coinsMultiplier = 1 + Math.floor(combo / 10) * 0.1;
    document.getElementById("multiplier").style.color = "yellow";
    document.getElementById("multiplier").classList.add("shake-anim-y");
    setTimeout(() => {
      document.getElementById("multiplier").style.color = "white";
      document.getElementById("multiplier").classList.remove("shake-anim-y");
    }, 500);
    document.getElementById(
      "combo"
    ).innerHTML = `Combo : ${combo} x ${coinsMultiplier}`;
  }
};

const resetMultiplier = () => {
  if (coinsMultiplier > 1) {
    multiplierFailSound();
  }
  coinsMultiplier = 1;
  document.getElementById("multiplier").classList.add("shake-anim-x");
  document.getElementById("multiplier").style.color = "red";
  setTimeout(() => {
    document.getElementById("multiplier").style.color = "white";
    document.getElementById("multiplier").classList.remove("shake-anim-x");
    document.getElementById("multiplier").style.display = "none";
  }, 500);
};

const checkMaj = () => {
  const element = document.getElementById("warning");

  if (event.getModifierState("CapsLock")) {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = "translateY(-220%)";
  } else {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = "translateY(-110%)";
  }
};

const goodKey = (event) => {
  fireAudio.currentTime = 0;
  fireAudio.play();
  rightkey = true;
  goodEntry++;
  combo++;
  setMultiplier();
  if (enemies.length > 0) {
    if (bossWave && wordsEnemiesBoss) {
      enemies[0].health -= 100 / enemies[0].fullWordBoss.length;
      enemies[0].health = Math.floor(enemies[0].health);
    } else {
      enemies[0].health -= 100 / enemies[0].fullWord.length;
      enemies[0].health = Math.floor(enemies[0].health);
    }
  }
  if (!bossWave) {
    coins += coinsPerAttack * coinsMultiplier;
  }
  words[wave][0] = words[wave][0].slice(1);
  if (bossEnemiesWave) {
    wordsEnemiesBoss[0] = wordsEnemiesBoss[0].slice(1);
  }
  htmlRender();
};

const wrongKey = (event) => {
  if (
    event.key !== " " &&
    event.key !== "Escape" &&
    event.key !== "F1" &&
    event.key !== "F2" &&
    event.key !== "F3" &&
    event.key !== "F4" &&
    event.key !== "Dead" &&
    event.key !== "Control" &&
    event.key !== "Shift" &&
    event.key !== "CapsLock" &&
    event.key !== "Tab" &&
    event.key !== "²" &&
    event.key !== "Control" &&
    event.key !== "Alt" &&
    event.key !== "AltGraph" &&
    event.key !== "Meta" &&
    event.key !== "ContextMenu" &&
    event.key !== "ArrowUp" &&
    event.key !== "ArrowDown" &&
    event.key !== "ArrowLeft" &&
    event.key !== "ArrowRight"
  ) {
    failAudio.currentTime = 0;
    failAudio.play();
    wrongEntry++;
    combo = 0;
    if (coinsMultiplier > 1) {
      multiplierFailAudio.currentTime = 0;
      multiplierFailAudio.play();
    }

    coinsMultiplier = 1;
    document.getElementById("multiplier").classList.add("shake-anim-x");
    document.getElementById("multiplier").style.color = "red";
    setTimeout(() => {
      document.getElementById("multiplier").style.color = "white";
      document.getElementById("multiplier").classList.remove("shake-anim-x");
      document.getElementById("multiplier").style.display = "none";
    }, 500);

    htmlRender();
  }
};

const setGameOver = (enemy) => {
  gameOver = true;
  speedEnemies = 0.3;

  document.getElementById("letter-to-type-boss").style.display = "none";
  document.getElementById("center-key-trigger").style.display = "none";
  document.getElementById("icons-powers").style.display = "none";
  document.getElementById("words").style.display = "none";
  document.getElementById("warning").style.display = "none";
  document.getElementById("display-infos").style.display = "none";
  let offsetExplosion = 20;
  explosionGameOverAnimation(enemy, offsetExplosion);
  explosionsGameOverSound();
  setTimeout(() => {
    players = [];
  }, 1000);
  setTimeout(() => {
    speedEnemies = 0;
    document.getElementById("game-over").style.display = "flex";
  }, 2100);
};

const setPause = () => {
  pause = true;
  document.getElementById("option-menu").style.display = "flex";

  document.getElementById("restart-icon").addEventListener("click", () => {
    location.reload();
  });
  document.getElementById("fullscreen-icon").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    function enterFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
      }
    }
    enterFullScreen(document.documentElement);
  });

  document.getElementById("exit-icon").addEventListener("click", () => {
    window.location.href = "./unloggedMenu.html";
  });
  warning;
  if (bossWave) {
    Tone.Transport.pause();
  }
  document.getElementById("option-card").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  document.getElementById("option-menu").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    removePause();
  });

  document.getElementById("close-options").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    removePause();
  });
};

removePause = () => {
  pause = false;
  document.getElementById("option-menu").style.display = "none";
  if (bossWave) {
    Tone.Transport.start();
  }
};

const goodReward = () => {
  coins += 0.5;
};

const perfectReward = () => {
  coins += 1;
};
