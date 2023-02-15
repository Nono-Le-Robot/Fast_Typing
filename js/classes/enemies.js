//Enemies
class Enemy {
  constructor(
    currentIndex,
    { position = { x: this.position.x, y: this.position.y } }
  ) {
    this.position = position;
    this.currentIndex = currentIndex; // replace by randomId for unique and random word
    this.width = 80;
    this.height = 80;
    this.waypointIndex = 2;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.word = words[wave][this.currentIndex];
    this.fullWord = words[wave][this.currentIndex];
    this.selected = false;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.health = 100;
  }

  draw() {
    if (selectedTarget === this) {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
    }

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    //health bar

    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y - 15, this.width, 10);

    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x,
      this.position.y - 15,
      (this.width * this.health) / 100,
      10
    );
  }

  update() {
    this.draw();
    const waypoint = waypoints[this.waypointIndex];
    const yDistance = waypoint.y - this.center.y;
    const xDistance = waypoint.x - this.center.x;
    const angle = Math.atan2(yDistance, xDistance);
    this.velocity.x = Math.cos(angle) * speedEnemies;
    this.velocity.y = Math.sin(angle) * speedEnemies;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    if (
      Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
        Math.abs(this.velocity.x * 3) &&
      Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
        Math.abs(this.velocity.y * 3) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}
