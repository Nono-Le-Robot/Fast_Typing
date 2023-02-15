//Enemies
class Enemy {
  constructor(
    currentWordList,
    currentWord,
    spawnCount,
    { position = { x: this.position.x, y: this.position.y } },
  ) {

    this.position = position;
    this.currentWord = currentWord
    this.currentWordList = currentWordList
    // this.currentIndex = currentIndex; // replace by randomId for unique and random word
    this.width = wordList[this.currentWordList][this.currentWord].length * 19;
    this.height = 50;
    this.waypointIndex = 3;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.word = wordList[this.currentWordList][this.currentWord];
    this.fullWord = wordList[this.currentWordList][this.currentWord];
    this.selected = false;
    this.slowEnemi = false;
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  draw() {
    if (selectedTarget === this) {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
    } else {
      ctx.fillStyle = "rgba(0,0,0,0.3)";
    }

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.font = "35px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (selectedTarget === this) {
      ctx.fillStyle = "black";
    } else {
      ctx.fillStyle = "white";
    }

    ctx.fillText(
      this.word,
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      canvas.width / 2,
      canvas.height / 2
    );
  }

  update() {
    if (enemies.length == 0) {
      console.log('la');
      emptymap = true
    } else {
      emptymap = false
    }
    this.draw();
    const waypoint = waypoints[this.waypointIndex];
    const yDistance = waypoint.y - this.center.y;
    const xDistance = waypoint.x - this.center.x;
    const angle = Math.atan2(yDistance, xDistance);
    if (this.slowEnemi == true) {
      this.velocity.x = Math.cos(angle) * speedEnemiesLow;
      this.velocity.y = Math.sin(angle) * speedEnemiesLow;
    } else {
      this.velocity.x = Math.cos(angle) * speedEnemies;
      this.velocity.y = Math.sin(angle) * speedEnemies;
    }

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
document.addEventListener("keydown", (event) => {
  event.stopImmediatePropagation();
  const letter = event.key.toLowerCase();
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    if (enemies[0].word[0] === letter && isSelected === false) {
      selectedTarget = enemy;
      isSelected = true;
      enemy.word = selectedTarget.word.slice(1);
      score++;
      document.getElementById("score").innerHTML = "Score : " + score;
      enemy.width = enemy.word.length * 19;
    } else {
      if (enemies[0].word[0] === letter && enemy.word !== enemy.fullWord) {
        score++;
        document.getElementById("score").innerHTML = "Score : " + score;
        enemy.word = enemy.word.slice(1);
        enemy.width = enemy.word.length * 19;
      }
    }
    if (enemy.word === "") {
      isSelected = false;
      selectedTarget = null;
      enemies.splice(i, 1);
      break;
    }
  }
});
