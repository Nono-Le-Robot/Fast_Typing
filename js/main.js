const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 768;
const placementTilesData2D = [];
let slowmain = false

for (let i = 0; i < placementTilesData.length; i += 20) {
  placementTilesData2D.push(placementTilesData.slice(i, i + 20));
}

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
let currentposition = "";
let currentOffset = ""
let positionx = waypoints[3].x

function spawnEnemies(spawnCount, currentIndex) {

  for (let i = 0; i < spawnCount; i++) {
    const xOffset = i * 100 + 200;
    const yOffset = 500;
    console.log(positionx);

    let randomId = Math.floor(Math.random() * words.length);
    if (usedWords.length === 0) {
      enemies.push(
        new Enemy(randomId, currentIndex, {
          position: {
            x: waypoints[3].x + 15,
            y: waypoints[3].y,
          },
        })
      );
      usedWords.push(randomId);
    } else {
      while (usedWords.includes(randomId)) {
        if (words.length === usedWords.length) {
          usedWords = [];
          break;
        } else {
          randomId = Math.floor(Math.random() * words.length);
        }
      }
      enemies.push(
        new Enemy(randomId, currentIndex, {
          position: { x: positionx, y: waypoints[3].y },
        })
      );
      usedWords.push(randomId);
    }
  }
  enemies.forEach(element => {
    currentposition = element.position.x;
    currentOffset = element.width
    positionx = currentposition + currentOffset;
  });
}

let currentIndex = -1;
setInterval(() => {
  currentIndex = currentIndex + 1;
  spawnEnemies(enemyStartAmount, currentIndex);
}, spawnRate);

enemies.forEach((enemy) => {
  enemy.update()
  console.log(enemy);

});
function animate() {
  document.getElementById("hearts").innerHTML = "Lives : " + hearts;
  document.getElementById("score").innerHTML = "Score : " + score;
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
      enemies.splice(i, 1);
      selectedTarget = null;
      document.getElementById("hearts").innerHTML = "Lives : " + hearts;
      if (hearts === 0) {
        cancelAnimationFrame(animationId);
        const gameOverDiv = document.getElementById("game-over");
        gameOverDiv.style.display = "flex";
        console.log("game over");
      }
    }
  }
  placementTiles.forEach((tile) => tile.update(mouse));
  buildings.forEach((building) => {
    // if ( building.decreaseSpeed == true){slowmain = true}
    building.update();
    building.target = null;
    const validEnemies = enemies.filter((enemy) => {
      const xDifference = enemy.center.x - building.center.x;
      const yDifference = enemy.center.y - building.center.y;
      const distance = Math.hypot(xDifference, yDifference);
      return distance < enemy.height + building.radius;
    });

    // building.decreaseSpeed = validEnemies
    // validEnemies.forEach((enemy) => {enemy.slowEnemi = true})
    // building.target = validEnemies[0];
    // for (let i = building.projectiles.length - 1; i === 0; i--) {
    //   const projectile = building.projectiles[i];
    //   projectile.update();
    //   const xDifference = projectile.enemy.center.x - projectile.position.x;
    //   const yDifference = projectile.enemy.center.y - projectile.position.y;
    //   const distance = Math.hypot(xDifference, yDifference);
    //   const widthDifference = projectile.enemy.width / 2 + projectile.radius;
    //   const heightDifference = projectile.enemy.height / 2 + projectile.radius;
    //   if (
    //     Math.abs(xDifference) < widthDifference &&
    //     Math.abs(yDifference) < heightDifference
    //   ) {
    //     building.projectiles.splice(i, 1);
    //   }
    // }
  });
}

canvas.addEventListener("click", (event) => {

  if (activeTile && !activeTile.isOccupied && buildings.length === 0) {
    const previousSpeed = speedEnemies;
    speedEnemies = speedEnemiesLow ;
    setTimeout(() => {
      speedEnemies = previousSpeed;
      buildings = [];
    }, 5000);
    buildings.push(
      new Building({
        position: { x: activeTile.position.x, y: activeTile.position.y },
      })
    );
    activeTile.isOccupied = true;
  }
});

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  activeTile = null;
  for (let i = 0; i < placementTiles.length; i++) {
    const tile = placementTiles[i];
    if (
      mouse.x > tile.position.x &&
      mouse.x < tile.position.x + tile.size &&
      mouse.y > tile.position.y &&
      mouse.y < tile.position.y + tile.size
    ) {
      activeTile = tile;
      break;
    }
  }
});
