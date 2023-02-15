//player
class Player {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.projectiles = [];
    this.radius = 1000;
    this.target;
    this.frames = 0;
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, 64);
    ctx.beginPath();
    // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    // ctx.fillStyle = "rgba(0,0,255,1)";
    // ctx.fill();
  }

  update() {
    this.draw();
    if (this.target) {
      if (rightkey) {
        this.projectiles.push(
          new Projectile({
            position: {
              x: this.center.x,
              y: this.center.y,
            },
            enemy: this.target,
          })
        );
        rightkey = false;
      }
    }
    this.frames++;
  }
}
