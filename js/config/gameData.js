//editable
let hearts = 10;
let score = 0;
let enemiesInWave = 5;
let enemiesSpawn = 0;
let enemixInCurrentWave = 0;
let enemyIncrease = 1;
let damageProjectiles = 10;
let radiusBuildings = 250;
let speedProjectiles = 50;
let fireRate = 45;
let attackTowerPrice = 50;
let slowTowerPrice = 50;
let coinsPerAttack = 0.5;
let coins = 50000;

//difficulty :
let initSpeedEnemies = 1;
let speedEnemies = initSpeedEnemies;

// init
let rightkey = false;
let slowTowerOccupied = false;
let wave = 0;
let round = 0;
let waveEnded = true;
let index = 0;
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
let words = [
  [
    // wave 1 78 - 99 (21)
    "l'espace",
    "est",
    "un",
    "vaste",
    "univers",
    "qui",
    "nous",
    "enchante",
    "par",
    "sa",
    "beauté",
    "et",
    "sa",
    "mystérieuse",
    "complexité",
    "l'étude",
    "de",
    "l'espace",
    "et",
    "des",
    "corps",
    "célestes",
  ],
  [
    // wave 2 103 - 137 (34)
    "qui",
    "le",
    "peuplent",
    "est",
    "une",
    "entreprise",
    "à",
    "la",
    "fois",
    "fascinante",
    "et",
    "impitoyable",
    "l'informatique",
    "est",
    "un",
    "outil",
    "puissant",
    "qui",
    "a",
    "revolutionné",
    "notre",
    "manière",
    "d'étudier",
    "l'univers",
    "et",
    "de",
    "comprendre",
    "ses",
    "mystères",
    "les",
    "algorithmes",
    "et",
    "les",
    "méthodes",
    "mathématiques",
  ],
  [
    // wave 3 141 - 183 (42)
    "développés",
    "par",
    "les",
    "informaticiens",
    "ont",
    "permis",
    "une",
    "analyse",
    "plus",
    "précise",
    "et",
    "efficace",
    "des",
    "données",
    "spatiales",
    "ce",
    "qui",
    "a",
    "abouti",
    "à",
    "de",
    "nouvelles",
    "découvertes",
    "et",
    "à",
    "une",
    "meilleure",
    "compréhension",
    "de",
    "l'univers",
    "ensemble",
    "espace",
    "et",
    "informatique",
    "offrent",
    "des",
    "possibilités",
    "infinies",
    "de",
    "découverte",
    "et",
    "de",
    "progrès",
  ],
];
