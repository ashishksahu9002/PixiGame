function AppFacade () {
    this.gameReady = false;
    this.createPrimaryViews()
}

const AFProto = Object.create(AppFacade)

AFProto.createPrimaryViews = () => {
    this.craetePreloader();
}

AFProto.craetePreloader =()=> {
    const preloaderView = new PreloaderView()
    const preloaderViewModel = new PreloaderViewModel(preloaderView)
    app.appendChild(preloaderView)
}