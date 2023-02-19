document.addEventListener("keydown", (event) => {
  console.log(event);

  if (event.key === "Escape") {
    pause = !pause;
    if (pause) {
      document.getElementById("informations").innerHTML = `PAUSE`;
      document.getElementById("informations").style.display = "flex";
      document.getElementById("words").style.display = "none";
      document.getElementById("display-infos").style.display = "none";
      document.getElementById("icons-powers").style.opacity = "0";
    } else {
      document.getElementById("informations").innerHTML = ``;
      document.getElementById("informations").style.display = "none";
      document.getElementById("words").style.display = "flex";
      document.getElementById("display-infos").style.display = "flex";
      document.getElementById("icons-powers").style.opacity = "1";
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

        if (combo % 10 === 0) {
          coinsMultiplier = 1 + Math.floor(combo / 10) * 0.1;
          document.getElementById(
            "combo"
          ).innerHTML = `Combo : ${combo} x ${coinsMultiplier}`;
        }

        enemies[0].health -= 100 / enemies[0].fullWord.length;
        enemies[0].position.x += 1;

        coins += coinsPerAttack * coinsMultiplier;
        words[wave][0] = words[wave][0].slice(1);
        htmlRender();
        if (event.key === "'") {
          preventDefault();
        }
      } else {
        if (event.key !== " " && event.key !== "Escape" && event.key !== "F1") {
          failAudio.currentTime = 0;
          failAudio.play();
          wrongEntry++;
          combo = 0;
          coinsMultiplier = 1;
          document.getElementById("multiplier").style.display = "none";
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
            framesX: { max: 9, hold: 5 },
            framesY: { max: 1, hold: 5 },
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
      countdown = 5;
      if (coins >= slowTowerPrice) {
        if (!slowTowerOccupied) {
          coins -= slowTowerPrice;
          slowTowerOccupied = true;
          frozen = true;
          speedEnemies = initSpeedEnemies / 4;
          frozenBlastAudio.currentTime = 0;
          frozenBlastAudio.play();
          countdownDiv.style.display = "block";
          setTimeout(() => {
            buildings.splice(0, 1);
            speedEnemies = initSpeedEnemies;
            slowTowerOccupied = false;
            frozen = false;
            countdownDiv.style.display = "none";
            allFrames = 0;
            countdown = 0;
          }, 5000);

          htmlRender();
        }
      } else {
        failCoinAudio.currentTime = 0;
        failCoinAudio.play();
        document.getElementById("coins").style.color = "rgb(200, 91, 91)";
        document.getElementById("coins").classList.add("shake-anim");
        setTimeout(() => {
          document.getElementById("coins").style.color = "white";
          document.getElementById("coins").classList.remove("shake-anim");
        }, 1000);
      }
    }
  }
});
