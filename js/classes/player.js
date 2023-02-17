//player
class Player extends Sprite {
  constructor({ position = { x: 0, y: 0 } }) {
    super({
      position,
      imageSrc: "",
      framesX: { max: 19, hold: 1 },
      framesY: { max: 1, hold: 1 },
      offset: {
        x: 0,
        y: 0,
      },
    });
    this.width = 10;
    this.height = 10;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.projectiles = [];
    this.radius = 1000;
    this.target;
    this.elapsedSpawnTime = 0;
  }
  draw() {
    super.draw();
  }

  update() {
    this.draw();
    super.update();
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
    this.elapsedSpawnTime++;
  }
}
