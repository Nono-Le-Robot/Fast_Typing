function spawnBoss(spawnCount, currentIndex) {
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
}
