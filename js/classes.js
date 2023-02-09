let currentWord = "";
let lives = 5;
let score = 0;
let isWriting = false;
const words = [
  "quand",
  "test",
  "complétement",
  "cherrytamere",
  "informatique",
  "organisation",
  "entreprenant",
  "ordinateur",
  "développeur",
  "développement",
  "jardinage",
  "casquette",
  "equitation",
];
let keyPressed = false;
let selectedTarget = null;
let isSelected = false;

class PlacementTile {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.size = 64;
    this.color = "rgba(255,255,255, 0.15)";
    this.occupied = false;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  update(mouse) {
    this.draw();
    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + this.size &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + this.size
    ) {
      this.color = "white";
    } else {
      this.color = "rgba(255,255,255, 0.15)";
    }
  }
}
console.log("enemy");
class Enemy {
  constructor(
    randomId,
    { position = { x: this.position.x, y: this.position.y } }
  ) {
    this.position = position;
    this.randomId = randomId;
    this.width = words[randomId].length * 19;
    this.height = 50;
    this.waypointIndex = 2;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.word = words[this.randomId];
    this.fullWord = words[this.randomId];
    this.selected = false;
  }

  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.font = "35px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      this.word,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      canvas.width / 2,
      canvas.height / 2
    );
  }

  update() {
    document.addEventListener("keydown", (event) => {
      event.stopImmediatePropagation();
      const letter = event.key.toLowerCase();

      for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        if (enemy.word[0] === letter && isSelected === false) {
          selectedTarget = enemy;
          isSelected = true;
          enemy.word = selectedTarget.word.slice(1);
          enemy.width = enemy.word.length * 19;
        } else {
          if (enemy.word[0] === letter && enemy.word !== enemy.fullWord) {
            enemy.word = enemy.word.slice(1);
            enemy.width = enemy.word.length * 19;
          }

          //
        }
        if (enemy.word === "") {
          isSelected = false;
          selectedTarget = null;
          enemies.splice(i, 1);
          break;
        }
      }
    });

    this.draw();
    const waypoint = waypoints[this.waypointIndex];
    const yDistance = waypoint.y - this.center.y;
    const xDistance = waypoint.x - this.center.x;
    const angle = Math.atan2(yDistance, xDistance);
    this.position.x += Math.cos(angle);
    this.position.y += Math.sin(angle);
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    if (
      Math.round(this.center.x) === Math.round(waypoint.x) &&
      Math.round(this.center.y) === Math.round(waypoint.y) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}

let projectiles = [];

class Projectile {
  constructor({ position = { x: 0, y: 0 }, enemy }) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.enemy = enemy;
    this.radius = 10;
    projectiles.push(this);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();
  }
  update() {
    this.draw();
    const angle = Math.atan2(
      this.enemy.center.y - this.position.y,
      this.enemy.center.x - this.position.x
    );
    const power = 20;
    this.velocity.x = Math.cos(angle) * power;
    this.velocity.y = Math.sin(angle) * power;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
class Building {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 64 * 2;
    this.height = 64;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.projectiles = [];
    this.radius = 250;
    this.target;
    this.frames = 0;
    this.fireRate = 25;
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, 64);
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,255,0.1)";
    ctx.fill();
  }

  update() {
    this.draw();
    if (this.frames % this.fireRate === 0 && this.target) {
      this.projectiles.push(
        new Projectile({
          position: {
            x: this.center.x,
            y: this.center.y,
          },
          enemy: this.target,
        })
      );
    }
    this.frames++;
  }
}
