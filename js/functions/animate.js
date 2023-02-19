let allFrames = 0;
function animate() {
  spawnEnemies(words[wave].length, 0);

  // buildings.forEach((building) => {
  //   building.update();
  //   building.target = null;
  //   const validEnemies = enemies.filter((enemy) => {
  //     const xDifference = enemy.center.x - building.center.x;
  //     const yDifference = enemy.center.y - building.center.y;
  //     const distance = Math.hypot(xDifference, yDifference);
  //     return distance < enemy.height + building.radius;
  //   });
  //   building.target = validEnemies[0];
  //   for (let i = building.projectiles.length - 1; i === 0; i--) {
  //     const projectile = building.projectiles[i];
  //     projectile.update();
  //     const xDifference = projectile.enemy.center.x - projectile.position.x;
  //     const yDifference = projectile.enemy.center.y - projectile.position.y;
  //     const distance = Math.hypot(xDifference, yDifference);
  //     const widthDifference = projectile.enemy.width / 2 + projectile.radius;
  //     const heightDifference = projectile.enemy.height / 2 + projectile.radius;
  //     if (
  //       Math.abs(xDifference) < widthDifference &&
  //       Math.abs(yDifference) < heightDifference
  //       //  && enemies[0].position.x < canvas.width
  //     ) {
  //       score++;
  //       projectile.enemy.health -= damageProjectiles;
  //       if (projectile.enemy.health <= 0) {
  //         const enemyIndex = enemies.findIndex((enemy) => {
  //           return projectile.enemy === enemy;
  //         });
  //         if (enemyIndex > -1) {
  //           enemies.splice(enemyIndex, 1);
  //           words[wave].splice(0, 1);
  //         }
  //       }
  //       building.projectiles.splice(i, 1);
  //     }
  //   }
  // });

  htmlRender();
  let offsetExplosion = 0;
  //change enemies speed
  if (playerHit) {
    speedEnemies = 0.1;
  } else if (pause) {
    speedEnemies = 0;
  } else if (gameOver) {
    speedEnemies = 0;
  } else if (frozen) {
    speedEnemies = initSpeedEnemies / 4;
  } else if (enemies.length > 0) {
    if (!slowTowerOccupied) {
      if (enemies[0].position.x > canvas.width) {
        speedEnemies = 15;
      } else {
        if (!gameOver) {
          speedEnemies = initSpeedEnemies + wave / 50;
        }
      }
    }
  } else {
    speedEnemies = initSpeedEnemies + wave / 50;
  }

  const animationId = requestAnimationFrame(animate);
  ctx.drawImage(image, 0, 0);
  players.forEach((player) => {
    player.update();
    player.target = null;
    const validEnemies = enemies.filter((enemy) => {
      const xDifference = enemy.center.x - player.center.x;
      const yDifference = enemy.center.y - player.center.y;
      const distance = Math.hypot(xDifference, yDifference);
      return distance < enemy.height + player.radius;
    });
    player.target = enemies[0];

    for (let i = 0; i < player.projectiles.length; i++) {
      const projectile = player.projectiles[i];
      projectile.update();
      const xDifference = projectile.enemy.center.x - projectile.position.x;
      const yDifference = projectile.enemy.center.y - projectile.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      const widthDifference = projectile.enemy.width / 2 + projectile.radius;
      const heightDifference = projectile.enemy.height / 2 + projectile.radius;
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
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];

    //define enemy direction
    let lastPositionX = enemy.position.x;
    let lastPositionY = enemy.position.y;
    let moveTreshold = 2;
    setTimeout(() => {
      let newPositionX = enemy.position.x;
      let newPositionY = enemy.position.y;
      if (Math.abs(newPositionX - lastPositionX) > moveTreshold) {
        if (newPositionX < lastPositionX) {
          enemy.image.src = "../assets/enemy_level_1_left.png";
        } else if (newPositionX > lastPositionX) {
          enemy.image.src = "../assets/enemy_level_1_right.png";
        }
      }
      if (Math.abs(newPositionY - lastPositionY) > moveTreshold) {
        if (newPositionY < lastPositionY) {
          enemy.image.src = "../assets/enemy_level_1_up.png";
        } else if (newPositionY > lastPositionY) {
          enemy.image.src = "../assets/enemy_level_1_down.png";
        }
      }
      lastPositionX = newPositionX;
      lastPositionY = newPositionY;
    }, 100);

    //enemy movement
    enemy.update();
    const xLastWaypoint = waypoints[waypoints.length - 1].x;
    if (selectedTarget) {
      if (selectedTarget.position.x < xLastWaypoint) {
        selectedTarget = null;
        isSelected = false;
      }
    }

    for (let i = slowProjectiles.length - 1; i >= 0; i--) {
      const slowProjectile = slowProjectiles[i];
      slowProjectile.draw();
      slowProjectile.update();
      if (
        slowProjectile.framesX.current >= slowProjectile.framesX.max - 1 &&
        slowProjectile.framesY.current >= slowProjectile.framesY.max - 1
      ) {
        slowProjectiles.splice(i, 1);
      }
    }

    //enemy hit player
    if (enemy.position.x < xLastWaypoint) {
      playerHit = true;
      setTimeout(() => {
        playerHit = false;
      }, 2000);
      explosionsPlayerHit.push(
        new Sprite({
          position: {
            x: enemy.position.x,
            y: enemy.position.y,
          },
          imageSrc: "../assets/explosionPlayerHit.png",
          framesX: { max: 11, hold: 5 },
          framesY: { max: 1, hold: 5 },
          offset: { x: -20, y: 0 },
        })
      );
      explosionsPlayerHitAudio.currentTime = 0;
      explosionsPlayerHitAudio.play();
      hearts -= 1;
      words[wave].splice(0, 1);
      enemies.splice(i, 1);
      selectedTarget = null;

      if (hearts === 0) {
        gameOver = true;
        speedEnemies = 0.3;
        document.getElementById("icons-powers").style.display = "none";

        explosionsGameOverAudio.currentTime = 0;
        explosionsGameOverAudio.play();
        let offsetExplosion = 20;
        setTimeout(() => {
          //game over explosion
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver.png",
              framesX: { max: 14, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -100 + offsetExplosion, y: 0 },
            })
          );
        }, 100);

        setTimeout(() => {
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver.png",
              framesX: { max: 14, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -130 + offsetExplosion, y: -20 },
            })
          );
        }, 250);

        setTimeout(() => {
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver.png",
              framesX: { max: 14, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -130 + offsetExplosion, y: -20 },
            })
          );
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver.png",
              framesX: { max: 14, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -100 + offsetExplosion, y: -10 },
            })
          );
        }, 500);

        setTimeout(() => {
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver2.png",
              framesX: { max: 11, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -130 + offsetExplosion, y: -20 },
            })
          );
        }, 750);

        setTimeout(() => {
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver2.png",
              framesX: { max: 11, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -80 + offsetExplosion, y: -30 },
            })
          );
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver2.png",
              framesX: { max: 11, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -100 + offsetExplosion, y: -10 },
            })
          );
          explosionsGameOver.push(
            new Sprite({
              position: {
                x: enemy.position.x,
                y: enemy.position.y,
              },
              imageSrc: "../assets/explosionGameOver2.png",
              framesX: { max: 11, hold: 5 },
              framesY: { max: 1, hold: 5 },
              offset: { x: -130 + offsetExplosion, y: -50 },
            })
          );
        }, 1000);

        setTimeout(() => {
          players = [];
        }, 1000);
        setTimeout(() => {
          speedEnemies = 0;
          document.getElementById("game-over").style.display = "flex";
        }, 2100);
      }
    }
  }

  for (let i = frozenEnemies.length - 1; i >= 0; i--) {
    const frozenEnemy = frozenEnemies[i];
    frozenEnemy.draw();
    frozenEnemy.update();
    if (
      frozenEnemy.framesX.current >= frozenEnemy.framesX.max - 1 &&
      frozenEnemy.framesY.current >= frozenEnemy.framesY.max - 1
    ) {
      frozenEnemies.splice(i, 1);
    }
  }

  for (let i = explosionsEnemy.length - 1; i >= 0; i--) {
    const explosionEnemy = explosionsEnemy[i];
    explosionEnemy.draw();
    explosionEnemy.update();
    if (
      explosionEnemy.framesX.current >= explosionEnemy.framesX.max - 1 &&
      explosionEnemy.framesY.current >= explosionEnemy.framesY.max - 1
    ) {
      explosionsEnemy.splice(i, 1);
    }
  }

  for (let i = explosionsPlayerHit.length - 1; i >= 0; i--) {
    const explosionPlayerHit = explosionsPlayerHit[i];
    explosionPlayerHit.draw();
    explosionPlayerHit.update();
    if (
      explosionPlayerHit.framesX.current >=
        explosionPlayerHit.framesX.max - 1 &&
      explosionPlayerHit.framesY.current >= explosionPlayerHit.framesY.max - 1
    ) {
      explosionsPlayerHit.splice(i, 1);
    }
  }

  for (let i = explosionsGameOver.length - 1; i >= 0; i--) {
    const explosionGameOver = explosionsGameOver[i];
    explosionGameOver.draw();
    explosionGameOver.update();
    if (
      explosionGameOver.framesX.current >= explosionGameOver.framesX.max - 1 &&
      explosionGameOver.framesY.current >= explosionGameOver.framesY.max - 1
    ) {
      explosionsGameOver.splice(i, 1);
    }
  }

  enemies.forEach((enemy) => {
    if (frozen) {
      allFrames += speedSlowProjectiles;
      frozenEnemies.push(
        new Sprite({
          position: {
            x: enemy.position.x,
            y: enemy.position.y,
          },
          imageSrc: "../assets/ice.png",
          framesX: { max: 1, hold: 5 },
          framesY: { max: 7, hold: 5 },
          offset: { x: 0, y: 0 },
        })
      );
      slowProjectiles.push(
        new Sprite({
          position: {
            x: 315 + allFrames,
            y: 320,
          },
          imageSrc: "../assets/frozenLaser.png",
          framesX: { max: 1, hold: 20 },
          framesY: { max: 3, hold: 20 },
          offset: { x: -60, y: -30 },
        })
      );
    }
    enemy.update();
  });
  placementTiles.forEach((tile) => tile.update(mouse));
}
