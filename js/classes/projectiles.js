//Projectile
class Projectile extends Sprite {
  constructor({ position = { x: 0, y: 0 }, enemy }) {
    super({
      position,
      imageSrc: "../assets/fire01.png",
      framesX: { max: 1, hold: 1 },
      framesY: { max: 1, hold: 1 },
      offset: {
        x: 100,
        y: 60,
      },
    });

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.enemy = enemy;
    this.radius = 10;
    projectiles.push(this);
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
