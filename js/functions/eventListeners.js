document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    pause = !pause;
    if (pause) {
      document.getElementById("informations").innerHTML = `PAUSE`;
      document.getElementById("informations").style.display = "flex";
      document.getElementById("words").style.display = "none";
      document.getElementById("display-infos").style.display = "none";
    } else {
      document.getElementById("informations").innerHTML = ``;
      document.getElementById("informations").style.display = "none";
      document.getElementById("words").style.display = "flex";
      document.getElementById("display-infos").style.display = "flex";
    }
  }
  if (!pause) {
    event.stopImmediatePropagation();
    const letter = event.key.toLowerCase();
    if (
      enemies.length !== 0
      // && enemies[0].position.x < canvas.width
    ) {
      if (words[wave][0][0] === letter && event.key !== "Escape") {
        fireAudio.currentTime = 0;
        fireAudio.play();
        rightkey = true;
        const validEnemies = enemies.filter((enemy) => {
          return enemy.position.x < canvas.width;
        });
        goodEntry++;
        combo++;
        if (
          combo === 10 ||
          combo === 20 ||
          combo === 30 ||
          combo === 40 ||
          combo === 50 ||
          combo === 60 ||
          combo === 70 ||
          combo === 80 ||
          combo === 90
        ) {
          coins += coinsPerAttack * 2;
        }
        if (combo === 100) {
          coins += coinsPerAttack * 4;
        }
        enemies[0].health -= 100 / enemies[0].fullWord.length;
        enemies[0].position.x += 1;

        coins += coinsPerAttack;
        words[wave][0] = words[wave][0].slice(1);
        htmlRender();
      } else {
        if (event.key !== " " && event.key !== "Escape" && event.key !== "F1") {
          failAudio.currentTime = 0;
          failAudio.play();
          wrongEntry++;
          combo = 0;
          htmlRender();
        }
      }
      if (enemies[0].health <= 0) {
        // iciiciiiii
        explosionsEnemy.push(
          new Sprite({
            position: {
              x: enemies[0].position.x,
              y: enemies[0].position.y,
            },
            imageSrc: "../assets/explosionEnemy.png",
            framesX: { max: 4, hold: 5 },
            framesY: { max: 4, hold: 5 },
            offset: { x: 5, y: 0 },
          })
        );
        enemies.splice(0, 1);
        explosionEnemyAudio.currentTime = 0;
        explosionEnemyAudio.play();
        words[wave].splice(0, 1);
        htmlRender();
      }
      if (words[wave] !== undefined) {
        if (words[wave][0] === "") {
          words[wave].splice(0, 1);
          enemies.splice(0, 1);

          htmlRender();
        }
      } else {
        // console.log("FIN DU JEU");
      }
    }

    if (event.key === "F1") {
      event.preventDefault();

      if (coins >= slowTowerPrice) {
        if (!slowTowerOccupied) {
          coins -= slowTowerPrice;
          slowTowerOccupied = true;
          frozen = true;
          speedEnemies = initSpeedEnemies / 4;
          frozenBlastAudio.currentTime = 0;
          frozenBlastAudio.play();
          setTimeout(() => {
            buildings.splice(0, 1);
            speedEnemies = initSpeedEnemies;
            slowTowerOccupied = false;
            frozen = false;
            allFrames = 0;
          }, 5000);

          htmlRender();
        }
      } else {
        document.getElementById("informations").style.display = "flex";
        document.getElementById(
          "informations"
        ).innerHTML = `Pas assez de coins (${slowTowerPrice} requis)`;
        setTimeout(() => {
          document.getElementById("informations").style.display = "none";
          document.getElementById("informations").innerHTML = "";
        }, 2000);
      }
    }
  }
});
