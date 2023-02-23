const frozenBlastAnimation = (enemy) => {
  if (frozen) {
    allFrames += speedSlowProjectiles;
    // ice under enemy
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
    // ice blast
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
};

const shieldAnimation = () => {
  shieldsAnimation.push(
    new Sprite({
      position: {
        x: players[0].position.x,
        y: players[0].position.y,
      },
      imageSrc: "../assets/shield.png",
      framesX: { max: 4, hold: 10 },
      framesY: { max: 4, hold: 10 },
      offset: { x: 140, y: 40 },
    })
  );
};

const explosionEnemyAnimation = () => {
  explosionsEnemy.push(
    new Sprite({
      position: {
        x: enemies[0].position.x,
        y: enemies[0].position.y,
      },
      imageSrc: "../assets/explosionEnemy.png",
      framesX: { max: 9, hold: 5 },
      framesY: { max: 1, hold: 5 },
      offset: { x: 5, y: 0 },
    })
  );
};

const explosionEnemyPlayerHitAnimation = (enemy) => {
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
};

const explosionGameOverAnimation = (enemy, offsetExplosion) => {
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
};

const renderAnimation = () => {
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
};
