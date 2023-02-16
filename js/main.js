const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 768;
const placementTilesData2D = [];
var fireAudio = new Audio("../assets/sounds/fire.mp3");
var failAudio = new Audio("../assets/sounds/fail.mp3");
fireAudio.volume = 0.1;
failAudio.volume = 0.1;
for (let i = 0; i < placementTilesData.length; i += 20) {
  placementTilesData2D.push(placementTilesData.slice(i, i + 20));
}

players.push(
  new Player({
    position: {
      x: 315,
      y: 335,
    },
  })
);

const htmlRender = () => {
  round = wave + 1;
  document.getElementById("hearts").innerHTML =
    `<img id="icon-heart" src='../assets/icons/heart.png' />` + hearts;
  document.getElementById("combo").innerHTML = `Combo : ` + combo;
  document.getElementById("coins").innerHTML =
    `<img id="icon-coin" src='../assets/icons/coin.png' />` + coins.toFixed(2);
  document.getElementById("score").innerHTML = `Score : ` + score;
  document.getElementById("round").innerHTML = "Round : " + round;

  for (let i = 0; i < 7; i++) {
    if (words[wave][i] !== undefined) {
      document.getElementById(`word${i + 1}`).innerHTML = words[wave][i];
    } else {
      document.getElementById(`word${i + 1}`).innerHTML = "";
    }
  }
  if (words[wave][0] === undefined) {
    document.getElementById("word1").innerHTML = "";
    document.getElementById("word2").innerHTML = "";
    document.getElementById("word3").innerHTML = "";
    document.getElementById("word4").innerHTML = "";
    document.getElementById("word5").innerHTML = "";
    document.getElementById("word6").innerHTML = "";
    document.getElementById("word7").innerHTML = "";
    wave++;
    document.getElementById("round").innerHTML = "Round : " + round;
  }
};

document.addEventListener("keydown", (event) => {
  event.stopImmediatePropagation();
  const letter = event.key.toLowerCase();
  if (
    enemies.length !== 0
    // && enemies[0].position.x < canvas.width
  ) {
    if (words[wave][0][0] === letter) {
      fireAudio.currentTime = 0;
      fireAudio.play();
      rightkey = true;
      const validEnemies = enemies.filter((enemy) => {
        return enemy.position.x < canvas.width;
      });
      goodEntry++;
      combo++;
      score++;
      console.log(enemies[0].fullWord.length);
      enemies[0].health -= 100 / enemies[0].fullWord.length;

      coins += coinsPerAttack;
      words[wave][0] = words[wave][0].slice(1);
      htmlRender();
    } else {
      failAudio.currentTime = 0;
      failAudio.play();
      wrongEntry++;
      combo = 0;
      htmlRender();
    }
    if (enemies[0].health <= 0) {
      enemies.splice(0, 1);
      words[wave].splice(0, 1);
      htmlRender();
    }
    if (words[wave] !== undefined) {
      if (words[wave][0] === "") {
        words[wave].splice(0, 1);
        enemies.splice(0, 1);
        htmlRender();
      }
    } else {
      console.log("FIN DU JEU");
    }
  }

  if (event.key === "F1") {
    event.preventDefault();
    let randomPlacement = Math.floor(Math.random() * placementTiles.length);

    if (coins >= slowTowerPrice) {
      if (!slowTowerOccupied) {
        coins -= slowTowerPrice;
        buildings.push(
          new Building({
            position: {
              x: placementTiles[21].position.x,
              y: placementTiles[21].position.y,
            },
          })
        );

        // slowTowerOccupied = true;
        // speedEnemies = initSpeedEnemies / 2;

        // setTimeout(() => {
        //   buildings.splice(0, 1);
        //   speedEnemies = initSpeedEnemies;
        //   slowTowerOccupied = false;
        // }, 5000);
        // htmlRender();
      } else {
        document.getElementById("informations").style.display = "flex";
        document.getElementById(
          "informations"
        ).innerHTML = `Une tour est déjà en place`;
        setTimeout(() => {
          document.getElementById("informations").style.display = "none";
          document.getElementById("informations").innerHTML = "";
        }, 3000);
      }
    } else {
      document.getElementById("informations").style.display = "flex";
      document.getElementById(
        "informations"
      ).innerHTML = `Pas assez de coins (${slowTowerPrice} requis)`;
      setTimeout(() => {
        document.getElementById("informations").style.display = "none";
        document.getElementById("informations").innerHTML = "";
      }, 3000);
    }
  }
});

placementTilesData2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 14) {
      //add building placement here
      placementTiles.push(
        new PlacementTile({ position: { x: x * 64, y: y * 64 } })
      );
    }
  });
});

const image = new Image();
image.onload = () => {
  animate();
};

image.src = "../assets/gameMap.png";
let xOffset = 128;
let combinedOffset = xOffset;
function spawnEnemies(spawnCount, currentIndex) {
  for (let i = 0; i < spawnCount; i++) {
    currentIndex = i;
    combinedOffset += xOffset;
    console.log(combinedOffset);

    enemies.push(
      new Enemy(currentIndex, {
        position: { x: waypoints[2].x + combinedOffset, y: waypoints[2].y },
      })
    );

    enemiesSpawn++;
  }
}
waveEnded = false;
htmlRender();

function animate() {
  if (enemies.length > 0) {
    if (enemies[0].position.x > canvas.width) {
      speedEnemies = 20;
    } else {
      speedEnemies = initSpeedEnemies;
    }
  }

  if (enemiesSpawn === enemiesInWave && enemies.length === 0) {
    enemiesSpawn = 0;
    waveEnded = true;
  } else {
    if (enemies.length === 0 && words[wave] !== undefined) {
      console.log("NEW WAVE : " + (round + 1));

      if (words[wave] !== undefined) {
        spawnEnemies(words[wave].length, 0);
        htmlRender();
      }
    }
  }
  const animationId = requestAnimationFrame(animate);
  ctx.drawImage(image, 0, 0);
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.update();
    const xLastWaypoint = waypoints[waypoints.length - 1].x;
    if (selectedTarget) {
      if (selectedTarget.position.x < xLastWaypoint) {
        selectedTarget = null;
        isSelected = false;
      }
    }
    if (enemy.position.x < xLastWaypoint) {
      hearts -= 1;
      words[wave].splice(0, 1);
      enemies.splice(i, 1);
      selectedTarget = null;
      htmlRender();
      if (hearts === 0) {
        cancelAnimationFrame(animationId);
        const gameOverDiv = document.getElementById("game-over");
        console.log(gameOverDiv);
        gameOverDiv.style.display = "flex";
        console.log("game over");
      }
    }
  }

  enemies.forEach((enemy) => enemy.update());
  placementTiles.forEach((tile) => tile.update(mouse));

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
        // console.log(player.projectiles);
        score++;
        htmlRender();
        if (projectile.enemy.health <= 0) {
          const enemyIndex = enemies.findIndex((enemy) => {
            return projectile.enemy === enemy;
          });
          if (enemyIndex > -1) {
            enemies.splice(enemyIndex, 1);
            words[wave].splice(0, 1);
            htmlRender();
          }
        }
        player.projectiles.splice(0, 1);
      }
    }
  });

  buildings.forEach((building) => {
    building.update();
    building.target = null;
    const validEnemies = enemies.filter((enemy) => {
      const xDifference = enemy.center.x - building.center.x;
      const yDifference = enemy.center.y - building.center.y;
      const distance = Math.hypot(xDifference, yDifference);
      return distance < enemy.height + building.radius;
    });
    building.target = validEnemies[0];
    for (let i = building.projectiles.length - 1; i === 0; i--) {
      const projectile = building.projectiles[i];
      projectile.update();
      const xDifference = projectile.enemy.center.x - projectile.position.x;
      const yDifference = projectile.enemy.center.y - projectile.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      const widthDifference = projectile.enemy.width / 2 + projectile.radius;
      const heightDifference = projectile.enemy.height / 2 + projectile.radius;
      if (
        Math.abs(xDifference) < widthDifference &&
        Math.abs(yDifference) < heightDifference
        //  && enemies[0].position.x < canvas.width
      ) {
        score++;
        htmlRender();
        projectile.enemy.health -= damageProjectiles;
        if (projectile.enemy.health <= 0) {
          const enemyIndex = enemies.findIndex((enemy) => {
            return projectile.enemy === enemy;
          });
          if (enemyIndex > -1) {
            enemies.splice(enemyIndex, 1);
            words[wave].splice(0, 1);
            htmlRender();
          }
        }
        building.projectiles.splice(i, 1);
      }
    }
  });
}
