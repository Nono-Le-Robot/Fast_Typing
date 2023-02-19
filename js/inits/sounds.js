const fireAudio = new Audio("../../assets/sounds/fire.mp3");
const failAudio = new Audio("../../assets/sounds/fail.mp3");
const explosionEnemyAudio = new Audio("../../assets/sounds/explosionEnemy.mp3");
const explosionsPlayerHitAudio = new Audio(
  "../../assets/sounds/explosionEnemy.mp3"
);
const explosionsGameOverAudio = new Audio(
  "../../assets/sounds/explosionGameOver.mp3"
);
const frozenBlastAudio = new Audio("../../assets/sounds/frozenBlast.mp3");
const failCoinAudio = new Audio("../../assets/sounds/failCoin.mp3");
const multiplierWinAudio = new Audio("../../assets/sounds/multiplierWin.mp3");
const multiplierFailAudio = new Audio("../../assets/sounds/multiplierFail.mp3");

//sounds volume
fireAudio.volume = 0.3;
failAudio.volume = 0.2;
explosionEnemyAudio.volume = 1;
explosionsPlayerHitAudio.volume = 1;
frozenBlastAudio.volume = 0.4;
explosionsGameOverAudio.volume = 1;
failCoinAudio.volume = 0.5;
multiplierWinAudio.volume = 0.5;
multiplierFailAudio.volume = 0.8;
