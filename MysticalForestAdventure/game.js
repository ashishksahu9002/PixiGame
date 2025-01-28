const app = new PIXI.Application({
  view: document.getElementById("gameCanvas"),
  width: 1920,
  height: 1080,
  background: 0x000000,
});

globalThis.__PIXI_APP__ = app;

// All text Style Properties
const fontProperties = {
  enterText: {
    fontFamily: "Arial",
    fontSize: 40,
    fill: 0xffffff,
    align: "left",
  },
};

// loading all assets
const assetsList = ["assets/1x/preloaderAssets.json"];

PIXI.Assets.load(assetsList).then(() => {
  console.error("1. Assets Loaded");
  createRootContainer();
});

// create root container
function createRootContainer() {
  const rootContainer = new PIXI.Container();
  rootContainer.name = "rootContainer";
  app.stage.addChild(rootContainer);
  createSplashScreen(rootContainer);
}

// create splash screen
function createSplashScreen(rootContainer) {
  // create splash screen container
  const preloaderConatiner = new PIXI.Container();
  preloaderConatiner.name = "preloaderConatiner";
  rootContainer.addChild(preloaderConatiner);
  preloaderConatiner.interactive = false

  // create background for splash screen
  const preloaderBg = new PIXI.Sprite(
    PIXI.Texture.from("loadingScreenBackground")
  );
  preloaderBg.name = "preloaderBg";
  preloaderBg.width = app.screen.width;
  preloaderBg.height = app.screen.height;
  preloaderConatiner.addChild(preloaderBg);

  // create logo for splash screen
  const preloaderLogo = new PIXI.Sprite(PIXI.Texture.from("preloaderGameLogo"));
  preloaderLogo.name = "preloaderLogo";
  preloaderConatiner.addChild(preloaderLogo);
  preloaderLogo.scale.set(0.75);
  preloaderLogo.x = app.screen.width / 2 - preloaderLogo.width / 2;
  preloaderLogo.y = app.screen.height / 2 - preloaderLogo.height / 2 - 150;

  // create loading bar
  // create loading bar conatiner
  const loadingBarContainer = new PIXI.Container();
  loadingBarContainer.name = "loadingBarContainer";
  preloaderConatiner.addChild(loadingBarContainer);

  const barConatiner = new PIXI.Container();
  barConatiner.name = "barConatiner";
  loadingBarContainer.addChild(barConatiner);

  const loadingBarEmpty = new PIXI.Sprite(PIXI.Texture.from("loadingBarEmpty"));
  loadingBarEmpty.name = "loadingBarEmpty";
  barConatiner.addChild(loadingBarEmpty);

  const loadingBarFill = new PIXI.Sprite(PIXI.Texture.from("loadingBarFill"));
  loadingBarFill.name = "loadingBarFill";
  barConatiner.addChild(loadingBarFill);

  const loadingBarDesign = new PIXI.Sprite(
    PIXI.Texture.from("loadingBarDesign")
  );
  loadingBarDesign.name = "loadingBarDesign";
  barConatiner.addChild(loadingBarDesign);

  const loadingText = new PIXI.Sprite(PIXI.Texture.from("loadingText"));
  loadingText.name = "loadingText";
  loadingBarContainer.addChild(loadingText);

  loadingBarContainer.scale.set(0.75);
  loadingBarContainer.x = app.screen.width / 2 - loadingBarContainer.width / 2;
  loadingBarContainer.y =
    app.screen.height / 2 - loadingBarContainer.height / 2 + 190;

  loadingText.x = loadingBarContainer.width / 2 - loadingText.width / 2 + 150;
  loadingText.y = loadingBarContainer.height / 2 - loadingText.height / 2 + 70;
  
  const enterText = new PIXI.Text("PRESS ANYWHERE TO CONTINUE", fontProperties.enterText);
  enterText.name = "enterText"
  loadingBarContainer.addChild(enterText)
  enterText.x = loadingBarContainer.width / 2 - enterText.width / 2 + 450;
  enterText.y = loadingBarContainer.height / 2 - enterText.height / 2 + 100;
  enterText.anchor.x = 0.5
  enterText.anchor.y = 0.5
  enterText.visible = false

  loadingBarFill.width = 0;
  TweenMax.to(loadingBarFill, 2, {
    width: loadingBarEmpty.width, // The final width to fill the bar
    ease: "power1.inOut", // Optional ease
    onComplete: () => {
      console.error("2. Loading Complete");
      enterText.visible = true
      loadingText.visible = false
    },
  });
  TweenMax.to(enterText.scale, 0.5, {
    x: 1.1,
    y: 1.1,
    ease: "power1.none",
    delay: 2,
    repeat: -1,
    yoyo: true,
  })
  preloaderConatiner.interactive = true
}