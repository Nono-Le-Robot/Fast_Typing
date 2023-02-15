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
let emptymap = false;

let currentposition = "";
let currentOffset = ""
let positionx = waypoints[3].x
let currentWord = -1
let currentWordList = 0
let spawnCount = wordList[currentWordList].length

// console.log(wordList[currentWordList][currentWord]);

function spawnEnemies(currentWordList,currentWord, spawnCount) {
      enemies.push(
        new Enemy(currentWordList, currentWord, spawnCount, {
          position: { x: positionx, y: waypoints[3].y },
        })
      );

  enemies.forEach(element => {
    console.log(element);
    currentposition = element.position.x;
    currentOffset = element.width
    positionx = currentposition + currentOffset;
  });
}


function spawn () {
 setInterval(() => {
     currentWord = currentWord + 1;
  spawnEnemies(currentWordList, currentWord, spawnCount);

  //  if (wordList[this.currentWordList][this.currentWord] == undefined  && enemies.length == 0) {
  //    console.log('round');
  //    setTimeout(() => {
  //      spawnCount = wordList[currentWordList].length
  //      currentWord = -1
  //      currentWordList++
  //    }, 10000)
  //  }
},spawnRate);
 
}

spawn()


function round() {
  spawnCount = wordList[currentWordList].length
  currentWord = -1
  currentWordList++
  setTimeout(() => {
    spawn()
  }, 10000)
 
}




function animate() {

  console.log(enemies);
  if (currentWord > spawnCount - 1 && enemies.length == 0) {
    round()
  }
  
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
      // document.getElementById("hearts").innerHTML = "Lives : " + hearts;
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

    building.decreaseSpeed = validEnemies
    validEnemies.forEach((enemy) => {enemy.slowEnemi = true})
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
      ) {
        building.projectiles.splice(i, 1);
      }
    }
  });
}

canvas.addEventListener("click", (event) => {

  if (activeTile && !activeTile.isOccupied && buildings.length === 0) {
    const previousSpeed = speedEnemies;
    speedEnemies = speedEnemiesLow;
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
