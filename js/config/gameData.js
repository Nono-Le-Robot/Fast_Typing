//editable
let hearts = 5;
let score = 0;
let enemyStartAmount = 1;
let enemyIncrease = 3;
let damageProjectiles = 10;
let radiusBuildings = 250;
let speedProjectiles = 30;
let fireRate = 40;

//difficulty :
let speedEnemies = 0.8;
let spawnRate = 2000;
let levels = [
  {
    name: "impossible",
    speedEnemies: 2,
    spawnRate: 500,
  },
  {
    name: "difficile",
    speedEnemies: 1,
    spawnRate: 500,
  },
  {
    name: "moyen",
    speedEnemies: 1,
    spawnRate: 1500,
  },
  {
    name: "easy",
    speedEnemies: 0.8,
    spawnRate: 2000,
  },
  {
    name: "sous merde",
    speedEnemies: 0.5,
    spawnRate: 5000,
  },
];

// init
let index = 0;
let placementTiles = [];
let buildings = [];
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

//words list
let words = [
  //words
  // "éclat",
  // "mystère",
  // "bonheur",
  // "musique",
  // "beauté",
  // "étoile",
  // "espoir",
  // "chaleur",
  // "amour",
  // "douceur",
  // "sécurité",
  // "courage",
  // "destin",
  // "richesse",
  // "leadership",
  // "perseverance",
  // "solidarité",
  // "humilité",
  // "modestie",
  // "sincérité",
  // "confiance",
  // "égalité",
  // "partage",
  // "empathie",
  // "sagesse",
  // "intelligence",
  // "sérénité",
  // "pénétration",
  // "prospérité",
  // "abondance",
  // "grâce",

  // story
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
];
