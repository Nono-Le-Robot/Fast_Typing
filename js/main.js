//faire le btn pause  - ok (escape)
//ajouter des sons ok ( explosion )
//faire pusieurs vagues ok (voir pour boss)

//============ reste a faire : =================
//refactoring code
//faire lanim de ralentissement
//missile + retire tout les enemies
//faire une autre map
//faire un UI / parametres / sons
//systeme de compte et classement
//les stats (precisions, nombre de mots, temps de jeu, etc)
//multijoueurs

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
