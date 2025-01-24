const app = new PIXI.Application({
  view: document.getElementById("gameCanvas"),
  width: 1080,
  height: 720,
  backgroundColor: 0x1099bb,
});

globalThis.__PIXI_APP__ = app;

// Load both preloader and game spritesheets
const spritesheets = [
  "assets/images/assets.json",
  "assets/images/background.jpg"
];

PIXI.Assets.load(spritesheets).then(() => {
  console.error("Assets loaded.....")
  initPreloader()
});

function initPreloader () {
  
}
