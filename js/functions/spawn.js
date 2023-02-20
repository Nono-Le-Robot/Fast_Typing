const spawnEnemies = (spawnCount, currentIndex) => {
  if (enemies.length === 0 && !bossWave) {
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
  } else {
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
  }
};

const spawnBoss = (spawnCount, currentIndex) => {
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
