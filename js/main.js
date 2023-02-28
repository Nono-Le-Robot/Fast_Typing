//============ reste a faire : =================
//missile + retire tout les enemies
//faire un UI / parametres / sons
//systeme de compte et classement
//les stats (precisions, nombre de mots, temps de jeu, etc)
//multijoueurs
//create a synth and connect it to the main output (your speakers)

//OK declarer une lettre ex : const lettre = "E"
//OK mettre une balise vide detexter le timing de l'utilisateur en html en la mettant au centre et une largeur de la taille de la tolérance
//afficher une lettre qui va du bord droit au bort gauche (et triyver sa position au millieu du canvas)
//dans l'addeventlistener mettrre une condition qui se declenche uniquement dans la boss wave
//si la touche === a la bonne touche ET que la position de la lettre et + / - = au millieu du canvas
// jouer le son
//afiicher un animation si la lettre est valide
//sinon afficher une animation si la lettre est invalide
//si la lettre est valide, retirer la lettre du tableau et passer a la suivante
//si la lettre est invalide, retirer la lettre du tableau et passer a la suivante
//si le tableau est vide, passer a la vague suivante

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
}, 400);

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

// animate();
// window.addEventListener("blur", function () {
//   setPause();
// });
