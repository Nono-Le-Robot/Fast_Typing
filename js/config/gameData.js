//editable
let hearts = 5;
let score = 0;
let speedEnemies = 1;
let enemyStartAmount = 3;
let enemyIncrease = 3;
// let damageProjectiles = 10;
let radiusBuildings = 250;
let speedProjectiles = 5;
let fireRate = 100;

// init
let placementTiles = [];
let buildings = [];
let activeTile = undefined;
let enemies = [];
let usedWords = [];
let selectedTarget = null;
let isSelected = false;
let projectiles = [];
let mouse = {
  x: undefined,
  y: undefined,
};

//words list
let words = [
  "démocratie",
  "innovation",
  "éducation",
  "compassion",
  "optimisme",
  "créativité",
  "communication",
  "professionalisme",
  "philanthropie",
  "sociabilité",
  "humanité",
  "authenticité",
  "imagination",
  "excellence",
  "dignité",
  "tolérance",
  "équité",
  "justice",
  "travail",
  "patience",
  "efficacité",
  "espérance",
  "respect",
  "générosité",
  "intégrité",
  "courage",
  "détermination",
  "résilience",
  "coopération",
  "pouvoir",
  "leadership",
  "perseverance",
  "amitié",
  "amour",
  "solidarité",
  "humilité",
  "modestie",
  "sincérité",
  "confiance",
  "égalité",
  "partage",
  "empathie",
  "sagesse",
  "intelligence",
  "sérénité",
  "pénétration",
  "prospérité",
  "bonté",
  "fidélité",
  "abondance",
  "grâce",
];
