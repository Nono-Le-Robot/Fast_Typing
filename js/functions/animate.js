let allFrames = 0;

const animate = () => {
  const positionImg = document.querySelectorAll(".arrow-key");
  if (positionImg.length > 0) {
    for (let index = 0; index < positionImg.length; index++) {
      const img = positionImg[index];

      img.style.animationDuration = "33s";

      img.classList.add("move-key-to-center");
      var rect = img.getBoundingClientRect();
      var positionRectImg = {
        x: rect.left,
        y: rect.top,
      };
      if (
        positionRectImg.x >= window.innerWidth / 2 - 105 &&
        positionRectImg.x <= window.innerWidth / 2 + 105
      ) {
        goodTiming = true;
      } else {
        if (index === 0) {
          goodTiming = false;
        }
      }

      if (positionRectImg.x <= window.innerWidth / 2 - 105) {
        document.querySelectorAll(".arrow-key")[0].remove();
        noteIndex++;
        goodTiming = false;
      }
    }
  }

  // if (bossWave && !bossEnemiesWave) {
  //   var keyImg = document.getElementById("letter-to-type-boss");
  //   if (keyImg !== null) {
  //     var rect = keyImg.getBoundingClientRect();
  //     var keyPosition = {
  //       x: rect.left,
  //       y: rect.top,
  //     };
  //     if (
  //       keyPosition.x >= window.innerWidth / 2 - 105 &&
  //       keyPosition.x <= window.innerWidth / 2 + 105
  //     ) {
  //       goodTiming = true;
  //     } else {
  //       goodTiming = false;
  //     }
  //   }

  //   rythmeKeyPosition.classList.add("move-key-to-center");
  // }

  const letterToTypeBoss = document.getElementById("letter-to-type-boss");
  if (letterToTypeBoss !== null) {
    if (bossWave) {
      // baseKeyPosition -= 0.0278;
    }
    // letterToTypeBoss.style.left = `${baseKeyPosition}vw`;
  }

  //0.5 seconde / beat

  // 34 beats === touche au centre

  checkKeyTiming();
  const animationId = requestAnimationFrame(animate);
  ctx.drawImage(image, 0, 0);
  htmlRender();
  setEnemiesSpeed();
  setBossesSpeed();
  if (enemies.length === 0 && bosses.length === 0) {
    if (!bossWave) {
      spawnEnemies(words[wave].length, 0);
    } else {
      spawnBoss(1, 0);
    }
  }
  placementTiles.forEach((tile) => tile.update(mouse));

  if (sendBossWaves !== 0 && enemies.length === 0) {
    bossEnemiesWave = false;
  }

  players.forEach((player) => {
    player.update();
    player.target = null;
    selectTarget(player);
    for (let i = 0; i < player.projectiles.length; i++) {
      const projectile = player.projectiles[i];
      projectile.update();
      const xDifference = projectile.enemy.center.x - projectile.position.x;
      const yDifference = projectile.enemy.center.y - projectile.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      if (distance < projectile.enemy.height + projectile.radius) {
        score++;
        if (projectile.enemy.health <= 0) {
          const enemyIndex = enemies.findIndex((enemy) => {
            return projectile.enemy === enemy;
          });
          if (enemyIndex > -1) {
            enemies.splice(enemyIndex, 1);
            words[wave].splice(0, 1);
          }
        }
        player.projectiles.splice(0, 1);
      }
    }
  });

  bosses.forEach((boss) => {
    boss.update();
    const xLastWaypoint = waypoints[waypoints.length - 1].x;
    if (selectedTarget) {
      if (selectedTarget.position.x < xLastWaypoint) {
        selectedTarget = null;
        isSelected = false;
      }
    }
  });

  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.update();
    setEnemiesDirection(enemy);
    const xLastWaypoint = waypoints[waypoints.length - 1].x;
    if (selectedTarget) {
      if (selectedTarget.position.x < xLastWaypoint) {
        selectedTarget = null;
        isSelected = false;
      }
    }
    enemyHitPLayer(enemy, i);
    frozenBlastAnimation(enemy);
  }
  renderAnimation();
};
