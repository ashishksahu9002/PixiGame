const app = new PIXI.Application({
    view: document.getElementById("gameCanvas"),
    width: 1920,
    height: 1080,
    background: 0x000000,
  });
  
  globalThis.__PIXI_APP__ = app;
  
  // loading all assets
  
  const assetsList = ["assets/1x/preloaderAssets.json"];
  
  PIXI.Assets.load(assetsList).then(() => {
    console.error("1. Assets Loaded");
    // createRootContainer();
  });


  