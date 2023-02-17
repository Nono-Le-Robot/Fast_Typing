function spawnEnemies(spawnCount, currentIndex) {
  if (enemies.length === 0) {
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
}
