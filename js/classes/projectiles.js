//Projectile
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
    this.velocity.x = Math.cos(angle) * speedProjectiles;
    this.velocity.y = Math.sin(angle) * speedProjectiles;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}