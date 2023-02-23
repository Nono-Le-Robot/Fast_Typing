//Projectile
class ProjectileBoss extends Sprite {
  constructor({ position = { x: 0, y: 0 }, player }) {
    super({
      position,
      imageSrc: "../assets/fire01.png",
      framesX: { max: 1, hold: 1 },
      framesY: { max: 1, hold: 1 },
      offset: {
        x: 0,
        y: 0,
      },
    });

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.player = player;
    this.radius = 10;
    projectiles.push(this);
  }

  update() {
    this.draw();
    const angle = Math.atan2(
      this.player.center.y - this.position.y - 50,
      this.player.center.x - this.position.x
    );
    this.velocity.x = Math.cos(angle) * speedProjectiles;
    this.velocity.y = Math.sin(angle) * speedProjectiles;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
