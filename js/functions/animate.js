let allFrames = 0;
const animate = () => {
  requestAnimationFrame(animate);
  if (!bossWave) {
    document.getElementById("center-key-trigger").style.display = "none";
  }

  if (bosses.length > 0) {
    checkBossHealth();
  }

  if (hearts === 0) {
    if (!gameOver) {
      players.forEach((player) => {
        setGameOver(player);
        gameOver = true;
      });
    }
  }

  const positionImg = document.querySelectorAll(".arrow-key");
  if (positionImg.length > 0) {
    for (let index = 0; index < positionImg.length; index++) {
      const img = positionImg[index];
      const firstImg = positionImg[0];
      if (pause) {
        img.style.animationPlayState = "paused";
      } else {
        img.style.animationPlayState = "running";
      }
      img.style.animationDuration = `${timeToMiddle}s`;

      img.classList.add("move-key-to-center");
      var rect = img.getBoundingClientRect();
      var positionRectImg = {
        x: rect.left,
        y: rect.top,
      };

      var rect2 = firstImg.getBoundingClientRect();
      var positionRectImg2 = {
        x: rect2.left,
        y: rect2.top,
      };

      positionRectImgX = positionRectImg2.x;

      //perfect timing

      if (
        positionRectImg.x <= window.innerWidth / 2 - 25.5 &&
        positionRectImg.x >= window.innerWidth / 2 - 36.5
      ) {
        perfectTiming = true;
      } else {
        if (index === 0) {
          perfectTiming = false;
        }
      }

      //good timing

      if (
        positionRectImg.x >= window.innerWidth / 2 - 52.5 &&
        positionRectImg.x <= window.innerWidth / 2 + 52.5
      ) {
        goodTiming = true;
      } else {
        if (index === 0) {
          goodTiming = false;
        }
      }

      if (positionRectImg.x <= window.innerWidth / 2 - 52.5) {
        document.querySelectorAll(".arrow-key")[0].remove();
        activeShield = false;
        noteIndex++;
        goodTiming = false;
        perfectTiming = false;
        hearts -= 1;
        if (sendBossWaves === 0) {
          bosses[0].health -= damageBoss1;
        }
        if (sendBossWaves === 1) {
          bosses[0].health -= damageBoss2;
        }
        if (sendBossWaves === 2) {
          bosses[0].health -= damageBoss3;
        }
        //joué son fail ici pour le rythme
        wrongEntry++;
        wrongTimingSound();

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
          document
            .getElementById("multiplier")
            .classList.remove("shake-anim-x");
          document.getElementById("multiplier").style.display = "none";
        }, 500);
      }
    }
  }

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
  if (activeShield) {
    for (let i = shieldsAnimation.length - 1; i >= 0; i--) {
      const shieldAnim = shieldsAnimation[i];
      shieldAnim.draw();
      shieldAnim.update();
      if (
        shieldAnim.framesX.current >= shieldAnim.framesX.max - 1 &&
        shieldAnim.framesY.current >= shieldAnim.framesY.max - 1
      ) {
        shieldsAnimation.splice(i, 1);
      }
    }
  }

  bosses.forEach((boss) => {
    boss.update();
    setBossesDirection(boss);

    boss.target = null;
    boss.target = players[0];
    if (boss.projectilesBoss.length > 0) {
      for (let i = 0; i < boss.projectilesBoss.length; i++) {
        const projectileBoss = boss.projectilesBoss[i];

        projectileBoss.update();
        const xDifference =
          projectileBoss.player.center.x - projectileBoss.position.x;
        const yDifference =
          projectileBoss.player.center.y - projectileBoss.position.y;
        const distance = Math.hypot(xDifference, yDifference);
        if (boss.projectilesBoss.length === 0) {
          bossFire = false;
        }
        if (distance < projectileBoss.player.height + projectileBoss.radius) {
          boss.projectilesBoss.splice(0, 1);
        }
      }
    }

    const xLastWaypoint = waypoints[waypoints.length - 1].x;
    if (selectedTarget) {
      if (selectedTarget.position.x < xLastWaypoint) {
        selectedTarget = null;
        isSelected = false;
      }
    }
    if (bosses[0].position.y <= waypoints[5].y && !destroyed) {
      boss.image.src = "../assets/boss_level_1_left.png";
      finalBossPoisition = true;
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
