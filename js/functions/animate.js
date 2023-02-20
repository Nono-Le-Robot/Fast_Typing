let allFrames = 0;
const animate = () => {
  const animationId = requestAnimationFrame(animate);
  ctx.drawImage(image, 0, 0);
  htmlRender();
  setEnemiesSpeed();
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
