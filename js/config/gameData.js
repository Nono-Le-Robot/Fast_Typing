//editable

let hearts = 10;
let score = 0;
let enemiesInWave = 5;
let enemiesSpawn = 0;
let enemixInCurrentWave = 0;
let enemyIncrease = 1;
let damageProjectiles = 10;
let radiusBuildings = 250;
let speedProjectiles = 30;
let speedSlowProjectiles = 3;

let fireRate = 45;
let attackTowerPrice = 50;
let slowTowerPrice = 50;
let coins = 50;
let coinsMultiplier = 1;
let coinsPerAttack = 0.1;

//difficulty :
let initSpeedEnemies = 0.5;
let speedEnemies = initSpeedEnemies;

// init

frozen = false;

let playerHit = false;
let gameOver = false;
let pause = false;
let rightkey = false;
let slowTowerOccupied = false;
let wave = 0;
let round = 0;
let waveEnded = true;
let index = 0;
let explosionsEnemy = [];
let explosionsPlayerHit = [];
let explosionsGameOver = [];
let frozenEnemies = [];
let slowProjectiles = [];
let placementTiles = [];
let buildings = [];
let players = [];
let enemies = [];
let usedWords = [];
let projectiles = [];
let activeTile = undefined;
let selectedTarget = null;
let isSelected = false;
let mouse = {
  x: undefined,
  y: undefined,
};
let goodEntry = 0;
let wrongEntry = 0;
let combo = 0;

//words list
let words = [];
const brutText = [
  "l'univers et le temps ont toujours fasciné l'humanité depuis des milliers d'années les êtres humains ont cherché à comprendre les mystères qui se cachent derrière ces concepts l'univers c'est l'ensemble de tout ce qui existe des galaxies lointaines aux plus petites particules subatomiques tout est inclus dans cet immense espace qui nous entoure pourtant malgré l'étendue de l'univers nous ne sommes qu'une petite partie de cet ensemble l'espace est l'une des dimensions les plus fondamentales de l'univers c'est un lieu où il n'y a ni matière ni énergie ni temps pourtant l'espace est loin d'être vide il est rempli de champs électromagnétiques de rayonnements cosmiques et de matière noire cette dernière bien que difficile à détecter est essentielle pour comprendre l'univers et sa structure le temps est une autre dimension fondamentale de l'univers c'est une mesure de la durée des événements du passé au présent et au futur le temps s'écoule de manière linéaire mais la relativité restreinte a montré que la perception du temps varie en fonction de la vitesse à laquelle on se déplace cela signifie que deux personnes qui se déplacent à des vitesses différentes peuvent avoir des perceptions différentes du temps l'univers l'espace et le temps sont intimement liés en effet l'espace et le temps sont indissociables formant ce que l'on appelle l'espace-temps cette fusion est essentielle pour comprendre l'univers et la gravité la théorie de la relativité générale d'albert einstein a montré que la gravité n'est pas une force comme les autres mais une courbure de l'espace-temps provoquée par la présence de matière le big bang est l'événement qui marque le début de l'univers tel que nous le connaissons cette explosion soudaine a libéré une immense quantité d'énergie qui a créé la matière et l'espace-temps depuis le big bang l'univers s'est étendu de manière continue formant des galaxies des étoiles et des planètes l'exploration de l'espace a été l'un des grands défis de l'humanité depuis les premiers pas sur la lune jusqu'aux missions les plus récentes sur mars les humains ont cherché à explorer les limites de notre système solaire et au-delà les missions spatiales ont permis de découvrir de nouvelles planètes de nouvelles galaxies et de nouvelles formes de vie mais l'espace reste encore largement inconnu et il reste de nombreux défis à relever pour en apprendre davantage sur l'univers l'univers l'espace et le temps sont des concepts complexes et fascinants bien que nous en sachions déjà beaucoup sur eux il reste encore beaucoup à découvrir grâce aux avancées technologiques et scientifiques nous pouvons espérer en apprendre encore plus sur les mystères qui se cachent derrière ces concepts l'exploration de l'espace est une entreprise difficile mais elle est essentielle pour comprendre notre place dans l'univers et les défis auxquels nous sommes confrontés",
];
let increment = 1;
for (let i = 0; i < brutText.length; i++) {
  let slicedText = brutText[i].split(" ");
  let waveWords = [];
  for (let j = 0; j < slicedText.length; j += 10) {
    let slice = slicedText.slice(j, j + 10 + j);
    waveWords.push(slice);
    increment++;
  }
  words.push(waveWords);
  words = words[0];
}
console.log(words);
