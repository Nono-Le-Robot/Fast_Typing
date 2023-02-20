const setBossesSpeed = () => {
  if (pause) {
    speedBosses = 0.1;
  } else if (gameOver) {
    speedBosses = 0;
  } else if (bosses.length > 0) {
    if (bosses[0].position.x > canvas.width) {
      speedBosses = 15;
    } else {
      if (!gameOver) {
        speedBosses = initSpeedBosses;
      }
    }
  } else {
    speedBosses = initSpeedBosses;
  }
};
