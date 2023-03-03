const synth = new Tone.Synth().toDestination();
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 768;
const placementTilesData2D = [];
const image = new Image();

image.onload = () => {
  animate();
};
image.src = "../assets/gameMap.png";
let xOffset = 128;
let combinedOffset = xOffset;

var countdown = 5;
var countdownDiv = document.getElementById("countdown-frozen-blast");
var countdownNumberEl = document.getElementById(
  "countdown-frozen-blast-number"
);
setInterval(function () {
  countdown = --countdown <= 0 ? 5 : countdown;
}, 1000);

for (let i = 0; i < placementTilesData.length; i += 20) {
  placementTilesData2D.push(placementTilesData.slice(i, i + 20));
}

placementTilesData2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 14) {
      placementTiles.push(
        new PlacementTile({ position: { x: x * 64, y: y * 64 } })
      );
    }
  });
});

animate();
window.addEventListener("blur", () => {
  setPause();
});

document.getElementById("settings-img").addEventListener("click", (e) => {
  setPause(e);
});

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.location.href = "../loggedMenu.html";
}
