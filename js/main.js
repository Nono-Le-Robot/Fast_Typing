const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 768;
// ctx.fillRect(0, 0, canvas.width, canvas.height);
const placementTilesData2D = [];

for (let i = 0; i < placementTilesData.length; i += 20) {
  placementTilesData2D.push(placementTilesData.slice(i, i + 20));
}

const placementTiles = [];

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

const enemies = [];
let usedWords = [];

for (let i = 0; i < words.length; i++) {
  const xOffset = i * Math.floor(Math.random() * (200 - 100) + 250);
  let randomId = Math.floor(Math.random() * words.length);
  if (usedWords.length === 0) {
    enemies.push(
      new Enemy(randomId, {
        position: { x: waypoints[3].x + xOffset, y: waypoints[3].y },
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
      new Enemy(randomId, {
        position: { x: waypoints[3].x + xOffset, y: waypoints[3].y },
      })
    );
    usedWords.push(randomId);
  }
}

const buildings = [];
let activeTile = undefined;

function animate() {
  requestAnimationFrame(animate);
  ctx.drawImage(image, 0, 0);
  enemies.forEach((enemy) => enemy.update());
  placementTiles.forEach((tile) => tile.update(mouse));
  buildings.forEach((building) => {
    building.update();
    building.target = null;
    const validEnemies = enemies.filter((enemy) => {
      const xDifference = enemy.center.x - building.center.x;
      const yDifference = enemy.center.y - building.center.y;
      const distance = Math.hypot(xDifference, yDifference);
      const widthDifference = enemy.width / 2 + projectile.radius;
      const heightDifference = enemy.height / 2 + projectile.radius;
      return (
        distance < widthDifference + building.radius ||
        distance < heightDifference + building.radius
      );
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
      ) {
        building.projectiles.splice(i, 1);
      }
    }
  });
}

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (event) => {
  if (activeTile && !activeTile.isOccupied) {
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
