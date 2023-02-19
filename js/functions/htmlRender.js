const htmlRender = () => {
  if (gameOver) {
    document.getElementById("display-infos").style.display = "none";
  }
  round = wave + 1;
  document.getElementById("hearts").innerHTML =
    `<img id="icon-heart" src='../assets/icons/heart.png' />` + hearts;
  document.getElementById("combo").innerHTML = `Combo : ` + combo;
  if (combo >= 10) {
    document.getElementById("multiplier").style.display = "flex";
    document.getElementById("multiplier").innerHTML =
      `x ` + coinsMultiplier.toFixed(2);
  }

  document.getElementById("coins").innerHTML =
    `<img id="icon-coin" src='../assets/icons/coin.png' />` + coins.toFixed(2);
  document.getElementById("score").innerHTML = `Score : ` + score;
  document.getElementById("round").innerHTML = "Round : " + round;

  for (let i = 0; i < 7; i++) {
    if (words[wave][i] !== undefined) {
      document.getElementById(`word${i + 1}`).innerHTML = words[wave][i];
    } else {
      document.getElementById(`word${i + 1}`).innerHTML = "";
    }
  }

  if (words[wave][0] === undefined) {
    document.getElementById("word1").innerHTML = "";
    document.getElementById("word2").innerHTML = "";
    document.getElementById("word3").innerHTML = "";
    document.getElementById("word4").innerHTML = "";
    document.getElementById("word5").innerHTML = "";
    document.getElementById("word6").innerHTML = "";
    document.getElementById("word7").innerHTML = "";
    document.getElementById("informations").style.display = "none";

    if ((wave + 2) % 10 === 0) {
      bossWave = true;
      document.getElementById("informations").innerHTML = `Boss en approche ! `;
      document.getElementById("informations").style.display = "flex";
      if (!gameOver && bosses.length === 0) {
        wave++;
      }
      pause = true;
      setTimeout(() => {
        document.getElementById("informations").innerHTML = "";
        document.getElementById("informations").style.display = "none";
        pause = false;
      }, 3000);
    } else {
      bossWave = false;
      if (!gameOver && bosses.length === 0) {
        document.getElementById("informations").innerHTML = `Round ${
          round + 1
        } !`;
        document.getElementById("informations").style.display = "flex";
      }

      if (!gameOver && bosses.length === 0) {
        wave++;
      }

      pause = true;
      setTimeout(() => {
        pause = false;
        document.getElementById("informations").innerHTML = "";
        document.getElementById("informations").style.display = "none";
      }, 3000);
    }
    document.getElementById("round").innerHTML = "Round : " + round;
  }
};
