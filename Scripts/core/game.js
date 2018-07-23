/// <reference path="_references.ts"/>
//iffi
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    var currentScene;
    assetManifest = [
        {
            id: "clickMeButton", src: "./Assets/images/clickMeButton.png"
        },
        {
            id: "startButton", src: "./Assets/images/StartButton.png"
        }
    ];
    function Init() {
        console.log("initialization Started");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        Start();
    }
    function Start() {
        console.log("Starting Application");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        objects.Game.currentScene = config.Scene.START;
        Main();
    }
    function Update() {
        // helloLabel.rotation -= 5;
        if (currentScene.Update() != objects.Game.currentScene) {
            console.log(objects.Game.currentScene);
            Main();
        }
        stage.update();
    }
    // function clickMeButtonMouseOver():void{
    //     clickMeButton.alpha = 0.7;
    // }
    // function clickMeButtonMouseOut():void{
    //     clickMeButton.alpha = 1.0;
    // }
    function clickMeButtonMouseClick() {
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        clickMeButton.alpha = 1.0;
    }
    function Main() {
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                {
                    stage.removeAllChildren();
                    currentScene = new scenes.StartScene(assetManager);
                    stage.addChild(currentScene);
                }
                break;
            case config.Scene.PLAY:
                break;
            case config.Scene.OVER:
                break;
        }
        // console.log("Game Starting ");
        // helloLabel = new objects.Label("Hello,World " , "40px", "Consolas" , "#000000", 320,240,true);
        // console.log(helloLabel);
        // stage.addChild(helloLabel);
        // clickMeButton = new objects.Button(assetManager,"clickMeButton",320,340);
        // stage.addChild(clickMeButton);
        // clickMeButton.on("click" , clickMeButtonMouseClick);
        // helloLabel.x =  200;
        // helloLabel.y =  200;
        // helloLabel.regX = helloLabel.getMeasuredWidth() *0.5;
        // helloLabel.regY = helloLabel.getMeasuredHeight() *0.5;
        // clickMeButton.regX  = clickMeButton.getBounds().width * 0.5;
        // clickMeButton.regY  = clickMeButton.getBounds().height * 0.5;
        // clickMeButton.x = 320 ;
        // clickMeButton.y = 340 ;
        // clickMeButton.on("mouseover" , clickMeButtonMouseOver);
        // clickMeButton.on("mouseout" , clickMeButtonMouseOut);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map